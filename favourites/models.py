from django.db import models
from django.contrib.auth.models import User
from meeting.models import Meeting  # Import your Meeting model

class Favourite(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    meeting = models.ForeignKey(
        Meeting, related_name='favourites', on_delete=models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ['owner', 'meeting']

    def __str__(self):
        return f'{self.owner} favourites {self.meeting}'