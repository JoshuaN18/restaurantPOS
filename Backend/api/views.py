from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Restaurant
from .serializer import RestaurantSerializer

@api_view(['GET'])
def getRestaurants(request):
    restaurant = Restaurant.objects.all()
    serializer = RestaurantSerializer(restaurant, many=True)
    return Response(serializer.data)
