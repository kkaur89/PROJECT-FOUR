from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import RecipeSerializer
from jwt_auth.serializers.common import UserSerializer

class PopulatedRecipeSerializer(RecipeSerializer):

    comments = PopulatedCommentSerializer(many=True)
    owner = UserSerializer()