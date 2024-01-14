from django.contrib import admin
from django.urls import path, include
from meetings import views
from users import views

urlpatterns = [
    path('api/register/', views.register_user, name='register_user'),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('meetings/', include('meetings.urls')), 
]