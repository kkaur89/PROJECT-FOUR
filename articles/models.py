from django.db import models

class Article(models.Model):
    name = models.CharField(max_length=300)
    image = models.JSONField(max_length=2500)
    text = models.TextField(max_length=8000)
    author = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
      "jwt_auth.User",
      related_name ='articles',
      on_delete= models.CASCADE
    )
    like = models.ManyToManyField('jwt_auth.User', related_name="liked_article", blank=True)
    
    def __str__(self):
        return f"{self.name}, {self.author}"
