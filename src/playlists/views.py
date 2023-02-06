from django.shortcuts import render
from .models import TopicPlaylist, Playlists, PlaylistOfTopic, Artists, ArtistOfPlaylist
from rest_framework.views import APIView
from django.http import JsonResponse


# Create your views here.

class GetListPlaylist(APIView):
    def get(self, request):
        all_topic = TopicPlaylist.objects.filter(topic_name__in=('Có Thể Bạn Muốn Nghe', 'Cuối tuần lên nhạc',
                                                                 'Nghệ sĩ hot ✨'))
        topic_ids = [tp.id for tp in all_topic]
        topic_playlist = PlaylistOfTopic.objects.filter(topic_id__in=topic_ids)
        topic_playlists_map = {}
        for tp_pl in topic_playlist:
            playlist = tp_pl.playlist
            playlist_map = topic_playlists_map.get(tp_pl.topic_id, None)
            playlist_artist = ArtistOfPlaylist.objects.filter(playlist_id=playlist)
            artist_data = []
            for artist in playlist_artist:
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
                    "totalFollow": art.total_follow,
                })
            playlist_dict = {
                "encodeId": playlist.get_hash_id(),
                "title": playlist.title,
                "thumbnail": playlist.thumbnail,
                "isoffical": playlist.isoffical,
                "isIndie": playlist.is_indie,
                "releaseDate": playlist.release_date,
                "sortDescription": playlist.sort_description,
                "PR": playlist.pr,
                "artists": artist_data,
                "artistsNames": playlist.artist_names,
                "playItemMode": playlist.play_item_mode,
                "subType": playlist.sub_type,
                "uid": playlist.uid,
                "thumbnailM": playlist.thumbnail_m,
                "isShuffle": playlist.is_shuffle,
                "isPrivate": playlist.is_private,
                "userName": playlist.user_name,
                "isAlbum": playlist.is_album,
                "textType": playlist.text_type,
                "isSingle": playlist.is_single,
            }
            if playlist_map is None:
                topic_playlists_map[tp_pl.topic_id] = [playlist_dict]
            else:
                topic_playlists_map[tp_pl.topic_id].append(playlist_dict)

        res = []
        for topic in all_topic:
            res.append({
                "sectionType": "playlist",
                "viewType": "slider",
                "title": topic.topic_name,
                "link": "",
                "items": topic_playlists_map[topic.id]
            })

        return JsonResponse(res, safe=False)
