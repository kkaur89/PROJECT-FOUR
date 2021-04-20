from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from datetime import datetime, timedelta
from django.conf import settings
from rest_framework.exceptions import NotFound
import jwt
# from articles.serializers.common import ArticleSerializer
from .models import User
from .serializers.common import UserSerializer
from .serializers.populated import PopulatedUserSerializer
# from articles.views import ArticleDetailView
from articles.models import Article
# from articles.serializers.populated import PopulatedArticleSerializer

User = get_user_model()

class RegisterView(APIView):

    def post(self, request):
        user_to_create = UserSerializer(data=request.data)
        if user_to_create.is_valid():
            user_to_create.save()
            return Response({'message': 'Registration successful'}, status=status.HTTP_202_ACCEPTED)
        return Response(user_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class LoginView(APIView):

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user_to_login = User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied(detail='Invalid credentials')
        if not user_to_login.check_password(password):
            raise PermissionDenied(detail='Invalid credentials')
        
        dt = datetime.now() + timedelta(days=7)

        token = jwt.encode(
            {'sub': user_to_login.id, 'exp': int(dt.strftime('%s'))},
            settings.SECRET_KEY,
            algorithm='HS256'
        )

        return Response({ 'token': token, 'message': f'Welcome back {user_to_login.first_name}'})

class UserListView(APIView):

    def get(self, _request):
        users = User.objects.all()
        serialized_user = PopulatedUserSerializer(users, many=True)
        return Response(serialized_user.data, status=status.HTTP_200_OK)


class UserDetailView(APIView):

    def get_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise NotFound(detail="Cannot find that article")


    def get(self, _request, pk):
        user = self.get_user(pk=pk)
        serialized_user = PopulatedUserSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        user_to_edit = self.get_user(pk=request.user.id)
        artice_to_add = Article.object.get(pk=pk)
        user_to_edit.add(artice_to_add)
        updated_user = PopulatedUserSerializer(user_to_edit, data=request.data)
        if updated_user.is_valid():
            updated_user.save()
            return Response(updated_user.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_user.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


# # Get requests for article by ID so we can save to the user model

# class ArticleToAddDetailView(APIView):
#     def get_article(self, pk):
#         try:
#             return Article.objects.get(pk=pk)
#         except Article.DoesNotExist:
#             raise NotFound(detail="Cannot find that article")

#     def get(self, _request, pk):
#         article = self.get_article(pk=pk)
#         serialized_article = PopulatedArticleSerializer(article)
#         return Response(serialized_article.data, status=status.HTTP_200_OK)

# # put request to add article id to user id which goes through the populated user serializer 

#     def put(self, _request, pk):
#         article_to_save = self.get_article(pk=pk)
#         user = self.get_user(pk=pk)
#         serialized_user = PopulatedUserSerializer(user)
#         if article_to_save.is_valid():
#             serialized_user.articles.Article.saved_articles.add(article_to_save)
#             return Response(article_to_save.data, status=status.HTTP_202_ACCEPTED)
#         return Response(article_to_save.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)