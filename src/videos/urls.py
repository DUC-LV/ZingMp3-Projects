from django.urls import path
from . import views

urlpatterns = [
    path('videos/viet-nam/', views.GetListVideoVietNam.as_view()),
    path('videos/us-uk/', views.GetListVideoUsUk.as_view()),
]
