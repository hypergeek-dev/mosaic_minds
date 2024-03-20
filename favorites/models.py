from django.db import models
from django.conf import settings
from meetings.models import Meeting

class Favorite(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='favorites')
    meeting = models.ForeignKey(Meeting, on_delete=models.CASCADE, related_name='favorited_by')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('user', 'meeting')
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.user.username} favorites {self.meeting.name}'
