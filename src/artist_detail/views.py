from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from playlists.models import Artists, ArtistOfPlaylist
from artist_detail.models import ArtistDetail
from playlist_detail.models import ArtistOfAlbum, ArtistOfSong, AlbumOfSong
from videos.models import ArtistOfVideo


# Create your views here.
class GetArtistDetail(APIView):
    def get(self, request, hash_id):
        artist_id = Artists.decode_hash_id(hash_id)
        artist = Artists.objects.filter(id=artist_id)
        art = artist[0]
        artist_detail = ArtistDetail.objects.filter(artist_detail=art.id)
        field_artist_add = artist_detail[0]
        artist_album_topAlbum = ArtistOfAlbum.objects.filter(artist_id=art.id)
        data_artist_topAlbum = [{
            "encodeId": artist_album_topAlbum[0].artist.get_hash_id(),
            "name": artist_album_topAlbum[0].artist.name,
            "spotlight": artist_album_topAlbum[0].artist.spotlight,
            "alias": artist_album_topAlbum[0].artist.alias,
            "thumbnail": artist_album_topAlbum[0].artist.thumbnail,
            "thumbnailM": artist_album_topAlbum[0].artist.thumbnail_m
        }]
        data_album_top_album = {
            "encodeId": artist_album_topAlbum[0].album.get_hash_id(),
            "title": artist_album_topAlbum[0].album.title,
            "thumbnail": artist_album_topAlbum[0].album.thumbnail,
            "isOffical": artist_album_topAlbum[0].album.is_offical,
            "releaseDate": artist_album_topAlbum[0].album.release_date,
            "releasedAt": artist_album_topAlbum[0].album.released_at,
            "pr": artist_album_topAlbum[0].album.pr,
            "artists": data_artist_topAlbum,
            "artistsNames": artist_album_topAlbum[0].album.artist_names
        }
        artSong = ArtistOfSong.objects.filter(artist=art.id)  # lấy tất cả Song có tên artist đó
        list_song = [art_s.song for art_s in artSong]  # Tạo danh sách list song
        song_arr = []
        for s in list_song:
            artists_songs = ArtistOfSong.objects.filter(song_id=s.id).all()  # Lấy danh sách artist trong list song
            song_albums = AlbumOfSong.objects.filter(song_id=s.id)
            artists_album_data = []
            albums_dict = {}
            for ab_s in song_albums:
                ars = ab_s.album
                artists_album = ArtistOfAlbum.objects.filter(album_id=ars.id).all()
                for ar_bl in artists_album:
                    art = ar_bl.artist
                    artists_album_data.append({
                        "id": art.get_hash_id(),
                        "name": art.name,
                        "spotlight": art.spotlight,
                        "alias": art.alias,
                        "thumbnail": art.thumbnail,
                        "thumbnailM": art.thumbnail_m
                    })
                albums_dict = {
                    "encodeId": ars.get_hash_id(),
                    "title": ars.title,
                    "thumbnail": ars.thumbnail,
                    "releaseDate": ars.release_date,
                    "artists": artists_album_data,
                    "artistsNames": ars.artist_names
                }
            artists_data_song = []
            for art_s in artists_songs:
                art = art_s.artist
                artists_data_song.append({
                    "id": art.get_hash_id(),
                    "name": art.name,
                    "spotlight": art.spotlight,
                    "alias": art.alias,
                    "thumbnail": art.thumbnail,
                    "thumbnailM": art.thumbnail_m
                })
            song_data = {
                "encodeId": s.get_hash_id(),
                "title": s.title,
                "alias": s.alias,
                "isOffical": s.is_offical,
                "artistsNames": s.artist_names,
                "artists": artists_data_song,
                "isWorldWide": s.is_world_wide,
                "thumbnailM": s.thumbnail_m,
                "thumbnail": s.thumbnail,
                "duration": s.duration,
                "zingChoice": s.zing_choice,
                "isPrivate": s.is_private,
                "preRelease": s.pre_release,
                "releaseDate": s.release_date,
                "album": albums_dict,
                "isIndie": s.is_indie,
                "streamingStatus": s.streaming_status,
                "hasLyric": s.has_lyric,
            }
            song_arr.append(song_data)
        artistPlaylist = ArtistOfPlaylist.objects.filter(artist_id=art.id)  # lấy tất cả playlist có tên artist đó
        list_playlist = [art_pl.playlist for art_pl in artistPlaylist]  # Lấy danh sách playlist
        playlist_arr = []
        for l_pl in list_playlist:
            artist_playlists = ArtistOfPlaylist.objects.filter(
                playlist_id=l_pl.id)  # Lấy danh sách artist trong playlist
            artists_data_playlist = []
            for art_s in artist_playlists:
                arts = art_s.artist
                artists_data_playlist.append({
                    "id": arts.get_hash_id(),
                    "name": arts.name,
                    "spotlight": arts.spotlight,
                    "alias": arts.alias,
                    "thumbnail": arts.thumbnail,
                    "thumbnailM": arts.thumbnail_m
                })
            playlist_dict = {
                "encodeId": l_pl.get_hash_id(),
                "title": l_pl.title,
                "thumbnail": l_pl.thumbnail,
                "thumbnailM": l_pl.thumbnail_m,
                "isoffical": True,
                "sortDescription": l_pl.sort_description,
                "PR": False,
                "artistName": l_pl.artist_names,
                "artists": artists_data_playlist,
                "isPrivate": l_pl.is_private,
                "userName": l_pl.user_name,
                "isAlbum": l_pl.is_album,
                "textType": l_pl.text_type,
                "isSingle": l_pl.is_single,
            }
            playlist_arr.append(playlist_dict)
        artistVideo = ArtistOfVideo.objects.filter(artist=art.id)  # Lấy tất cả video có tên artist
        list_video = [vd.video for vd in artistVideo]  # Lấy danh sách video
        video_arr = []
        for l_vd in list_video:
            artVideo = ArtistOfVideo.objects.filter(video_id=l_vd.id)  # Lấy tất cả artist trong video
            artists_data_video = []
            for art_vd in artVideo:
                art_vds = art_vd.artist
                artists_data_video.append({
                    "id": art_vds.get_hash_id(),
                    "name": art_vds.name,
                    "spotlight": art_vds.spotlight,
                    "alias": art_vds.alias,
                    "thumbnail": art_vds.thumbnail,
                    "thumbnailM": art_vds.thumbnail_m
                })
            artist_dict = {
                "id": artVideo[0].artist.get_hash_id(),
                "name": artVideo[0].artist.name,
                "spotlight": artVideo[0].artist.spotlight,
                "alias": artVideo[0].artist.alias,
                "thumbnail": artVideo[0].artist.thumbnail,
                "thumbnailM": artVideo[0].artist.thumbnail_m,
            }
            video_dict = {
                "encodeId": l_vd.get_hash_id(),
                "title": l_vd.title,
                "alias": l_vd.alias,
                "isOffical": l_vd.is_offical,
                "artistsNames": l_vd.artist_names,
                "artists": artists_data_video,
                "thumbnailM": l_vd.thumbnail_m,
                "thumbnail": l_vd.thumbnail,
                "duration": duration_string(l_vd.duration),
                "streamingStatus": l_vd.streaming_status,
                "artist": artist_dict,
            }
            video_arr.append(video_dict)
        data_res = {
            "error": 0,
            "message": "Success",
            "data": {
                "id": art.get_hash_id(),
                "name": art.name,
                "spotlight": art.spotlight,
                "alias": art.alias,
                "cover": field_artist_add.cover,
                "thumbnail": art.thumbnail,
                "biography": field_artist_add.biography,
                "national": field_artist_add.national,
                "birthday": field_artist_add.birthday,
                "realName": field_artist_add.real_name,
                "totalFollow": field_artist_add.total_follow,
                "follow": field_artist_add.follow,
                "topAlbum": data_album_top_album,
                "sections": [
                    {
                        "sectionType": "song",
                        "viewType": "slider",
                        "title": "Bài hát nổi bật",
                        "sectionId": "aSongs",
                        "items": song_arr,
                    },
                    {
                        "sectionType": "playlist",
                        "viewType": "slider",
                        "title": "Single & EP",
                        "sectionId": "aSingle",
                        "items": playlist_arr,
                    },
                    {
                        "sectionType": "video",
                        "viewType": "slider",
                        "title": "MV",
                        "sectionId": "aMV",
                        "items": video_arr,
                    }
                ]
            }
        }
        return JsonResponse(data_res, safe=False)
