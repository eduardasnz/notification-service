import { Notification, NotificationProps } from "src/app/entities/notification";
import { Content } from "src/app/entities/notification.content";


type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: "food",
    recipientId: "799152b1-b4ff-45a3-8100-d7e95a1bcb55",
    content: new Content("seu pedido esta a caminho"),
    ...override,
  })
}