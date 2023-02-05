from django.shortcuts import render
from rest_framework.views import APIView
from .models import TopicBanner, Banners, BannerOfTopic
from django.http import JsonResponse


# Create your views here.
class GetBanners(APIView):
    def get(self, request):
        topic = TopicBanner.objects.filter(topic_name='banner-4/2/2023').all()
        topic_id = [tp.id for tp in topic]
        topic_banner_all = BannerOfTopic.objects.filter(topic__in=topic_id)
        data_banner = []
        for b in topic_banner_all:
            banner = b.banner
            data_banner.append({
                "type": banner.type,
                "banner": banner.banner,
                "cover": banner.cover,
                "target": banner.target,
                "title": banner.title,
                "description": banner.description,
                "ispr": banner.is_pr,
                "encodeId": banner.get_hash_id(),
            })
        res = {
            "sectionType": "banner",
            "viewType": "slider",
            "title": "",
            "link": "",
            "sectionId": "hSlider",
            "items": data_banner,
        }
        return JsonResponse(res, safe=False)
