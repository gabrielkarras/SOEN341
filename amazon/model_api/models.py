from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings


class Client(AbstractUser):
    isStoreOwner = models.BooleanField(default=False)

    def __str__(self):
        return self.email

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

class Order(models.Model):
    #client = models.ForeignKey(Client,on_delete=models.SET_NULL,null=True)
    _id =  models.AutoField(primary_key=True,editable=False, default=1)
    shippingAddress = models.CharField(max_length=200,null=True,blank=True)
    paymentMethod = models.CharField(max_length=200,null=True,blank=True)
    totalPrice = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
    dateTimeCreated = models.DateTimeField(auto_now_add=True,null=True, blank=True)

    def __str__(self):
        return str(self.createdAt)

class OrderedProduct(models.Model):
    product = models.ForeignKey(Product,on_delete=models.SET_NULL,null=True)
    order  = models.ForeignKey(Order,on_delete=models.SET_NULL,null=True)
    name = models.CharField(max_length=200,null=True,blank=True)
    qty = models.IntegerField(null=True,blank=True,default=0)
    price = models.DecimalField(max_digits=12,decimal_places=2,null=True,blank=True)
    _id =  models.AutoField(primary_key=True,editable=False, default=1)

    def __str__(self):
        return self.name
