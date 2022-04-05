from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Client, Product, Order, OrderedProduct


class ClientSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Client
        fields = ("_id", "email", "username", "name")

    def get__id(self, obj):
        return obj.id

    def get_name(self, obj):
        name = obj.first_name
        if name == "":
            name = obj.email

        return name


class ClientSerializerWithToken(ClientSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Client
        fields = ("_id", "email", "username", "name", "token", "isStoreOwner")

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"

class OrderedProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderedProduct
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    Client = serializers.SerializerMethodField(read_only=True)
    orderedProduct = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

    def get_orderProducts(self,obj):
        items = obj.orderproduct_set.all()
        serializer = OrderedProductSerializer(items,many=True)
        return serializer.data

    def get_Client(self,obj):
        items = obj.user
        serializer = ClientSerializer(items,many=False)
        return serializer.data

