# Generated by Django 3.2 on 2021-04-15 10:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0002_rename_article_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='video_name',
            field=models.CharField(max_length=300),
        ),
    ]