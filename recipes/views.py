from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Recipe
from .serializers.common import RecipeSerializer
# Create your views here.

class RecipeListView(APIView):
    
    def get(self, _request):
        recipes = Recipe.objects.all()
        serialized_recipes = RecipeSerializer(recipes, many=True)
        return Response(serialized_recipes.data, status=status.HTTP_200_OK)


class RecipeDetailView(APIView):

    def get_recipe(self, pk):
        try:
            return Recipe.objects.get(pk=pk)
        except Recipe.DoesNotExist:
            raise NotFound(detail="cannot find that recipe")

    def get(self, _request, pk):
        recipe = self.get_recipe(pk=pk)
        serialized_recipe = RecipeSerializer(recipe)
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