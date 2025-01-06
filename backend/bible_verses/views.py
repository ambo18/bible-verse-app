from django.shortcuts import render
from rest_framework import generics
from .models import BibleVerse
from .serializers import BibleVerseSerializer

class BibleVerseList(generics.ListAPIView):
    queryset = BibleVerse.objects.all()
    serializer_class = BibleVerseSerializer

