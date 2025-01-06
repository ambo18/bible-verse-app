from django.urls import path
from . import views

urlpatterns = [
    path('api/bible-verses/', views.BibleVerseList.as_view(), name='bible-verse-list'),
]
