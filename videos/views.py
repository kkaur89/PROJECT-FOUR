from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.exceptions import NotFound

from .models import Video
from .serializers.common import VideoSerializer
from .serializers.populated import PopulatedVideoSerializer

class VideoListView(APIView):

    def get(self, _request):
        videos = Video.objects.all()
        serialized_video = PopulatedVideoSerializer(videos, many=True)
        return Response(serialized_video.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data["owner"] = request.user.id 
        video_to_add = VideoSerializer(data=request.data) 
        if video_to_add.is_valid():
            video_to_add.save()
            return Response(video_to_add.data, status=status.HTTP_201_CREATED)
        return Response(video_to_add.errors, status=status.UNPROCESSABLE_ENTITY)

class VideoDetailView(APIView):

    def get_(self, pk):
        try:
            return Video.objects.get(pk=pk)
        except Video.DoesNotExist:
            raise NotFound(detail="Cannot find that video")

    def get(self, _request, pk):
        video = self.get_video(pk=pk)
        serialized_video = PopulatedVideoSerializer(video)
        return Response(serialized_video.data, status=status.HTTP_200_OK)

    def delete(self, _request, pk):
        video_to_delete = self.get_video(pk=pk)
        video_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        video_to_edit = self.get_video(pk=pk)
        updated_video = VIdeoSerializer(video_to_edit, data=request.data)
        if updated_video.is_valid():
            updated_video.save()
            return Response(updated_video.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_video.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
