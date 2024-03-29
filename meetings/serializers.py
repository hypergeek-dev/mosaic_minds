from rest_framework import serializers
from .models import Meeting
from favorites.models import Favorite

class MeetingSerializer(serializers.ModelSerializer):
    added_by_username = serializers.SerializerMethodField()
    is_owner = serializers.SerializerMethodField()
    area_display = serializers.SerializerMethodField()  
    weekday_display = serializers.SerializerMethodField() 
    area = serializers.ReadOnlyField(source='meeting.area')
    is_favorite = serializers.SerializerMethodField()  

    class Meta:
        model = Meeting
        fields = ['id', 'name', 'start_time', 'end_time', 'approved', 'area', 'weekday',  
                  'description', 'online_meeting_url', 'added_by', 'added_by_username',
                  'is_owner', 'area_display', 'weekday_display', 'is_favorite']
        extra_kwargs = {'added_by': {'read_only': True}}

    def get_added_by_username(self, obj):
        return obj.added_by.username if obj.added_by else None

    def get_is_owner(self, obj):
        request = self.context.get('request')
        if request and hasattr(request, 'user'):
            return obj.owner == request.user  
        return False

    def get_area_display(self, obj):
        return obj.get_area_display()

    def get_weekday_display(self, obj):
        return obj.get_weekday_display()

    def get_is_favorite(self, obj):
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            return Favorite.objects.filter(user=request.user, meeting=obj).exists()
        return False

    def create(self, validated_data):
        validated_data['added_by'] = self.context['request'].user
        return Meeting.objects.create(**validated_data)
