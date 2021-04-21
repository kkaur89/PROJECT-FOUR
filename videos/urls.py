from django.urls import path 
from .views import VideoListView, VideoDetailView, VideoLikedView

urlpatterns = [
    path('', VideoListView.as_view()),
    path('<int:pk>/', VideoDetailView.as_view()),
    path('<int:pk>/likevideo/', VideoLikedView.as_view())
]