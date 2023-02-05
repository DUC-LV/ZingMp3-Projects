from django.contrib import admin
from .models import TopicBanner, Banners, BannerOfTopic


# Register your models here.
@admin.register(TopicBanner)
class TopicBanner(admin.ModelAdmin):
    list_display = ["topic_name", "created_at"]


admin.register(TopicBanner)


@admin.register(Banners)
class Banners(admin.ModelAdmin):
    list_display = ["type", "banner", "cover", "target", "title", "description", "is_pr", "created_at"]


admin.register(Banners)


@admin.register(BannerOfTopic)
class BannerOfTopic(admin.ModelAdmin):
    list_display = ["topic", "banner", "created_at"]


admin.register(BannerOfTopic)
