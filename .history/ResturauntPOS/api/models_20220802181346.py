from django.db import models

# Create your models here.


class Login(models.Model):
    def __init__():
        username = models.CharField(max_length=20, default="", unique=True)
        password = models.CharField(max_length=10, default="", unique=True)


class Menu(models.Model):
