from customer.models import customer
from rest_framework import viewsets, permissions
from .serializer import customerSerializer


class customerViewSet(viewsets.ModelViewSet):

    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = customerSerializer

    def get_queryset(self):
        return self.request.user.customer.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
