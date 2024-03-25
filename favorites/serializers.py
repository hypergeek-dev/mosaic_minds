from rest_framework import serializers
from .models import Favorite

class FavoriteSerializer(serializers.ModelSerializer):
    
    meeting_name = serializers.ReadOnlyField(source='meeting.name')
    area = serializers.ReadOnlyField(source='meeting.area')
    weekday_display = serializers.ReadOnlyField(source='meeting.get_weekday_display') 
    start_time = serializers.ReadOnlyField(source='meeting.start_time')  
    end_time = serializers.ReadOnlyField(source='meeting.end_time')  
    
    class Meta:
        model = Favorite
        fields = ['id', 'user', 'meeting', 'created_at', 'meeting_name', 'area', 'weekday_display', 'start_time', 'end_time']
        read_only_fields = ['id', 'user', 'created_at', 'meeting_name', 'area', 'weekday_display', 'start_time', 'end_time']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)

    def validate(self, data):
       
        if Favorite.objects.filter(user=self.context['request'].user, meeting=data.get('meeting')).exists():
            raise serializers.ValidationError("This favorite already exists for the current user.")
        return data
