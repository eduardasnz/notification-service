import { Notification } from "src/app/entities/notification"; 

export class NotificationViewModel {

  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content,
      recipientId: notification.recipientId,
      createdAt: notification.createdAt,
      readAt: notification.readAt,
    };
  }
}