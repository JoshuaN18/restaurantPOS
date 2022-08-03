from rest_framework import serializers
from .models import Admin


class AdminSerializer(serializers.Modelserializer):
    class Meta:
        model = Admin
        fields = ('id', 'username', 'password', 'resturaunt_name')
