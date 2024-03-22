from django.db import models

class VolunteerApplication(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    motivation = models.TextField()

    def __str__(self):
        return self.name
