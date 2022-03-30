from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings


class Client(AbstractUser):
    isStoreOwner = models.BooleanField(default=False)

    def __str__(self):
        return self.email


class Order(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE
    )
    orderID = models.CharField(max_length=20, blank=True, null=True)
    status = models.CharField(max_length=64)
    totalprice = models.DecimalField(max_digits=6, decimal_places=2)
    created = models.BooleanField(default=False)

    def __str__(self):
        return self.orderID


class Product(models.Model):
    name = models.CharField(max_length=100, blank=True, null=True)
    price = models.CharField(max_length=20, null=True, blank=True)
    body_location = models.CharField(max_length=100, blank=True, null=True)
    category = models.CharField(max_length=100, blank=True, null=True)
    _id = models.IntegerField(primary_key=True, editable=False)
    imageSrc = models.URLField()
    numInStock = models.IntegerField(null=True, blank=True)
    companyId = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name


# class Products(models.Model):

#     companyID = models.IntegerField(
#         default=0, validators=[MinValueValidator(0), MaxValueValidator(1000)]
#     )
#     name = models.CharField(max_length=64)
#     category = models.CharField(max_length=64)
#     totalprice = models.DecimalField(max_digits=6, decimal_places=2)
#     stock = models.IntegerField(default=0, validators=[MinValueValidator(0)])

#     def __str__(self):
#         return self.companyID


# class Cart(models.Model):

#     cartID = models.IntegerField(
#         default=0, validators=[MinValueValidator(0), MaxValueValidator(1000)]
#     )
#     # products
#     shippingcost = models.DecimalField(max_digits=6, decimal_places=2)
#     totalprice = models.DecimalField(max_digits=6, decimal_places=2)

#     def __str__(self):
#         return self.cartID
