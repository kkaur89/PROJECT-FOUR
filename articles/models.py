from django.db import models

class Article(models.Model):
    FOOD = 'Food'
    FITNESS = 'Fitness'
    HEALTH = 'Health'
    CATEGORY_CHOICES = [
      (FOOD, 'Food'),
      (FITNESS, 'Fitness'),
      (HEALTH, 'Health')
    ]
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
    text_two = models.TextField(max_length=8000, null=True, blank=True)
    text_three = models.TextField(max_length=8000, null=True, blank=True)
    text_four = models.TextField(max_length=8000, null=True, blank=True)
    text_five = models.TextField(max_length=8000, null=True, blank=True)
    text_six = models.TextField(max_length=8000, null=True, blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default=HEALTH)
    
    def __str__(self):
        return f"{self.name}, {self.author}"
