from django.db import models
from rest_framework import serializers
from .models import Meeting



class MeetingSerializer(serializers.ModelSerializer):
    added_by_username = serializers.SerializerMethodField()
    is_owner = serializers.SerializerMethodField()  

    class Meta:
        model = Meeting
        fields = [
            'meeting_id', 'name', 'meeting_time', 'approved', 'area',
            'description', 'online_meeting_url', 'added_by', 'added_by_username',
            'is_owner' 
        ]
        extra_kwargs = {'added_by': {'read_only': True}}

    def get_added_by_username(self, obj):
        return obj.added_by.username if obj.added_by else None

    def get_is_owner(self, obj):
        request = self.context.get('request')
        if request and hasattr(request, 'user'):
            return obj.added_by == request.user
        return False

    def create(self, validated_data):
        validated_data['added_by'] = self.context['request'].user
        return Meeting.objects.create(**validated_data)
