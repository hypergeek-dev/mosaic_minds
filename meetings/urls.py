from django.urls import path, re_path
from meetings import views

urlpatterns = [
    path('meetings/', views.MeetingList.as_view()),
    re_path(r'^meetings/(?P<meeting_id>[0-9a-f-]+)/$', views.MeetingDetail.as_view(), name='meeting-details'),
]
