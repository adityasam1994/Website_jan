# Generated by Django 2.0 on 2018-08-29 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0012_banner_on'),
    ]

    operations = [
        migrations.AddField(
            model_name='front_page_section',
            name='activate',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='offer',
            name='activate',
            field=models.BooleanField(default=True),
        ),
    ]
