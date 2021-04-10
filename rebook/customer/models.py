from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class customer(models.Model):
    name = models.CharField(max_length=25)
    email = models.EmailField(max_length=25, unique=True)
    phone = models.CharField(max_length=13, unique=True)
    date = models.DateTimeField()
    owner = models.ForeignKey(User, related_name="customer", on_delete=models.CASCADE, null=True)
    approval = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)