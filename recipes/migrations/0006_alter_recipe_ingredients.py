# Generated by Django 3.2 on 2021-04-20 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0005_recipe_like'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='ingredients',
            field=models.TextField(max_length=1000),
        ),
    ]