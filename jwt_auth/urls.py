from django.urls import path
from .views import RegisterView, LoginView, UserDetailView, UserListView, UserSaveView, UserSaveVideoView, UserSaveRecipeView, UserFriendsView

urlpatterns = [
  path('register/', RegisterView.as_view()),
  path('login/', LoginView.as_view()),
  path('', UserListView.as_view()),
  path('<int:pk>/', UserDetailView.as_view()),
  path('<int:pk>/savedplaces/', UserSaveView.as_view()),
  path('<int:pk>/savedvideo/', UserSaveView.as_view()),
  path('<int:pk>/savedrecipe/', UserSaveView.as_view()),
  path('<int:pk>/friends/', UserFriendsView.as_view())
]