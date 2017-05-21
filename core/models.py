from django.db import models
from django.conf import settings


class Article(models.Model):
    heading = models.CharField(max_length=128, blank=True)
    text = models.TextField(blank=True)
    image = models.ImageField(upload_to='media/', blank=True)
    edit_date = models.DateTimeField(auto_now_add=True, blank=True)

    def __str__(self):
        return self.heading

