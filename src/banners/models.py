from django.db import models
from commons.models import BaseModel


# Create your models here.

class TopicBanner(BaseModel):
    class Meta:
        ordering = ['created_at']

    topic_name = models.CharField(max_length=100)

    def __str__(self):
        return self.topic_name


class Banners(BaseModel):
    class Meta:
        ordering = ['created_at']

    type = models.CharField(max_length=100, default='playlist')
    banner = models.CharField(max_length=300)
    cover = models.CharField(max_length=300)
    target = models.CharField(max_length=100, default='1')
    title = models.CharField(max_length=200, default='null')
    description = models.TextField(default='null')
    is_pr = models.IntegerField(default=0)

    def __str__(self):
        return self.title


class BannerOfTopic(BaseModel):
    class Meta:
        ordering = ['created_at']

    topic = models.ForeignKey(TopicBanner, on_delete=models.CASCADE)
    banner = models.ForeignKey(Banners, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.topic.topic_name}_{self.banner.title}"
