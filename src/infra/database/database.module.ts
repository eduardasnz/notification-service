import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationRepository } from "./prisma/repositories/prisma-notification-respository";
import { NotificationRepository } from "src/app/repository/notification-repository";

@Module({
  providers: [
    PrismaService,
    PrismaNotificationRepository,
    {
      provide: NotificationRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationRepository]
})
export class DatabaseModule { } 