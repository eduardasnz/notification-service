import { makeNotification } from "../../../test/factory/notification-factory"
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notification";
import { NotificationNotFound } from "./errors/notification-not-found";
import { UnReadNotification } from "./unread-notifications";


describe('unread notification', () => {

  it('should be able to unread a notification', async () => {

    const notificationRepository = new InMemoryNotificationsRepository()
    const unReadNotification = new UnReadNotification(notificationRepository);

    const notification = makeNotification({
      readAt: new Date()
    })

    await notificationRepository.create(notification)

    await unReadNotification.execute({
      notificationId: notification.id
    })

    expect(notificationRepository.notifications[0].readAt).toBeNull();
  })

  it('should not be able to read a notification when it does not exists', async () => {

    const notificationRepository = new InMemoryNotificationsRepository()
    const unReadNotification = new UnReadNotification(notificationRepository);

    await expect(
      unReadNotification.execute({
        notificationId: "fake-fake"
      })
    ).rejects.toThrow(NotificationNotFound);
  })
})