from django.urls import path
from meetings import views
from django.urls import path
from .views import MeetingList 

urlpatterns = [
    path('', MeetingList.as_view(), name='meeting-list'),
    path('meetings/', views.MeetingList.as_view()),
    path('meetings/<int:pk>/', views.MeetingDetail.as_view())
]