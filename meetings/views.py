from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import permissions, status
from rest_framework.response import Response
from .models import Meeting
from .serializers import MeetingSerializer
from api.permissions import IsOwnerOrReadOnly
from rest_framework.pagination import PageNumberPagination

class MeetingList(ListAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = MeetingSerializer
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

    def post(self, request, *args, **kwargs):
        serializer = MeetingSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save(added_by=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MeetingDetail(RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
    queryset = Meeting.objects.all()
    serializer_class = MeetingSerializer
    lookup_field = 'id' 

    def get_queryset(self):
        """
        This view returns a meeting object based on its ID.
        The IsOwnerOrReadOnly permission ensures only the owner can edit or delete it.
        """
        return super().get_queryset()

    def perform_create(self, serializer):
        serializer.save(added_by=self.request.user)

    def perform_update(self, serializer):
        serializer.save(added_by=self.request.user)
