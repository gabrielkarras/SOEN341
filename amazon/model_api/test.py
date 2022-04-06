import os
import sys

from backend import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.test import TestCase
from django.urls import reverse
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase

from model_api.models import Client, Order, Product
from model_api.serializers import ClientSerializer, ProductSerializer

sys.path.append(os.path.realpath(".."))

User = get_user_model()


class TestKeyStrength(TestCase):
    def test_secret_key(self):
        try:
            is_key_strong = validate_password(settings.SECRET_KEY)
            self.assertEqual(is_key_strong, None)
        except Exception as e:
            print("Weak Secret Key: {e.messages}")
            self.fail(e)


class TestClientModel(TestCase):
    def setUp(self):
        self.user = Client.objects.create(
            username="testClient",
            email="test_user@email.com",
            password="",
            isStoreOwner=False,
        )
        self.user.set.password("secret")
        self.user.save()
        self.client = Client()
        self.client.login(username="testClient", password="secret")


class UserTestCase(TestCase):
    def setUp(self):
        self.user_a = User.objects.create_user("cfe", password="abc123")

    def test_user_password(self):
        checked = self.user_a.check_password("abc123")
        self.assertTrue(checked)


class TestOrderModel(TestCase):
    def setUp(self):
        self.user_a = User.objects.create_user("cfe", password="abc123")
        self.order_a = Order.objects.create(
            user=self.user_a,
            orderID="001",
            status="test_status",
            totalprice=100.00,
            created=True,
        )

    def test_user_count(self):
        qs = User.objects.all()
        self.assertEqual(qs.count(), 1)

    def test_user_order_reverse_count(self):
        user = self.user_a
        qs = user.order_set.all()
        self.assertEqual(qs.count(), 1)

    def test_user_order_forward_count(self):
        user = self.user_a
        qs = Order.objects.filter(user=user)
        self.assertEqual(qs.count(), 1)


class TestProductModel(TestCase):
    def setUp(self):
        self.number_of_test_products = 5
        for i in range(0, self.number_of_test_products):
            Product.objects.create(
                name="TestProduct" + str(i),
                price="100.00",
                body_location="test_body_location",
                category="test_category",
                _id="000" + str(i),
                imageSrc="www.google.com",
                numInStock=10,
                companyId="test_company_id",
            )

    def test_queryset_exists(self):
        qs = Product.objects.all()
        self.assertTrue(qs.exists())

    def test_queryset_count(self):
        qs = Product.objects.all()
        self.assertEqual(qs.count(), self.number_of_test_products)
