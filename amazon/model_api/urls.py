from django.urls import include, path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("products/", views.getProducts, name="products"),
    path("products/<int:pk>/", views.getProduct, name="product"),
    path("products/<str:pk>/", views.getCategoryProducts, name="categoryProducts",
    ),
]
