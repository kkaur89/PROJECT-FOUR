from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
# from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated

from .models import Recipe
from .serializers.common import RecipeSerializer
from .serializers.populated import PopulatedRecipeSerializer

# Create your views here.

class RecipeListView(APIView):
    # permission_classes = (IsAuthenticatedOrReadOnly)
    
    def get(self, _request):
        recipes = Recipe.objects.all()
        serialized_recipes = PopulatedRecipeSerializer(recipes, many=True)
        return Response(serialized_recipes.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        request.data["owner"] = request.user.id 
        recipe_to_add = RecipeSerializer(data=request.data)
        if recipe_to_add.is_valid():
            recipe_to_add.save()
            return Response(recipe_to_add.data, status=status.HTTP_201_CREATED)
        return Response(recipe_to_add.errors, status=status.UNPROCESSABLE_ENTITY)


class RecipeDetailView(APIView):

    def get_recipe(self, pk):
        try:
            return Recipe.objects.get(pk=pk)
        except Recipe.DoesNotExist:
            raise NotFound(detail="cannot find that recipe")

    def get(self, _request, pk):
        recipe = self.get_recipe(pk=pk)
        serialized_recipe = PopulatedRecipeSerializer(recipe)
        return Response(serialized_recipe.data, status=status.HTTP_200_OK)

    def delete(self, _request, pk):
        recipe_to_delete = self.get_recipe(pk=pk)
        recipe_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        recipe_to_edit = self.get_recipe(pk=pk)
        updated_recipe = RecipeSerializer(recipe_to_edit, data=request.data)
        if updated_recipe.is_valid():
            updated_recipe.save()
            return Response(updated_recipe.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_recipe.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITIY)