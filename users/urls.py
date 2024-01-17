from django.urls import path
from .views import login_user, register_user, current_user

urlpatterns = [
    path('register/', register_user, name='register_user'),
    path('login/', login_user, name='user_login'), 
    path('current/', current_user, name='current_user'),
]
