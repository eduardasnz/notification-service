import { Injectable } from "@nestjs/common";
import { Notification } from "../entities/notification";
import { NotificationRepository } from "../repository/notification-repository";


interface GetRecipientsNotificationRequest {
  recipientId: string;
}

interface GetRecipientsNotificationResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientsNotification {

  constructor(private notificationsRepository: NotificationRepository) { }

  async execute(request: GetRecipientsNotificationRequest): Promise<GetRecipientsNotificationResponse> {
    const { recipientId } = request;

    const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications }
  }
}