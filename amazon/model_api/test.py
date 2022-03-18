from unicodedata import name
from django.test import TestCase
from django.db import models
from django.contrib.auth.password_validation import validate_password
import os
import sys

sys.path.append(os.path.realpath(".."))

from backend import settings
from model_api.models import Product, Order, Client


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


# Must relate to Client
# class TestOrderModel(TestCase):


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
