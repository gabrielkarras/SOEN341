from django.contrib import admin
from .models import Client


# add your models admin interface here
class ClientAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "created")


# class StoreOwnerAdmin(admin.ModelAdmin):
#     list_display = ("adminID", "name", "email", "created")


# class OrdersAdmin(admin.ModelAdmin):
#     list_display = ("orderID", "userID", "status", "totalprice", "created")


# class ProductsAdmin(admin.ModelAdmin):
#     list_display = ("companyID", "name", "category", "totalprice", "stock")


# class CartAdmin(admin.ModelAdmin):
#     list_display = ("cartID", "shippingcost", "totalprice")

# Register models
admin.site.register(Client, ClientAdmin)
# admin.site.register(StoreOwner, StoreOwnerAdmin)
# admin.site.register(Orders, OrdersAdmin)
# admin.site.register(Products, ProductsAdmin)
# admin.site.register(Cart, CartAdmin)
