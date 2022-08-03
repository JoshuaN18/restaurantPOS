from django.db import models

# Create your models here.


class Login(models.Model):
    username = models.CharField(max_length=20, default="", unique=True)
    password = models.CharField(max_length=10, default="", unique=True)
    name = models.CharField(max_length=10, default="", unqiue=True)


class Menu(models.Model):

    categories: []
    food_items: []


class Payment(models.Model):
    cardholder_name = .
    card_number = .
    cvv = .
    expiration_date = .
    address = .
