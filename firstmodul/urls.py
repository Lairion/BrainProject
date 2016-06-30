from django.conf.urls import url
from django.contrib import admin
from .views import (base)
urlpatterns = [
    url(r'base$', base, name='base'),
    url(r'student$', base, name='student'),
    url(r'calc$', base, name='calc'),
]