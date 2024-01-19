from dj_rest_auth.serializers import UserDetailsSerializer
from django.contrib.auth.models import User
from rest_framework import serializers

class CurrentUserSerializer(UserDetailsSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')
