from django.db import models

# Create your models here.

class Comment(models.Model):

    text = models.TextField(max_length=300)
    video = models.ForeignKey(
      "videos.Video",
      related_name ="comments",
      on_delete= models.CASCADE,
      null=True,
      blank=True
    )
    article = models.ForeignKey(
      "articles.Article",
      related_name ="comments",
      on_delete= models.CASCADE,
      null=True,
      blank=True
    )
    recipe = models.ForeignKey(
      "recipes.Recipe",
      related_name ="comments",
      on_delete= models.CASCADE,
      null=True,
      blank=True
    )
    owner = models.ForeignKey(
      "jwt_auth.User",
      related_name ="comments",
      on_delete= models.CASCADE
    )
    created_at = models.DateTimeField(auto_now_add=True)
    like = models.ManyToManyField('jwt_auth.User', related_name="liked_comment", blank=True)

    def __str__(self):
        return f"{self.owner}, {self.text}, {self.created_at}"
