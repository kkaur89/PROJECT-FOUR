# Generated by Django 3.2 on 2021-04-20 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0010_auto_20210417_1424'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.CharField(choices=[('Food', 'Food'), ('Fitness', 'Fitness'), ('Health', 'Health')], default='Health', max_length=50),
        ),
    ]
