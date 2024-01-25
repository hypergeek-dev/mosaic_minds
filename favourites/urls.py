from django.urls import path
from favourites import views

urlpatterns = [
    path('favourites/', views.FavouriteListCreate.as_view()),
    path('favourites/<int:pk>/', views.FavouriteRetrieveDestroy.as_view()),
]
