from django.contrib.auth.forms import UserChangeForm, UserCreationForm

from .models import Client


class ClientCreationForm(UserCreationForm):
    class Meta:
        mode = Client
        fields = (
            "email",
            "isStoreOwner",
        )


class ClientChangeForm(UserChangeForm):
    class Meta:
        model = Client
        fields = UserChangeForm.Meta.fields
