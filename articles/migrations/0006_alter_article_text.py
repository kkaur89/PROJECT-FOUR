# Generated by Django 3.2 on 2021-04-15 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0005_alter_article_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='text',
            field=models.TextField(max_length=8000),
        ),
    ]
