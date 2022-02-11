from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Feel free to edit the models below


class Client(models.Model):

    name = models.CharField(max_length=64)
    email = models.CharField(max_length=128)
    # password
    created = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class StoreOwner(models.Model):

    adminID = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(1000)]
    )
    name = models.CharField(max_length=64)
    email = models.CharField(max_length=128)
    # password
    created = models.BooleanField(default=False)

    def __str__(self):
        return self.adminID


class Orders(models.Model):

    orderID = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(1000)]
    )
    userID = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(1000)]
    )
    status = models.CharField(max_length=64)
    totalprice = models.DecimalField(max_digits=6, decimal_places=2)
    created = models.BooleanField(default=False)

    def __str__(self):
        return self.orderID


class Products(models.Model):

    companyID = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(1000)]
    )
    name = models.CharField(max_length=64)
    category = models.CharField(max_length=64)
    totalprice = models.DecimalField(max_digits=6, decimal_places=2)
    stock = models.IntegerField(default=0, validators=[MinValueValidator(0)])

    def __str__(self):
        return self.companyID


class Cart(models.Model):

    cartID = models.IntegerField(
        default=0, validators=[MinValueValidator(0), MaxValueValidator(1000)]
    )
    # products
    shippingcost = models.DecimalField(max_digits=6, decimal_places=2)
    totalprice = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return self.cartID
