from rest_framework import serializers
from .models import Favorite

class FavoriteSerializer(serializers.ModelSerializer):
    
    meeting_name = serializers.ReadOnlyField(source='meeting.name')
    area = serializers.ReadOnlyField(source='meeting.area')
    
    class Meta:
        model = Favorite
        fields = ['id', 'user', 'meeting', 'created_at', 'meeting_name', 'area']
        read_only_fields = ['id', 'user', 'created_at', 'meeting_name', 'weekday_display', 'area']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)

    def validate(self, data):
        if Favorite.objects.filter(user=self.context['request'].user, meeting=data.get('meeting')).exists():
            raise serializers.ValidationError("This favorite already exists for the current user.")
        return data
