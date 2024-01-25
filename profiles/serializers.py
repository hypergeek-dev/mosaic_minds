from django.contrib.auth.models import User
from rest_framework import serializers
from phonenumber_field.serializerfields import PhoneNumberField
from profiles.models import Profile

class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    email = serializers.EmailField(source='owner.email')
    phonenumber = PhoneNumberField()
    role_at_meeting = serializers.CharField(max_length=255, allow_blank=True)

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def update(self, instance, validated_data):
        # Extract 'email' from 'owner' data
        owner_data = validated_data.pop('owner', {})
        email = owner_data.get('email')
        
        # Update email if it is provided
        if email:
            user = User.objects.get(id=instance.owner.id)
            user.email = email
            user.save()

        # Update other Profile fields
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        return instance

    class Meta:
        model = Profile
        fields = [
            'id', 'owner', 'first_name',
            'last_name', 'phonenumber', 'role_at_meeting', 'email',
            'is_owner',
        ]
