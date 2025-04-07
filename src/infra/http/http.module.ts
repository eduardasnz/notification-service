import { Module } from "@nestjs/common";
import { NotificationsController } from "./controllers/notifications.controller";
import { SendNotification } from "src/app/useCases/send-notification";
import { DatabaseModule } from "../../infra/database/database.module"
import { CancelNotification } from "src/app/useCases/cancel-notification";
import { CountRecipientsNotification } from "src/app/useCases/count-notifications-recipients";
import { GetRecipientsNotification } from "src/app/useCases/get-notifications-recipients";
import { ReadNotification } from "src/app/useCases/read-notifications";
import { UnReadNotification } from "src/app/useCases/unread-notifications";

@Module({
  imports: [DatabaseModule],
  controllers: [ NotificationsController ],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientsNotification,
    GetRecipientsNotification,
    ReadNotification,
    UnReadNotification
  ],
})

export class HttpModule {}