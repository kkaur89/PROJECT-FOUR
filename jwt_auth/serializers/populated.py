from jwt_auth.serializers.common import UserSerializer
from videos.serializers.populated import PopulatedVideoSerializer
from articles.serializers.populated import PopulatedArticleSerializer
from recipes.serializers.populated import PopulatedRecipeSerializer
from comments.serializers.populated import PopulatedCommentSerializer

class PopulatedUserSerializer(UserSerializer):

    recipes = PopulatedRecipeSerializer(many=True)
    articles = PopulatedArticleSerializer(many=True)
    videos = PopulatedVideoSerializer
