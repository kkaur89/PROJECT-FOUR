from django.db import models
from django.contrib.auth.models import AbstractUser
# from autoslug import AutoSlugField

# Create your models here.


class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    profile_image = models.CharField(max_length=300, blank=True)
    # slug = AutoSlugField(populate_from='username')
    bio = models.CharField(max_length=255, blank=True)
    friends = models.ManyToManyField('jwt_auth.User', related_name="jwt_auth", blank=True)
    article = models.ManyToManyField('articles.Article', related_name="articles", blank=True)
    videos = models.ManyToManyField('videos.Video', related_name="videos", blank=True)
    recipes = models.ManyToManyField('recipes.Recipe', related_name="recipes", blank=True)