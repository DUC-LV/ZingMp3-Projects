from django.shortcuts import render
from rest_framework.views import APIView
from django.http import JsonResponse
from playlists.models import Artists


# Create your views here.
class GetArtistDetail(APIView):
    def get(self, request, hash_id):
        artist_id = Artists.decode_hash_id(hash_id)
        artist = Artists.objects.filter(id=artist_id)
        print(artist[0])
        res = {}
        return JsonResponse(res, safe=False)
