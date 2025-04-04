import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dto/create-notification-body';
import { SendNotification } from 'src/app/useCases/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notification')
export class NotificationsController {

  constructor(private sendNotification: SendNotification) {} 

  @Post()
  async create(@Body() body: CreateNotificationBody) {

    const { notification } = await this.sendNotification.execute({
      content: body.content,
      category: body.category,
      recipientId: body.recipientId,
    });
  
    return {
      notification: NotificationViewModel.toHTTP(notification),
    }
  }
}
