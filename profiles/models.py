from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
from django.utils import timezone
import random


class Profile(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)
    first_name = models.CharField(max_length=255, blank=True)
    last_name = models.CharField(max_length=255, blank=True)
    phonenumber = PhoneNumberField(blank=True, null=True)
    role_at_meeting = models.CharField(max_length=255, blank=True)
    email = models.EmailField(max_length=255, blank=True)


    def __str__(self):
        return f"{self.owner}'s profile"

def create_profile(sender, instance, created, **kwargs):
    if created:
        unique_email = f"{instance.username.lower()}@example.com"
        # Generate a unique email, as before

        # Create the Profile with more information
        Profile.objects.create(
            owner=instance,
            email=unique_email,
            first_name=instance.first_name,
            last_name=instance.last_name,
            phonenumber='',  
            role_at_meeting=''  
        )

post_save.connect(create_profile, sender=User)
