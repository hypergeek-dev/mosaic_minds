from django.urls import path
from .views import VolunteerApplicationCreate

urlpatterns = [
    path('volunteer/', VolunteerApplicationCreate.as_view(), name='volunteer-apply'),
]
