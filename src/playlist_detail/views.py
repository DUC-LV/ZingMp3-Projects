from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from playlists.models import Playlists, ArtistOfPlaylist
from .models import SongOfPlaylist, ArtistOfSong, AlbumOfSong, ArtistOfAlbum


# Create your views here.

class GetPlaylistDetail(APIView):
    def get(self, request, hash_id):
        playlist_id = Playlists.decode_hash_id(hash_id)
        playlist = Playlists.objects.filter(id=playlist_id).all()
        res = {}
        for pl in playlist:
            playlist_artist = ArtistOfPlaylist.objects.filter(playlist_id=pl.id).all()
            artist = playlist_artist[0].artist
            artist_first = {
                "id": artist.get_hash_id(),
                "name": artist.name,
                "spotlight": artist.spotlight,
                "alias": artist.alias,
                "thumbnail": artist.thumbnail,
                "thumbnailM": artist.thumbnail_m,
                "isOA": artist.is_oa,
                "isOABrand": artist.is_oa_brand,
                "totalFollow": artist.total_follow,
            }
            artists_data_playlist = []
            for playlist_artist in playlist_artist:
                artist = playlist_artist.artist
                artists_data_playlist.append({
                    "id": artist.get_hash_id(),
                    "name": artist.name,
                    "spotlight": artist.spotlight,
                    "alias": artist.alias,
                    "thumbnail": artist.thumbnail,
                    "thumbnailM": artist.thumbnail_m,
                    "isOA": artist.is_oa,
                    "isOABrand": artist.is_oa_brand,
                    "totalFollow": artist.total_follow,
                })
            data_song = []
            song_playlist = SongOfPlaylist.objects.filter(playlist_id=pl)
            for song_playlist in song_playlist:
                song = song_playlist.song
                artist_song = ArtistOfSong.objects.filter(song_id=song)
                artist_song_data = []
                for artist_song in artist_song:
                    artist = artist_song.artist
                    artist_song_data.append({
                        "id": artist.get_hash_id(),
                        "name": artist.name,
                        "spotlight": artist.spotlight,
                        "alias": artist.alias,
                        "thumbnail": artist.thumbnail,
                        "thumbnailM": artist.thumbnail_m,
                        "isOA": artist.is_oa,
                        "isOABrand": artist.is_oa_brand,
                    })
                album_song = AlbumOfSong.objects.filter(song_id=song)
                album_dict = {}
                for album_song in album_song:
                    album = album_song.album
                    artist_album = ArtistOfAlbum.objects.filter(album_id=album)
                    artist_album_data = []
                    for artist_album in artist_album:
                        artist = artist_album.artist
                        artist_album_data.append({
                            "id": artist.get_hash_id(),
                            "name": artist.name,
                            "spotlight": artist.spotlight,
                            "alias": artist.alias,
                            "thumbnail": artist.thumbnail,
                            "thumbnailM": artist.thumbnail_m,
                            "isOA": artist.is_oa,
                            "isOABrand": artist.is_oa_brand,
                            "totalFollow": artist.total_follow,
                        })
                    album_dict = {
                        "encodeId": album.get_hash_id(),
                        "title": album.title,
                        "thumbnail": album.thumbnail,
                        "isoffical": album.is_offical,
                        "releaseDate": album.release_date,
                        "sortDescription": album.sort_description,
                        "releasedAt": album.released_at,
                        "PR": album.pr,
                        "artists": artist_album_data,
                        "artistsNames": album.artist_names,
                    }
                song_dict = {
                    "encodeId": song.get_hash_id(),
                    "title": song.title,
                    "alias": song.alias,
                    "isOffical": song.is_offical,
                    "username": song.user_name,
                    "artistsNames": song.artist_names,
                    "artists": artist_song_data,
                    "isWorldWide": song.is_world_wide,
                    "thumbnailM": song.thumbnail_m,
                    "thumbnail": song.thumbnail,
                    "duration": song.duration,
                    "zingChoice": song.zing_choice,
                    "isPrivate": song.is_private,
                    "preRelease": song.pre_release,
                    "releaseDate": song.release_date,
                    "album": album_dict,
                    "isIndie": song.is_indie,
                    "streamingStatus": song.streaming_status,
                    "allowAudioAds": song.allow_audio_ads,
                    "hasLyric": song.has_lyric,
                }
                data_song.append(song_dict)
            res = {
                "err": 0,
                "msg": "Success",
                "data": {
                    "encodeId": pl.get_hash_id(),
                    "title": pl.title,
                    "thumbnail": pl.thumbnail,
                    "isoffical": pl.isoffical,
                    "isIndie": pl.is_indie,
                    "releaseDate": pl.release_date,
                    "sortDescription": pl.sort_description,
                    "PR": pl.pr,
                    "artists": artists_data_playlist,
                    "artistsNames": pl.artist_names,
                    "playItemMode": pl.play_item_mode,
                    "subType": pl.sub_type,
                    "uid": pl.uid,
                    "thumbnailM": pl.thumbnail_m,
                    "isShuffle": pl.is_shuffle,
                    "isPrivate": pl.is_private,
                    "userName": pl.user_name,
                    "isAlbum": pl.is_album,
                    "textType": pl.text_type,
                    "isSingle": pl.is_single,
                    "description": pl.sort_description,
                    "artist": artist_first,
                    "song": {
                        "items": data_song,
                    }
                }
            }

        return JsonResponse(res, safe=False)
