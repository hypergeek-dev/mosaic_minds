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

class ProfileDetail(generics.RetrieveUpdateAPIView):
    """
    Retrieve or update a profile if you're the owner.
    """
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
    serializer_class = ProfileSerializer

    def get_queryset(self):
        user = self.request.user
        return Profile.objects.filter(owner=user)