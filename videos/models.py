from django.db import models

class Video(models.Model):
    YOGA = 'Yoga'
    HIIT = 'Hiit'
    CARDIO = 'Cardio'
    ABS = 'Abs'
    WEIGHTS = 'Weights'
    MEDITATION = 'Meditation'
    STRETCHES = 'Streches'

    CATEGORY_CHOICES = [
        (YOGA, 'Yoga'),
        (HIIT, 'Hiit'),
        (CARDIO, 'Cardio'),
        (ABS, 'Abs'),
        (WEIGHTS, 'Weights'),
        (MEDITATION, 'Meditation'),
        (STRETCHES, 'Streches'),
    ]

    BEGINNER ='Beginner'
    INTERMEDIATE = 'Intermediate'
    PRO = 'Pro'

    DIFFICULTY_CHOICES = [
        (BEGINNER, 'Beginner'),
        (INTERMEDIATE, 'Intermediate'),
        (PRO, 'Pro'),
    ]
    name = models.CharField(max_length=300)
    author = models.CharField(max_length=50)
    video = models.CharField(max_length=300)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default=CARDIO)
    duraration = models.CharField(max_length=20)
    difficulty = models.CharField(max_length=12, choices=DIFFICULTY_CHOICES, default=INTERMEDIATE)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
      "jwt_auth.User",
      related_name ="video",
      on_delete= models.CASCADE
    )
    like = models.ManyToManyField('jwt_auth.User', related_name="liked_video", blank=True)

    def __str__(self):
        return f"{self.video_name}, {self.author}, {self.category} {self.difficulty}"
