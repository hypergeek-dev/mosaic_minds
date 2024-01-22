from django.urls import path
from meetings import views
from django.urls import path


urlpatterns = [
    path('', views.MeetingList.as_view()),
    path('<int:pk>/', views.MeetingDetail.as_view())
]