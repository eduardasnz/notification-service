import { PrismaService } from "src/infra/database/prisma/prisma.service";
import { Notification } from "src/app/entities/notification";
import { Injectable } from "@nestjs/common";
import { PrismaNotificationMapper } from "../../mappers/prisma-notification.mapper";
import { NotificationRepository } from "src/app/repository/notification-repository";

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  
  constructor(private prisma: PrismaService) { }
 
  async create(notification: Notification): Promise<void> {
    
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.create({
      data: raw,
    })
  } 

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prisma.notification.findUnique({
      where: {
        id: notificationId
      }
    })

    if (!notification) {
      return null;
    }

    return PrismaNotificationMapper.toDomain(notification);
  }

  async countManyByRecipientId(recipientId: string): Promise<Number> {
    const count = await this.prisma.notification.count({
      where: {
        recipientId
      }
    })

    return count
  }
  
  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prisma.notification.findMany({
      where: {
        recipientId: recipientId,
      }
    })

    return notifications.map(PrismaNotificationMapper.toDomain)
  }

  async save(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prisma.notification.update({
      where: {
        id: raw.id,
      },
      data: raw,
    })
  }
}