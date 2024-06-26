from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .models import Favorite
from .serializers import FavoriteSerializer
from meetings.models import Meeting


class FavoriteList(generics.ListCreateAPIView):
    serializer_class = FavoriteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user)

class FavoriteDetail(generics.RetrieveDestroyAPIView):
    serializer_class = FavoriteSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'meeting_id'

    def get_queryset(self):
        return Favorite.objects.filter(user=self.request.user)

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def check_favorite(request, meeting_id):
    is_favorite = Favorite.objects.filter(user=request.user, meeting_id=meeting_id).exists()
    return Response({'isFavorite': is_favorite})

@api_view(['POST', 'DELETE'])
@permission_classes([permissions.IsAuthenticated])
def toggle_favorite(request, meeting_id):
    if request.method == 'POST':
        serializer = FavoriteSerializer(data={'meeting': meeting_id}, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response({'isFavorite': True}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        try:
            favorite = Favorite.objects.get(user=request.user, meeting_id=meeting_id)
            favorite.delete()
            return Response({'isFavorite': False}, status=status.HTTP_204_NO_CONTENT)
        except Favorite.DoesNotExist:
            return Response({'error': 'Favorite not found'}, status=status.HTTP_404_NOT_FOUND)
