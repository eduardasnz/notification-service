import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notification";
import { Notification } from "../entities/notification";
import { Content } from "../entities/notification.content";
import { NotificationNotFound } from "./errors/notification-not-found";
import { ReadNotification } from "./read-notifications";

describe('read notification', () => {

  it('should be able to cancel a notification', async () => {

    const notificationRepository = new InMemoryNotificationsRepository()
    const readNotification = new ReadNotification(notificationRepository);

    const newNotification = new Notification({
      category: "food",
      recipientId: "799152b1-b4ff-45a3-8100-d7e95a1bcb55",
      content: new Content("seu pedido esta a caminho"),
    })

    await notificationRepository.create(newNotification)

    await readNotification.execute({
      notificationId: newNotification.id
    })

    expect(notificationRepository.notifications[0].readAt).toEqual(expect.any(Date));
  })

  it('should not be able to read a notification when it does not exists', async () => {

    const notificationRepository = new InMemoryNotificationsRepository()
    const readNotification = new ReadNotification(notificationRepository);

    await expect(
      readNotification.execute({
        notificationId: "fake-fake"
      })
    ).rejects.toThrow(NotificationNotFound);
  })
})