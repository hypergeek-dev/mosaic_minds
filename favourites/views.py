from rest_framework import generics, permissions
from api.permissions import IsOwnerOrReadOnly
from favourites.models import Favourite
from favourites.serializers import FavouriteSerializer
import logging

logger = logging.getLogger(__name__)

class FavouriteList(generics.ListCreateAPIView):
    """
    List favourites or create a favourite if logged in.
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = FavouriteSerializer
    queryset = Favourite.objects.all()

    def perform_create(self, serializer):
        logger.info(f"Creating new favourite by user: {self.request.user}")
        serializer.save(owner=self.request.user)

class FavouriteDetail(generics.RetrieveDestroyAPIView):
    """
    Retrieve a favourite or delete it by id if you own it.
    """
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = FavouriteSerializer
    queryset = Favourite.objects.all()
    lookup_field = 'meeting'

    def get(self, request, *args, **kwargs):
        logger.info(f"Retrieving favourite with ID: {kwargs.get('pk')}")
        return super().get(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        logger.info(f"Deleting favourite with ID: {kwargs.get('pk')} by user: {request.user}")
        return super().delete(request, *args, **kwargs)