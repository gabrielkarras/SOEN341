from django.contrib import admin

from .forms import (
    ClientChangeForm,
    ClientCreationForm,
)
from .models import Client
from .models import Product
from .models import Order
from .models import OrderedProduct
from django.contrib.auth.admin import UserAdmin


class ClientAdmin(UserAdmin):
    add_form = ClientCreationForm
    form = ClientChangeForm
    model = Client
    list_display = ["email", "isStoreOwner"]


admin.site.register(Client, ClientAdmin)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderedProduct)
