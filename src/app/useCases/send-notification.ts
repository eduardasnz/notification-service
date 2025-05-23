import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/notification";
import { Content } from "../entities/notification.content";
import { NotificationRepository } from "../repository/notification-repository";


interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {

  constructor(
    private notificationsRepository: NotificationRepository
  ) {}

  async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request
  
    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    })

    await this.notificationsRepository.create(notification);

    return {
      notification,
    }
  }
}