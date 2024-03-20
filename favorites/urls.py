from django.urls import path
from .views import FavoriteList, FavoriteDetail, check_favorite, toggle_favorite

urlpatterns = [
    path('favorites/', FavoriteList.as_view(), name='favorite-list'),
    path('favorites/<int:pk>/', FavoriteDetail.as_view(), name='favorite-detail'),
    path('favorites/check/<int:meeting_id>/', check_favorite, name='favorite-check'),
    path('favorites/toggle/<int:meeting_id>/', toggle_favorite, name='favorite-toggle'),
]
