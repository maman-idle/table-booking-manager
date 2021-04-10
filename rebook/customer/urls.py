from rest_framework import routers
from .api import customerViewSet

router = routers.DefaultRouter()
router.register('api/customers', customerViewSet, basename='Customers')

urlpatterns = router.urls
