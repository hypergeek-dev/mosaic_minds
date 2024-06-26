from django.urls import path
from profiles import views

urlpatterns = [
    path('profiles/', views.ProfileList.as_view(), name='profile-list'),
    path('profiles/<int:pk>/', views.ProfileDetail.as_view(), name='profile-detail'),
    path('profiles/<int:pk>/edit/', views.ProfileDetail.as_view(), name='profile-edit'),

]
