from rest_framework import generics
from drf_api.permissions import IsOwnerOrReadOnly
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
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        # Only return the specific profile associated with the authenticated user
        return Profile.objects.filter(owner=self.request.user)

    serializer_class = ProfileSerializer
