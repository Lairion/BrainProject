from django.conf.urls import url
from django.contrib import admin
from .views import (base, student, calc)
urlpatterns = [
    url(r'base$', base, name='base'),
    url(r'student$', student, name='student'),
    url(r'calc$', calc, name='calc'),
]