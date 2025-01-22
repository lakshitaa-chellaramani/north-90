# chat_app/views.py
import time
from django.http import JsonResponse
from django.views import View
from django.core.exceptions import ObjectDoesNotExist
from .models import ChatMessage
from django.http import HttpRequest


class ChatView(View):
    def get(self, request: HttpRequest, room_name):
        # Long-polling: we will wait for new messages in the room
        last_message_id = request.GET.get('last_message_id', None)
        try:
            # If last_message_id is provided, we fetch newer messages
            if last_message_id:
                messages = ChatMessage.objects.filter(id__gt=last_message_id, room_name=room_name)
            else:
                messages = ChatMessage.objects.filter(room_name=room_name)

            if messages:
                # Return new messages if available
                return JsonResponse(
                    {'messages': [{'id': msg.id, 'message': msg.message} for msg in messages]},
                    status=200,
                )
            else:
                # No new messages, so we wait (long-polling)
                time.sleep(5)  # Adjust as needed
                return JsonResponse({'messages': []}, status=200)

        except ObjectDoesNotExist:
            return JsonResponse({'error': 'Room not found'}, status=404)

    def post(self, request: HttpRequest, room_name):
        try:
            message_data = request.POST.get('message')
            if message_data:
                new_message = ChatMessage.objects.create(room_name=room_name, message=message_data)
                return JsonResponse(
                    {'message': {'id': new_message.id, 'message': new_message.message}},
                    status=201
                )
            return JsonResponse({'error': 'Message cannot be empty'}, status=400)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
