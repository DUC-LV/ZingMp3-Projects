from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from .models import TopicVideos, Videos, VideoOfTopic, ArtistOfVideo


# Create your views here.
class GetListVideoVietNam(APIView):
    def get(self, request):
        topic = TopicVideos.objects.filter(topic_name='Việt Nam')
        topic_id = [tp.id for tp in topic]
        topic_video = VideoOfTopic.objects.filter(topic_id__in=topic_id)
        items = []
        for tp_vd in topic_video:
            video = tp_vd.video
            video_id = ArtistOfVideo.objects.filter(video_id=video)
            art_first = video_id[0].artist
            artist_data = []
            for artist in video_id:
                art = artist.artist
                artist_data.append({
                    "id": art.get_hash_id(),
                    "name": art.name,
                    "spotlight": art.spotlight,
                    "alias": art.alias,
                    "thumbnail": art.thumbnail,
                    "thumbnailM": art.thumbnail_m,
                    "isOA": art.is_oa,
                    "isOABrand": art.is_oa_brand,
                })
            data_video = {
                "encodeId": video.get_hash_id(),
                "title": video.title,
                "alias": video.alias,
                "isoffical": video.is_offical,
                "artistsNames": video.artist_names,
                "artists": artist_data,
                "isWorldWide": video.is_world_wide,
                "thumbnailM": video.thumbnail_m,
                "thumbnail": video.thumbnail,
                "duration": video.duration,
                "streamingStatus": video.streaming_status,
                "artist": {
                    "id": art_first.get_hash_id(),
                    "name": art_first.name,
                    "spotlight": art_first.spotlight,
                    "alias": art_first.alias,
                    "thumbnail": art_first.thumbnail,
                    "thumbnailM": art_first.thumbnail_m,
                },
            }
            items.append(data_video)

        res = {
            "err": 0,
            "msg": "Success",
            "data": {
                "items": items
            }
        }
        return JsonResponse(res, safe=False)
