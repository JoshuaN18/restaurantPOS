from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import AdminSerializer
from .models import Admin
# Create your views here.


class AdminView(generics.CreateAPIView):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer
