from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('menu', views.menu),
    path('Check-path', views.pathing),
    path('work', views.work),
    path('info', views.using_variables),
]