# -*- coding: utf-8 -*-
# Generated by Django 1.11.10 on 2018-05-27 18:10
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cmsplugin_cascade', '0018_iconfont_color'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='cascadeclipboard',
            options={'verbose_name': 'Persisted Clipboard Content', 'verbose_name_plural': 'Persisted Clipboard Contents'},
        ),
        migrations.AlterModelOptions(
            name='cascadeelement',
            options={'verbose_name': 'Element', 'verbose_name_plural': 'Elements'},
        ),
        migrations.AlterModelOptions(
            name='cascadepage',
            options={'verbose_name': 'Cascade Page Settings'},
        ),
        migrations.AlterModelOptions(
            name='segmentation',
            options={'managed': False, 'verbose_name': 'Segmentation'},
        ),
        migrations.AlterModelOptions(
            name='sortableinlinecascadeelement',
            options={'ordering': ['order']},
        ),
    ]
