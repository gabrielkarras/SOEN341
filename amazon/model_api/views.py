from rest_framework import viewsets
from .models import Client
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .models import Product
from .serializers import (
    ProductSerializer,
    ClientSerializer,
    ClientSerializerWithToken,
)
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.hashers import make_password


class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()


@api_view(["POST"])
def registerClient(request):
    data = request.data
    client = Client.objects.create(
        first_name=data["name"],
        username=data["email"],
        email=data["email"],
        password=make_password(data["password"]),
    )
    serializers = ClientSerializerWithToken(client, many=False)
    return Response(serializers.data)


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = ClientSerializerWithToken(self.user).data

        for k, v in serializer.items():
            data[k] = v

        return data


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getClientProfile(request):
    user = request.user
    serializer = ClientSerializer(user, many=False)
    return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAdminUser])
def getClients(request):
    clients = Client.objects.all()
    serializer = ClientSerializer(clients, many=True)
    return Response(serializer.data)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(["GET"])
def getRoutes(request):
    routes = [
        "/api/products/",
        "/api/products/<id>/",
        "/api/products/<category>/",
    ]
    return Response(routes)


@api_view(["GET"])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(["GET"])
def getCategoryProducts(request, pk):
    entertainmentProducts = Product.objects.filter(category=pk)
    serializer = ProductSerializer(entertainmentProducts, many=True)
    return Response(serializer.data)
