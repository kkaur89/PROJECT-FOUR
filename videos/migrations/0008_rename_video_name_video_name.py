# Generated by Django 3.2 on 2021-04-17 15:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0007_alter_video_video'),
    ]

    operations = [
        migrations.RenameField(
            model_name='video',
            old_name='video_name',
            new_name='name',
        ),
    ]
