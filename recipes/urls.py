from django.urls import path
from .views import RecipeListView, RecipeDetailView, RecipeLikedView

urlpatterns = [
  path('', RecipeListView.as_view()),
  path('<int:pk>/', RecipeDetailView.as_view()),
  path('<int:pk>/likerecipe/', RecipeLikedView.as_view())
]