import logging
from django.contrib.auth import login
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserRegistrationSerializer


logger = logging.getLogger(__name__)

@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            login(request, user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
  
            logger.error(f"User registration failed with errors: {serializer.errors}")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
      
        logger.error(f"Unexpected HTTP method in register_user view: {request.method}")
        return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)
