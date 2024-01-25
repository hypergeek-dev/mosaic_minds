from rest_framework import generics, permissions
from favourites.models import Favourite
from favourites.serializers import FavouriteSerializer
from .permissions import IsOwnerOrReadOnly 

class FavouriteListCreate(generics.ListCreateAPIView):

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = FavouriteSerializer

    def get_queryset(self):
        return Favourite.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class FavouriteRetrieveDestroy(generics.RetrieveDestroyAPIView):
    """
    Retrieve a favourite or delete it if you own it.
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = FavouriteSerializer
    queryset = Favourite.objects.all()
