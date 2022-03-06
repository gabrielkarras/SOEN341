from rest_framework import serializers
from .models import Client

# Feel free to modify the code below


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ("id", "name", "email", "created")
