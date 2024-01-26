from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from django.http import Http404
from .models import Meeting
from .serializers import MeetingSerializer
from api.permissions import IsOwnerOrReadOnly
from rest_framework.pagination import PageNumberPagination


class MeetingList(ListAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = MeetingSerializer
    queryset = Meeting.objects.all()
    pagination_class = PageNumberPagination  

    def get_queryset(self):
        """
        Optionally restricts the returned meetings to a given user,
        by filtering against query parameters in the URL.
        """
        queryset = Meeting.objects.all()
        name = self.request.query_params.get('name')
        weekday = self.request.query_params.get('weekday')  
        time_of_day = self.request.query_params.get('time_of_day') 
        area = self.request.query_params.get('area')
        

        if name:
            queryset = queryset.filter(name__icontains=name)
        if weekday:
            queryset = queryset.filter(weekday=weekday)  
        if time_of_day:
            if time_of_day == 'morning':
                queryset = queryset.filter(meeting_time__hour__lt=12)
            elif time_of_day == 'afternoon':
                queryset = queryset.filter(meeting_time__hour__gte=12, meeting_time__hour__lt=18)
            elif time_of_day == 'evening':
                queryset = queryset.filter(meeting_time__hour__gte=18)
        if area:
            queryset = queryset.filter(area=area)

        return queryset

    def post(self, request):
        serializer = MeetingSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(owner=request.user)  
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MeetingDetail(APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    serializer_class = MeetingSerializer

    def get_object(self, id):
        try:
            return Meeting.objects.get(id=id)
        except Meeting.DoesNotExist:
            raise Http404

    def get(self, request, id):
        meeting = self.get_object(id)
        serializer = MeetingSerializer(meeting, context={'request': request})
        return Response(serializer.data)

    def put(self, request, id):
        meeting = self.get_object(id)
        serializer = MeetingSerializer(meeting, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        meeting = self.get_object(id)
        meeting.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
