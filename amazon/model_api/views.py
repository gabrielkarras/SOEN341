from django.forms import ClearableFileInput
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ClientSerializer
from .models import Client
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer


class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()


# Product View
@api_view(["GET"])
def getRoutes(request):
    routes = ["/api/products/", "/api/products/<id>/", "/api/products/<category>/"]
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