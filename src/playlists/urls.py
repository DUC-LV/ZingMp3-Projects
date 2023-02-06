from django.urls import path
from . import views

urlpatterns = [
    path('playlists/', views.GetListPlaylist.as_view()),
]
