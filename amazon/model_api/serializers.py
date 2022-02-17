from rest_framework import serializers
from .models import Client, Product


class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ("email", "isStoreOwner", "last_login", "date_joined")


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
