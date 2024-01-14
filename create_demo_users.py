import os
import django

# Configure the settings for Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'api.settings')
django.setup()

# After setting up Django, import the models
import uuid
from django.utils.crypto import get_random_string
from django.contrib.auth import get_user_model

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

# Define lists of first names and last names
first_names = [
    "Emily", "Oliver", "Ava", "Liam", "Sophia", "James", "Isabella", "Ethan", "Mia", "Noah",
    "Amelia", "Harry", "Charlotte", "William", "Ella", "Benjamin", "Lucy", "Henry", "Grace", "Logan"
]

last_names = [
    "Taylor", "Johnson", "Brown", "Davis", "Wilson", "Moore", "Martin", "Jackson", "Thompson", "White",
    "Harris", "Young", "King", "Wright", "Mitchell", "Carter", "Phillips", "Walker", "Robinson", "Lee"
]

# Create a dictionary to store user data
user_data_dict = {}

# Loop through usernames and assign unique names
for username in usernames:
    last_name = last_names.pop(0)  # Get the next last name
    user_data_dict[username] = {
        "username": username,
        "password": get_random_string(12),
        "first_name": first_names.pop(0),  # Get the next first name
        "last_name": last_name,
        "email": f"{username.lower()}.{last_name.lower()}@example.com",
    }

# Create or update users
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
