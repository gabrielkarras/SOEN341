from lib2to3.pgen2.tokenize import TokenError
import os
import sys

from backend import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APITestCase

from model_api.models import Client, Order, OrderedProduct, Product
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
            client=self.user_a,
            _id="001",
            shippingAddress="test_status",
            paymentMethod="test_payment_method",
            totalPrice=100.00,
            dateTimeCreated="2018-11-20T15:58:44.767594-06:00",
        )

    def test_user_count(self):
        qs = User.objects.all()
        self.assertEqual(qs.count(), 1)

    def test_user_order_reverse_count(self):
        user = self.user_a
        qs = user.order_set.all()
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


class TestOrderProductModel(TestCase):
    def setUp(self):
        self.user_a = User.objects.create_user("cfe", password="abc123")

        self.order_a = Order.objects.create(
            client=self.user_a,
            _id="002",
            shippingAddress="test_status",
            paymentMethod="test_payment_method",
            totalPrice=100.00,
            dateTimeCreated="2018-11-20T15:58:44.767594-06:00",
        )

        self.product_a = Product.objects.create(
            name="TestProduct1",
            price="100.00",
            body_location="test_body_location",
            category="test_category",
            _id="001",
            imageSrc="www.google.com",
            numInStock=10,
            companyId="test_company_id",
        )

        self.ordered_product_a = OrderedProduct.objects.create(
            product=self.product_a,
            order=self.order_a,
            name="Ordered_Product1",
            qty=1,
            price=100.00,
            _id="002",
        )

    def test_user_count(self):
        qs = User.objects.all()
        self.assertEqual(qs.count(), 1)

    def test_user_order_reverse_count(self):
        user = self.user_a
        qs = user.order_set.all()
        self.assertEqual(qs.count(), 1)

    def test_user_orderedproduct_reverse_count(self):
        order = self.order_a
        qs = order.orderedproduct_set.all()
        self.assertEqual(qs.count(), 1)


class RegistartionTestCase(APITestCase):
    def test_registration(self):
        data = {
            "username": "testcase",
            "email": "test@localhost.app",
            "password": "some_pass",
        }
        response = self.client.post("auth/register/", data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


# class ProfileViewSetTestCase(APITestCase):
#
#    def api_authentication(self):
#        self.client.credentials(HTTP_AUTHORIZATION="Token " + self.token)
#
#    def setUp(self):
#        self.user = User.objects.create_user(
#            username="test_user",
#            password="test_pass")
#
#        self.token = Token.objects.create(user=self.user)
#        self.api_authentication()
