from django.urls import path
from . import views

urlpatterns = [
    path('banners/', views.GetBanners.as_view()),
]