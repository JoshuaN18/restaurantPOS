# Generated by Django 4.0.6 on 2022-08-03 02:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Admin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(default='', max_length=20, unique=True)),
                ('password', models.CharField(default='', max_length=10, unique=True)),
                ('resturaunt_name', models.CharField(default='', max_length=10, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Checkout',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total', models.IntegerField()),
                ('date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cardholder_firstname', models.CharField(default='', max_length=20)),
                ('cardholder_lastname', models.CharField(default='', max_length=30)),
                ('card_number', models.IntegerField(default=0)),
                ('cvv', models.IntegerField(default=0)),
                ('expiration_date', models.DateTimeField()),
                ('address', models.CharField(default='', max_length=20)),
            ],
        ),
    ]
