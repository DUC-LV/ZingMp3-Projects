from django.db import models
from commons.models import BaseModel


# Create your models here.
class TopicPlaylist(BaseModel):
    class Meta:
        ordering = ['created_at']

    topic_name = models.CharField(max_length=100)

    def __str__(self):
        return self.topic_name


class Playlists(BaseModel):
    class Meta:
        ordering = ['created_at']

    title = models.CharField(max_length=200)
    thumbnail = models.CharField(max_length=400)
    isoffical = models.BooleanField(default=True)
    is_indie = models.BooleanField(default=False)
    release_date = models.CharField(max_length=100)
    sort_description = models.TextField()
    pr = models.BooleanField(default=False)
    artist_names = models.CharField(max_length=100)
    play_item_mode = models.IntegerField(default=0)
    sub_type = models.IntegerField(default=1)
    uid = models.IntegerField()
    thumbnail_m = models.CharField(max_length=400)
    is_shuffle = models.BooleanField(default=True)
    is_private = models.BooleanField(default=False)
    user_name = models.CharField(max_length=100, default="Zing MP3")
    is_album = models.BooleanField(default=False)
    text_type = models.CharField(max_length=100, default="Playlist")
    is_single = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class PlaylistOfTopic(BaseModel):
    class Meta:
        ordering = ['created_at']

    topic = models.ForeignKey(TopicPlaylist, on_delete=models.CASCADE)
    playlist = models.ForeignKey(Playlists, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.topic.topic_name}_{self.playlist.title}"


class Artists(BaseModel):
    class Meta:
        ordering = ['created_at']

    name = models.CharField(max_length=100)
    spotlight = models.BooleanField(default=False)
    alias = models.CharField(max_length=100)
    thumbnail = models.CharField(max_length=400)
    thumbnail_m = models.CharField(max_length=400)
    is_oa = models.BooleanField(default=True)
    is_oa_brand = models.BooleanField(default=False)
    total_follow = models.IntegerField()

    def __str__(self):
        return self.name


class ArtistOfPlaylist(BaseModel):
    class Meta:
        ordering = ['created_at']

    playlist = models.ForeignKey(Playlists, on_delete=models.CASCADE)
    artist = models.ForeignKey(Artists, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.playlist.title}_{self.artist.name}"
