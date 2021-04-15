from django.db import models

# Create your models here.

class Recipe(models.Model):
    HIGH_PROTEIN = 'High Protein'
    LOW_CARBS = 'Low Carbs'
    VEGAN = 'Vegan'
    VEGETARIAN = 'Vegetarian'
    BREAKFAST = 'Breakfast'
    LUNCH = 'Lunch'
    SNACKS = 'Snacks'
    DINNER = 'Dinner'
    DESSERTS = 'Desserts'
    CATEGORY_CHOICES = [
        (HIGH_PROTEIN, 'High Protein'),
        (LOW_CARBS, 'Low Carbs'),
        (VEGAN, 'Vegan'),
        (VEGETARIAN, 'Vegetarian'),
        (BREAKFAST, 'Breakfast'),
        (LUNCH, 'Lunch'),
        (SNACKS, 'Snacks'),
        (DINNER, 'Dinner'),
        (DESSERTS, 'Desserts')
    ]
    LESS_THAN_20_MINS = 'Less than 20 mins'
    LESS_THAN_40_MINS = 'Less than 40 mins'
    UP_TO_AN_HOUR = 'Up to an hour'
    TIME_CHOICES = [
      (LESS_THAN_20_MINS, 'Less than 20 mins'),
      (LESS_THAN_40_MINS, 'Less than 40 mins'),
      (UP_TO_AN_HOUR, 'Up to an hour')
    ]


    name = models.CharField(max_length=100)
    text = models.TextField(max_length=1000)
    image = models.CharField(max_length=500)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default=VEGAN)
    time = models.CharField(max_length=50, choices=TIME_CHOICES, default=LESS_THAN_20_MINS)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name}, {self.category}, {self.time}"
