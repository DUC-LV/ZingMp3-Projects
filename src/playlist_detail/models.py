from django.db import models
from commons.models import BaseModel
from playlists.models import Playlists, Artists


# Create your models here.
class Songs(BaseModel):
    class Meta:
        ordering = ['created_at']

    title = models.CharField(max_length=200)
    alias = models.CharField(max_length=200)
    is_offical = models.BooleanField(default=True)
    user_name = models.CharField(max_length=100, default='null')
    artist_names = models.CharField(max_length=100)
    is_world_wide = models.BooleanField(default=True)
    thumbnail_m = models.CharField(max_length=400)
    thumbnail = models.CharField(max_length=400)
    duration = models.IntegerField()
    zing_choice = models.BooleanField(default=False)
    is_private = models.BooleanField(default=False)
    pre_release = models.BooleanField(default=False)
    release_date = models.IntegerField()
    is_indie = models.BooleanField(default=False)
    streaming_status = models.IntegerField(default=1)
    allow_audio_ads = models.BooleanField(default=True)
    has_lyric = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class SongOfPlaylist(BaseModel):
    class Meta:
        ordering = ['created_at']

    playlist = models.ForeignKey(Playlists, on_delete=models.CASCADE)
    song = models.ForeignKey(Songs, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.playlist.title}_{self.song.title}"


class ArtistOfSong(BaseModel):
    class Meta:
        ordering = ['created_at']

    song = models.ForeignKey(Songs, on_delete=models.CASCADE)
    artist = models.ForeignKey(Artists, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.song.title}_{self.artist.name}"


class Albums(BaseModel):
    class Meta:
        ordering = ['created_at']

    title = models.CharField(max_length=200)
    thumbnail = models.CharField(max_length=300)
    is_offical = models.BooleanField(default=True)
    release_date = models.CharField(max_length=100)
    sort_description = models.TextField(default='null')
    released_at = models.IntegerField()
    pr = models.BooleanField(default=False)
    artist_names = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class AlbumOfSong(BaseModel):
    class Meta:
        ordering = ['created_at']

    album = models.ForeignKey(Albums, on_delete=models.CASCADE)
    song = models.ForeignKey(Songs, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.album.title}_{self.song.title}"


class ArtistOfAlbum(BaseModel):
    class Meta:
        ordering = ['created_at']

    artist = models.ForeignKey(Artists, on_delete=models.CASCADE)
    album = models.ForeignKey(Albums, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.artist.name}_{self.album.title}"
