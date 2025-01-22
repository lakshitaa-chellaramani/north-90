from django.urls import path
from django.http import HttpResponse

# def index(request):
#     return HttpResponse("Chat App is working!")

# urlpatterns = [
#     path('', index),  # Placeholder route for testing
# ]
# chat_app/urls.py

from .views import ChatView

# chat_app/urls.py

from . import views

urlpatterns = [
    # path('<str:room_name>/messages/', views.get_chat_messages, name='get_messages'),
    # path('<str:room_name>/messages/', views.post_chat_message, name='post_message'),
    path('api/chat/<str:room_name>/', views.ChatView.as_view(), name='chat_room'),

]




