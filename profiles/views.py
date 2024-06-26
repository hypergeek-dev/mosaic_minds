from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from api.permissions import IsOwnerOrReadOnly
from .models import Profile
from .serializers import ProfileSerializer

class ProfileList(generics.ListCreateAPIView):
    """
    List all profiles and create a new profile.
    """
    queryset = Profile.objects.all().order_by('-created_at')
    serializer_class = ProfileSerializer

class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update, or delete a profile if you're the owner.
    """
    queryset = Profile.objects.all() 
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = ProfileSerializer

    def get_queryset(self):
        user = self.request.user
        return self.queryset.filter(owner=user)
