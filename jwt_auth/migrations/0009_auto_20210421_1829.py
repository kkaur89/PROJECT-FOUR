# Generated by Django 3.2 on 2021-04-21 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0008_rename_video_name_video_name'),
        ('recipes', '0006_alter_recipe_ingredients'),
        ('jwt_auth', '0008_auto_20210421_1828'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='recipess',
        ),
        migrations.RemoveField(
            model_name='user',
            name='videoss',
        ),
        migrations.AddField(
            model_name='user',
            name='recipes',
            field=models.ManyToManyField(blank=True, related_name='recipes', to='recipes.Recipe'),
        ),
        migrations.AddField(
            model_name='user',
            name='videos',
            field=models.ManyToManyField(blank=True, related_name='videos', to='videos.Video'),
        ),
    ]
