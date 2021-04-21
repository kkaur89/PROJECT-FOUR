from django.urls import path 
from .views import ArticleListView, ArticleDetailView, ArticleLikedView


urlpatterns = [
    path('', ArticleListView.as_view()),
    path('<int:pk>/', ArticleDetailView.as_view()),
    path('<int:pk>/likearticle/', ArticleLikedView.as_view())
]