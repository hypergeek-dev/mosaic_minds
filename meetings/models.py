from django.db import models
import uuid
from django.conf import settings

class Meeting(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='owned_meetings')
    name = models.CharField(max_length=100)
    meeting_time = models.TimeField()
    approved = models.BooleanField(default=False)

    WEEKDAY = (
        ('SUN', 'Sunday'),
        ('MON', 'Monday'),
        ('TUE', 'Tuesday'),
        ('WED', 'Wednesday'),
        ('THU', 'Thursday'),
        ('FRI', 'Friday'),
        ('SAT', 'Saturday'),
    )
    weekday = models.CharField(max_length=3, choices=WEEKDAY)

    AREA_CHOICES = (
        ('CI', 'Channel Islands Area'),
        ('CTV', 'Chiltern & Thames Valley Area'),
        ('CA', 'Cornwall Area'),
        ('DA', 'Devon Area'),
        ('DO', 'Dorset Area'),
        ('EMA', 'East Midlands Area'),
        ('ES', 'Essex Area'),
        ('FC', 'Free Counties Area'),
        ('GM', 'Greater Manchester Area'),
        ('HA', 'Hampshire Area'),
        ('KE', 'Kent Area'),
        ('L-EC', 'Lancashire - East & Central Area'),
        ('L-NE', 'London - North East Area'),
        ('L-NW', 'London - North West Area'),
        ('L-SE', 'London - South East Area'),
        ('L-SW', 'London - South West Area'),
        ('MEA', 'Merseyside Area'),
        ('NS', 'Norfolk & Suffolk Area'),
        ('NEE', 'North East England Area'),
        ('NW', 'NW England & N Wales Area'),
        ('S-EC', 'Scotland - East Coast Area'),
        ('S-EL', 'Scotland - Edinburgh & Lothians Area'),
        ('S-GW', 'Scotland - Glasgow & West Coast Area'),
        ('S-WL', 'Scotland - West Lothian Area'),
        ('SWA', 'South Wales Area'),
        ('SU', 'Surrey Area'),
        ('SX', 'Sussex Area'),
        ('HIG', 'The Highlands & Islands Groups'),
        ('TS', 'The Shires Area'),
        ('UK-FAR', 'UK Farsi Groups Area'),
        ('WC', 'West Country Area'),
        ('WM', 'West Midlands Area'),
        ('WY', 'West Yorkshire'),
        ('YH', 'Yorkshire & Humberside Area'),
    )
    area = models.CharField(max_length=20, choices=AREA_CHOICES, default='CI')
    description = models.TextField()
    online_meeting_url = models.URLField()
    added_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='meetings'
    )

    class Meta:
        db_table = 'mosaicminds.meetings'

    def __str__(self):
        return f'{self.id} {self.name}'
