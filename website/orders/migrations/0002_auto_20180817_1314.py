# Generated by Django 2.1 on 2018-08-17 07:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='mobile',
            field=models.CharField(blank=True, max_length=10),
        ),
    ]
