from django.db import models

# Create your models here.


class Login(models.Model):
    username = models.CharField(max_length=20, default="", unique=True)
    password = models.CharField(max_length=10, default="", unique=True)
    name = models.CharField(max_length=10, default="", unqiue=True)


class Menu(models.Model):

    categories: models.CharField(max_length=10, default="", unqiue=True)
    food_items: models.CharField(max_length=10, default="", unqiue=True)
    price: models.IntegerField(max_length=10, default="", unqiue=True)


class Payment(models.Model):
    cardholder_name = .
    card_number = .
    cvv = .
    expiration_date = .
    address = .
