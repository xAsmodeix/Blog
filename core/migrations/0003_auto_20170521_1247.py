# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2017-05-21 12:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_auto_20170521_1238'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='image',
            field=models.ImageField(blank=True, upload_to='/home/maxim/myapp/blog/media'),
        ),
    ]
