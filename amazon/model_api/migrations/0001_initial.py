# Generated by Django 4.0.1 on 2022-02-10 23:17

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Cart",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "cartID",
                    models.IntegerField(
                        default=0,
                        validators=[
                            django.core.validators.MinValueValidator(0),
                            django.core.validators.MaxValueValidator(1000),
                        ],
                    ),
                ),
                (
                    "shippingcost",
                    models.DecimalField(decimal_places=2, max_digits=6),
                ),
                (
                    "totalprice",
                    models.DecimalField(decimal_places=2, max_digits=6),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Client",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "userID",
                    models.IntegerField(
                        default=0,
                        validators=[
                            django.core.validators.MinValueValidator(0),
                            django.core.validators.MaxValueValidator(1000),
                        ],
                    ),
                ),
                ("name", models.CharField(max_length=64)),
                ("email", models.CharField(max_length=128)),
                ("created", models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name="Orders",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "orderID",
                    models.IntegerField(
                        default=0,
                        validators=[
                            django.core.validators.MinValueValidator(0),
                            django.core.validators.MaxValueValidator(1000),
                        ],
                    ),
                ),
                (
                    "userID",
                    models.IntegerField(
                        default=0,
                        validators=[
                            django.core.validators.MinValueValidator(0),
                            django.core.validators.MaxValueValidator(1000),
                        ],
                    ),
                ),
                ("status", models.CharField(max_length=64)),
                (
                    "totalprice",
                    models.DecimalField(decimal_places=2, max_digits=6),
                ),
                ("created", models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name="Products",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "companyID",
                    models.IntegerField(
                        default=0,
                        validators=[
                            django.core.validators.MinValueValidator(0),
                            django.core.validators.MaxValueValidator(1000),
                        ],
                    ),
                ),
                ("name", models.CharField(max_length=64)),
                ("category", models.CharField(max_length=64)),
                (
                    "totalprice",
                    models.DecimalField(decimal_places=2, max_digits=6),
                ),
                (
                    "stock",
                    models.IntegerField(
                        default=0,
                        validators=[
                            django.core.validators.MinValueValidator(0)
                        ],
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="StoreAdmin",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "adminID",
                    models.IntegerField(
                        default=0,
                        validators=[
                            django.core.validators.MinValueValidator(0),
                            django.core.validators.MaxValueValidator(1000),
                        ],
                    ),
                ),
                ("name", models.CharField(max_length=64)),
                ("email", models.CharField(max_length=128)),
                ("created", models.BooleanField(default=False)),
            ],
        ),
    ]
