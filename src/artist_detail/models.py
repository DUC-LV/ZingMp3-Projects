from django.db import models
from commons.models import BaseModel
from playlists.models import Artists


# Create your models here.

class ArtistDetail(BaseModel):
    class Meta:
        ordering = ['created_at']

    cover = models.CharField(max_length=200)
    biography = models.TextField()
    sort_biography = models.TextField()
    national = models.CharField(max_length=200)
    birthday = models.CharField(max_length=100)
    real_name = models.CharField(max_length=200)
    total_follow = models.IntegerField()
    follow = models.IntegerField()
    artist_detail = models.ForeignKey(Artists, on_delete=models.CASCADE)

    def __str__(self):
        return self.real_name
