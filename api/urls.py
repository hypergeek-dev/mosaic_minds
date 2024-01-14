from django.contrib import admin
from django.urls import path, include
from meetings import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('', include('profiles.urls')), 
    path('meetings/', include('meetings.urls')), 
]