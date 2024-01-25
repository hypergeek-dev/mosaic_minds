from django.urls import path
from meetings import views

urlpatterns = [
    path('meetings/', views.MeetingList.as_view()),
    path('meetings/<int:id>/', views.MeetingDetail.as_view(), name='meeting-details'), 
]
