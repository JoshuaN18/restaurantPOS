from django.db import models

# Create your models here.


class Admin(models.Model):
    username = models.CharField(max_length=20, default="", unique=True)
    password = models.CharField(max_length=10, default="", unique=True)
    resturaunt_name = models.CharField(max_length=10, default="", unqiue=True)


class Menu(models.Model):

    categories: models.CharField(max_length=10, default="", unqiue=True)
    food_items: models.CharField(max_length=20, default="", unqiue=False)
    price: models.IntegerField(null=False, default=1)


class Payment(models.Model):
    cardholder_firstname = models.CharField(
        max_length=20, default="", unqiue=False)
    cardholder_lastname = models.CharField(
        max_length=30, default="", unqiue=False)
    card_number = models.IntegerField(max_length=16, default="", unqiue=False)
    cvv = models.IntegerField(max_length=3, default="", unqiue=False)
    expiration_date = models.DateTimeField()
    address = models.CharField(max_length=20, default="", unqiue=False)


class Checkout(models.Model):
    total = models.IntegerField(max_length=10, default="", unqiue=False)
    date = models.DateTimeField(auto_now_add=True)
