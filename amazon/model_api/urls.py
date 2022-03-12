from django.urls import include, path
from . import views

urlpatterns = [
    path("auth/", include("rest_auth.urls")),
    path("auth/register/", include("rest_auth.registration.urls")),
    path("", views.getRoutes, name="routes"),
    path("products/", views.getProducts, name="products"),
    path("products/<int:pk>/", views.getProduct, name="product"),
    path("products/<str:pk>/", views.getCategoryProducts, name="categoryProducts"),
]
