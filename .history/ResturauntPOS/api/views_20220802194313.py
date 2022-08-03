from django.shortcuts import render
from django.http import HttpResponse
from ResturauntPOS.api.models import Admin
from rest_framework import generics
from .serializers import AdminSerializer
# Create your views here.


class AdminView(generics.CreateAPIView):
    queryset = Admin.objects.all()
    serializer_class = AdminSerializer
