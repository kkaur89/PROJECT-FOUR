from comments.serializers.populated import PopulatedCommentSerializer
from ..serializers.common import VideoSerializer
from jwt_auth.serializers.common import UserSerializer

class PopulatedVideoSerializer(VideoSerializer):

    comments = PopulatedCommentSerializer(many=True)
    owner = UserSerializer()