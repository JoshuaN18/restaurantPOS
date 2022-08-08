from unicodedata import category
from django.db import models

# Create your models here.
class Restaurant(models.Model):
    name = models.CharField(max_length=20)
    image = models.URLField(max_length=200)
    price = models.CharField(max_length=5)
    reviews = models.DecimalField(decimal_places=0, max_digits=10)
    rating = models.DecimalField(decimal_places=2, max_digits=3)