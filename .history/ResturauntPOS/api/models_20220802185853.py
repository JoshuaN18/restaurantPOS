from django.db import models

# Create your models here.


class Admin(models.Model):
    username = models.CharField(max_length=20, default="", unique=True)
    password = models.CharField(max_length=10, default="", unique=True)
    resturaunt_name = models.CharField(max_length=10, default="", unqiue=True)


class Menu(models.Model):
    categories: models.CharField(max_length=10, default="", unqiue=True)
    food_items: models.CharField(max_length=20, default="", unqiue=False)
    price: models.FloatField(null=False, default=0.00)


class Payment(models.Model):
    cardholder_firstname = models.CharField(
        max_length=20, default="", unqiue=False)
    cardholder_lastname = models.CharField(
        max_length=30, default="", unqiue=False)
    card_number = models.IntegerField(null=False, default=0000000000000000)
    cvv = models.IntegerField(null=False, default=000)
    expiration_date = models.DateTimeField()
    address = models.CharField(max_length=20, default="")


class Checkout(models.Model):
    total = models.IntegerField(null=False, unqiue=False)
    date = models.DateTimeField(auto_now_add=True)
