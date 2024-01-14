from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save

class Profile(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    first_name = models.CharField(max_length=255, blank=True)
    last_name = models.CharField(max_length=255, blank=True)
    phone_number = models.CharField(max_length=20, blank=True)
    email = models.EmailField(max_length=255, blank=True)
    role_at_meeting = models.CharField(max_length=255, blank=True)
    comment = models.CharField(max_length=255, blank=True)

    class Meta:
        ordering = ['-created_at']
        db_table = 'mosaicminds.profiles'

    def __str__(self):
        return f"{self.owner.username}'s profile"

    def delete(self, *args, **kwargs):
        self.owner.delete()  
        super().delete(*args, **kwargs)  

def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(owner=instance)

post_save.connect(create_profile, sender=User)
