# Generated by Django 2.1 on 2018-08-16 05:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_specs'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='specs',
            name='polymorphic_ctype',
        ),
        migrations.DeleteModel(
            name='Specs',
        ),
    ]