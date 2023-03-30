# Generated by Django 4.1.7 on 2023-03-30 08:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('students', '0001_initial'),
        ('subjects', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='subjects',
            field=models.ManyToManyField(through='subjects.SubjectStudent', to='subjects.subject'),
        ),
    ]