from django.urls import path
from . import views

urlpatterns = [
    path('playlist/<str:hash_id>/', views.GetPlaylistDetail.as_view()),
]
