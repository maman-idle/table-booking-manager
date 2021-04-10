from rest_framework import serializers
from customer.models import customer

class customerSerializer(serializers.ModelSerializer):
    class Meta:
        model = customer
        fields = '__all__'