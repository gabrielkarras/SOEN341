# from django.core.validators import MinValueValidator, MaxValueValidator
from unicodedata import name
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.forms import PasswordInput
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
