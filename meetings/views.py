from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions
from .models import Meeting
from .serializer import MeetingSerializer
from rest_framework.views import APIView

class MeetingList(APIView):
    """
    List all meetings, search meetings, or create a new meeting if you are an admin.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = MeetingSerializer

    def get(self, request):
        meetings = Meeting.objects.all()

        # Search parameters
        name = request.query_params.get('name')
        weekday = request.query_params.get('weekday') 
        time_of_day = request.query_params.get('time_of_day') 
        area = request.query_params.get('area')

        # Filtering based on search parameters
        if name:
            meetings = meetings.filter(name__icontains=name)
        if weekday:
            meetings = meetings.filter(meeting_time__week_day=weekday)
        if time_of_day:
            if time_of_day == 'morning':
                meetings = meetings.filter(meeting_time__hour__lt=12)
            elif time_of_day == 'afternoon':
                meetings = meetings.filter(meeting_time__hour__gte=12, meeting_time__hour__lt=18)
            elif time_of_day == 'evening':
                meetings = meetings.filter(meeting_time__hour__gte=18)
        if area:
            meetings = meetings.filter(area=area)

        serializer = MeetingSerializer(meetings, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request):
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)

        serializer = MeetingSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MeetingDetail(APIView):
    """
    Retrieve, update or delete a meeting instance.
    """
    serializer_class = MeetingSerializer

    def get_object(self, pk):
        try:
            meeting = Meeting.objects.get(pk=pk)
            self.check_object_permissions(self.request, meeting)
            return meeting
        except Meeting.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        meeting = self.get_object(pk)
        serializer = MeetingSerializer(meeting, context={'request': request})
        return Response(serializer.data)

    def put(self, request, pk):
        meeting = self.get_object(pk)
        serializer = MeetingSerializer(meeting, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        meeting = self.get_object(pk)
        meeting.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
