import { Notification } from "src/app/entities/notification"
import { NotificationRepository } from "src/app/repository/notification-repository"


export class InMemoryNotificationsRepository implements NotificationRepository {

  public notifications: Notification[] = []

  findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId
    )

    if (!notification) {
      null;
    }

    return Promise.resolve(notification ?? null)
  }


  async create(notification: Notification) {
    this.notifications.push(notification)
  }


  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id)

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}