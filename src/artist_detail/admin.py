from django.contrib import admin
from .models import ArtistDetail


# Register your models here.

@admin.register(ArtistDetail)
class ArtistDetail(admin.ModelAdmin):
    list_display = ["cover", "biography", "sort_biography", "national", "birthday", "real_name", "total_follow",
                    "follow", "artist_detail", "created_at"]


admin.register(ArtistDetail)
