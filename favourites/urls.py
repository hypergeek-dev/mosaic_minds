from django.urls import path
from favourites import views

urlpatterns = [
    path('favourites/', views.favouriteList.as_view()),
    path('favourites/<int:pk>/', views.favouriteDetail.as_view()),
]
