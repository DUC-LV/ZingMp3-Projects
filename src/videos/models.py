from django.db import models
from commons.models import BaseModel
from playlists.models import Artists


# Create your models here.

class TopicVideos(BaseModel):
    class Meta:
        ordering = ['created_at']

    topic_name = models.CharField(max_length=100)

    def __str__(self):
        return self.topic_name


class Videos(BaseModel):
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
    streaming_status = models.IntegerField(default=1)

    def __str__(self):
        return self.title


class VideoOfTopic(BaseModel):
    class Meta:
        ordering = ['created_at']

    topic = models.ForeignKey(TopicVideos, on_delete=models.CASCADE)
    video = models.ForeignKey(Videos, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.topic.topic_name}_{self.video.title}"


class ArtistOfVideo(BaseModel):
    class Meta:
        ordering = ['created_at']

    video = models.ForeignKey(Videos, on_delete=models.CASCADE)
    artist = models.ForeignKey(Artists, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.video.title}_{self.artist.name}"
