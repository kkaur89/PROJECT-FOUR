# Generated by Django 3.2 on 2021-04-15 13:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0002_recipe_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='ingredients',
            field=models.JSONField(default=1, max_length=1000),
            preserve_default=False,
        ),
    ]
