from django.urls import path
from . import views

urlpatterns = [
    path('artist/<str:hash_id>/', views.GetArtistDetail.as_view()),
]