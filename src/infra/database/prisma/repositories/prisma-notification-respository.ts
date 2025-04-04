import { PrismaService } from "src/infra/database/prisma/prisma.service";
import { Notification } from "src/app/entities/notification";
import { Injectable } from "@nestjs/common";
import { PrismaNotificationMapper } from "../../mappers/prisma-notification.mapper";

@Injectable()
export class PrismaNotificationRepository {
  
  constructor(private prismaServices: PrismaService) { }
  
  async create(notification: Notification): Promise<void> {
    
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaServices.notification.create({
      data: raw,
    })
  }
}