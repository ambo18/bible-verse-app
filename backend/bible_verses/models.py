from django.db import models

class BibleVerse(models.Model):
    book = models.CharField(max_length=100)
    chapter = models.IntegerField()
    verse = models.IntegerField()
    text = models.TextField()

    def __str__(self):
        return f"{self.book} {self.chapter}:{self.verse}"
