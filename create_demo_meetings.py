import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'api.settings')
django.setup()

from django.contrib.auth import get_user_model
from meetings.models import Meeting
import datetime
import random

User = get_user_model()

meeting_names = [
    "NeuroConnect Hub", "DiverseMinds Forum", "InclusiveBrain Lounge",
    "NeuroHarmony Circle", "NeuroLife Oasis", "MindfulNeuro Nexus",
    "NeuroUnity Space", "NeuroThrive Haven", "SpectrumSoul Studio",
    "NeuroWave Assembly", "BeyondLabels Chamber", "EmbraceNeuro Network",
    "NeuroQuest Guild", "EmpowerMind Collective", "NeuroVoyage Oasis",
    "MindfulDiversity Den", "NeuroNurture Plaza", "NeuroSpectrum Junction",
    "NeuroGrowth Oasis", "EnlightenMinds Pavilion"
]

descriptions = [
    "Join our warm, welcoming group where we share experiences and strategies for thriving with neurodiversity. Open to all seeking support and understanding.",
    "A safe space to discuss the joys and challenges of neurodiversity. Share your story, listen to others, and find a community that gets you.",
    "Weekly gathering for individuals to explore the strengths of neurodiversity. Share your insights and learn new coping mechanisms in a supportive environment.",
    "A casual, friendly meet-up where we discuss life with neurodiversity, share personal stories, and offer mutual support in navigating daily challenges.",
    "Connect with others who understand the neurodiverse journey. Our meetings focus on positive strategies, personal growth, and shared experiences.",
    "A support circle for those navigating neurodiversity, offering a platform to share experiences, tips, and encouragement in a confidential setting.",
    "Join our neurodiverse family for insightful discussions, guest speakers, and a supportive network. Together, we celebrate our unique minds.",
    "This group is a haven for sharing the unique perspectives and challenges of neurodiverse life. Come to find understanding, support, and friendship.",
    "Our weekly Zoom sessions focus on embracing neurodiversity. Share your story and strategies for success in a non-judgmental, friendly environment.",
    "A nurturing space for neurodiverse individuals to connect, share experiences, and learn from each other. Discussions include coping strategies and self-advocacy.",
    "A weekly dose of inspiration and support for the neurodiverse community. Join us for engaging discussions, tips on self-care, and uplifting conversations.",
    "Empowering neurodiverse individuals through shared stories, resources, and encouragement. Join us to feel understood and supported in your journey.",
    "An open forum for exploring the unique challenges and strengths of being neurodiverse. Come share, listen, and grow with us.",
    "A community where neurodiversity is celebrated. Engage in meaningful conversations, exchange ideas, and find a network of support and understanding.",
    "Explore the world of neurodiversity with us. Our meetings are a mix of discussion, education, and sharing personal triumphs and challenges.",
    "A place to talk openly about neurodiversity, life experiences, and to support each other in our individual journeys. All are welcome in our inclusive group.",
    "Weekly online meet-up for exchanging ideas, strategies, and experiences related to neurodiversity. Join us for support, learning, and camaraderie.",
    "Fostering a supportive community for neurodiverse individuals. Share your journey, connect with peers, and build a network of understanding friends.",
    "A group dedicated to discussing the diverse aspects of neurodiversity. Share your experiences and learn how others navigate similar paths.",
    "Our group offers a blend of discussion, support, and education for the neurodiverse community. It's a place to learn, share, and grow together."]
users = User.objects.all()

for user, name in zip(users, meeting_names):
    meeting_description = random.choice(descriptions)
    meeting = Meeting.objects.create(
        name=name,
        meeting_time=datetime.time(
            random.randint(8, 18), random.choice([0, 30])),
        area=random.choice([choice[0] for choice in Meeting.AREA_CHOICES]),
        weekday=random.choice([choice[0] for choice in Meeting.WEEKDAY]),
        description=meeting_description,
        online_meeting_url="http://www.google.com",
        added_by=user,
        approved=True,
        owner=user  
    )