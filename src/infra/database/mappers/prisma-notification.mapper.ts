import { Notification as RawNotification } from "@prisma/client";
import { Notification } from "src/app/entities/notification";
import { Content } from "src/app/entities/notification.content";

export class PrismaNotificationMapper {

  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      createdAt: notification.createdAt,
      readAt: notification.readAt ? notification.readAt : null,
    }
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification({
      category: raw.category,
      content: new Content(raw.content),
      recipientId: raw.recipientId,
      canceledAt: raw.canceledAt,
      createdAt: raw.createdAt,
      readAt: raw.readAt,
    }, raw.id)
  }
}