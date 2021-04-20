from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 
from rest_framework.exceptions import NotFound
# from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from .models import Article
from .serializers.common import ArticleSerializer
from .serializers.populated import PopulatedArticleSerializer

class ArticleListView(APIView):
    # permission_classes = (IsAuthenticatedOrReadOnly)

    def get(self, _request):
        articles = Article.objects.all()
        serialized_articles = PopulatedArticleSerializer(articles, many=True)
        return Response(serialized_articles.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data["owner"] = request.user.id 
        article_to_add = ArticleSerializer(data=request.data)
        if article_to_add.is_valid():
            article_to_add.save()
            return Response(article_to_add.data, status=status.HTTP_201_CREATED)
        return Response(article_to_add.errors, status=status.UNPROCESSABLE_ENTITY)

class ArticleDetailView(APIView):

    def get_article(self, pk):
        try:
            return Article.objects.get(pk=pk)
        except Article.DoesNotExist:
            raise NotFound(detail="Cannot find that article")


    def get(self, _request, pk):
        article = self.get_article(pk=pk)
        serialized_article = PopulatedArticleSerializer(article)
        return Response(serialized_article.data, status=status.HTTP_200_OK)

    def delete(self, _request, pk):
        article_to_delete = self.get_article(pk=pk)
        article_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        article_to_edit = self.get_article(pk=pk)
        updated_article = ArticleSerializer(article_to_edit, data=request.data)
        if updated_article.is_valid():
            updated_article.save()
            return Response(updated_article.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_article.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
