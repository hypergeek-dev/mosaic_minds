from rest_framework import generics, permissions
from drf_api.permissions import IsOwnerOrReadOnly
from favourites.models import favourites
from favourites.serializers import FavouriteSerializer


class FavouriteList(generics.ListCreateAPIView):
    """
    List favourites or create a favourite if logged in.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = favourites.Serializer
    queryset = Favourite.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class FavouriteDetail(generics.RetrieveDestroyAPIView):
    """
    Retrieve a favourite or delete it by id if you own it.
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = FavouritesSerializer
    queryset = Favourites.objects.all()
