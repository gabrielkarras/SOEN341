from django.urls import include, path
from . import views

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path(
        "users/login/",
        views.MyTokenObtainPairView.as_view(),
        name="token_obtain_pair",
    ),
    path("users/register/", views.registerClient, name="Register Client"),
    path("users/", views.getClients, name="Clients"),
    path("users/profile/", views.getClientProfile, name="client-profile"),
    path("products/", views.getProducts, name="products"),
    path("products/<int:pk>/", views.getProduct, name="product"),
    path(
        "products/<str:pk>/",
        views.getCategoryProducts,
        name="categoryProducts",
    ),
    path("order/add", views.addOrderProducts, name="addOrderProducts"),
]
