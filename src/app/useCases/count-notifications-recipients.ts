import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repository/notification-repository";


interface CountRecipientsNotificationRequest {
  recipientId: string;
}

interface CountRecipientsNotificationResponse {
  count: Number;
}

@Injectable()
export class CountRecipientsNotification {

  constructor(private notificationsRepository: NotificationRepository) { }

  async execute(request: CountRecipientsNotificationRequest): Promise<CountRecipientsNotificationResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(recipientId);

    return { count }
  }
}