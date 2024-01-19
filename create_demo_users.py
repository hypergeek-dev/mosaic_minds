import os
import django
from django.contrib.auth import get_user_model
from django.utils.crypto import get_random_string
from django.db.models.signals import post_save



os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'api.settings')
django.setup()

User = get_user_model()

usernames = [
    "neuroSpice42",
    "quantumCoder",
    "AI_Wizard",
    "CyberPioneer",
    "RobotOverlord",
    "DataJedi",
    "TechNinja",
    "CryptoGeek",
    "NeuralNetMaster",
    "CodeSorcerer",
    "GeekUniverse",
    "HackerX",
    "AI_Alchemist",
    "DarkDataLord",
    "SciFiGuru",
    "SpaceExplorer",
    "TimeTraveler",
    "QuantumMechanic",
    "NerdInDisguise",
    "BinaryBard"
]


first_names = [
    "Emily", "Oliver", "Ava", "Liam", "Sophia", "James", "Isabella", "Ethan", "Mia", "Noah",
    "Amelia", "Harry", "Charlotte", "William", "Ella", "Benjamin", "Lucy", "Henry", "Grace", "Logan"
]

last_names = [
    "Taylor", "Johnson", "Brown", "Davis", "Wilson", "Moore", "Martin", "Jackson", "Thompson", "White",
    "Harris", "Young", "King", "Wright", "Mitchell", "Carter", "Phillips", "Walker", "Robinson", "Lee"
]

role_at_meeting = ["Meeting Leader", "Secretary", "Treasurer", "Literature Person", "Speaker", "Greeter", "Group Service Representative", "General service"]


user_data_dict = {}


for username in usernames:
    last_name = last_names.pop(0)  
    user_data_dict[username] = {
        "username": username,
        "password": get_random_string(12),
        "first_name": first_names.pop(0), 
        "last_name": last_name,
        "email": f"{username.lower()}.{last_name.lower()}@example.com",
    }


for user_data in user_data_dict.values():
    user, user_created = User.objects.get_or_create(
        username=user_data["username"],
        defaults={
            'email': user_data["email"],
            'first_name': user_data["first_name"],
            'last_name': user_data["last_name"],
        }
    )
    if user_created:
        user.set_password(user_data["password"])
        user.save()
        
def create_profile(sender, instance, created, **kwargs):
    if created:
        unique_email = f"{instance.username.lower()}@example.com"

        random_role = random.choice(role_at_meeting)

        Profile.objects.create(
            owner=instance,
            email=unique_email,
            first_name=instance.first_name,
            last_name=instance.last_name,
            phonenumber='',
            role_at_meeting=random_role  
        )

post_save.connect(create_profile, sender=User)