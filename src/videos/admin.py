from django.contrib import admin
from .models import TopicVideos, Videos, VideoOfTopic, ArtistOfVideo


# Register your models here.
@admin.register(TopicVideos)
class TopicVideos(admin.ModelAdmin):
    list_display = ["topic_name", "created_at"]


admin.register(TopicVideos)


@admin.register(Videos)
class Videos(admin.ModelAdmin):
    list_display = ["title", "alias", "is_offical", "user_name", "artist_names", "is_world_wide", "thumbnail_m",
                    "thumbnail", "duration", "streaming_status", "created_at"]


admin.register(Videos)


@admin.register(VideoOfTopic)
class VideoOfTopic(admin.ModelAdmin):
    list_display = ["topic", "video", "created_at"]


admin.register(VideoOfTopic)


@admin.register(ArtistOfVideo)
class ArtistOfVideo(admin.ModelAdmin):
    list_display = ["video", "artist", "created_at"]


admin.register(ArtistOfVideo)
