import { Body, Controller, Patch, Post, Param, Get } from '@nestjs/common';
import { CreateNotificationBody } from '../dto/create-notification-body';
import { SendNotification } from 'src/app/useCases/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-model';
import { CancelNotification } from 'src/app/useCases/cancel-notification';
import { ReadNotification } from 'src/app/useCases/read-notifications';
import { UnReadNotification } from 'src/app/useCases/unread-notifications';
import { GetRecipientsNotification } from 'src/app/useCases/get-notifications-recipients';
import { CountRecipientsNotification } from 'src/app/useCases/count-notifications-recipients';

@Controller('notification')
export class NotificationsController {

  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnReadNotification,
    private getNotification: GetRecipientsNotification,
    private countNotification: CountRecipientsNotification
  ) {} 

  // POST 
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

  // PATCH
  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id,
    })
  }

  //GET
  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countNotification.execute({
      recipientId,
    })

    return count
  }

  @Get('/from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const {notifications} = await this.getNotification.execute({
      recipientId,
    })

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP)
    }
  }

  //PATCH
  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    })
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id,
    })
  }
}
