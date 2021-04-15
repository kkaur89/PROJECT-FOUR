from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import ArticleSerializer
from jwt_auth.serializers.common import UserSerializer

class PopulatedArticleSerializer(ArticleSerializer):

    comments = PopulatedCommentSerializer(many=True)
    owner = UserSerializer()