from rest_framework import serializers
from phonenumber_field.serializerfields import PhoneNumberField
from .models import Profile
from followers.models import Follower
from django.contrib.auth.models import User

class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    email = serializers.EmailField(source='owner.email')
    phonenumber = PhoneNumberField()
    role_at_meeting = serializers.CharField(max_length=255, allow_blank=True)  # Add this line

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_following_id(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            following = Follower.objects.filter(
                owner=user, followed=obj.owner
            ).first()
            return following.id if following else None
        return None

    class Meta:
        model = Profile
        fields = [
            'id', 'owner', 'first_name',
            'last_name', 'phonenumber', 'role_at_meeting', 'email',
            'is_owner', 
        ]
