from django.urls import path
from .views import RegisterView, LoginView, UserDetailView, UserListView

urlpatterns = [
  path('register/', RegisterView.as_view()),
  path('login/', LoginView.as_view()),
  path('', UserListView.as_view()),
  path('<int:pk>/', UserDetailView.as_view())
]