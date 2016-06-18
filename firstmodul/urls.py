from django.conf.urls import url
from django.contrib import admin
from .views import (base)
urlpatterns = [
    url(r'base$', base, name='base'),
   
]