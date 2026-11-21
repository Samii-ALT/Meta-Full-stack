from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('dishes/<str:name>', views.Dishes),
    path('drinks/<str:drink_name>/', views.drinks, name="drink_name"), 
]