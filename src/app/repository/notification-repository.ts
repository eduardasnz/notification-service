import { Notification } from "../entities/notification"; 

export abstract class NotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<Number>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}