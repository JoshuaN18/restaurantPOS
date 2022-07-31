from django.shortcuts import render
from urllib3 import HTTPResponse

# Create your views here.


def main(request):
    return HTTPResponse("alex is a stupid")
