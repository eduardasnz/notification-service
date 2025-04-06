import { makeNotification } from "../../../test/factory/notification-factory"; 
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notification";
import { CountRecipientsNotification } from "./count-notifications-recipients";

describe('count recipient notifications', () => {

  it('should be able to count recipients notification', async () => {

    const notificationRepository = new InMemoryNotificationsRepository()
    const countRecipientsNotification = new CountRecipientsNotification(notificationRepository);

    await notificationRepository.create(
      makeNotification({ recipientId: '799152b1-b4ff-45a3-8100-d7e95a1bcb55'})
    );

    await notificationRepository.create(
      makeNotification({ recipientId: '799152b1-b4ff-45a3-8100-d7e95a1bcb55'})
    );

    await notificationRepository.create(
      makeNotification({ recipientId: '799152b1-b4ff-45a3-8100-d7e95a1bcb099'})
    );

    const { count } = await countRecipientsNotification.execute({
      recipientId: '799152b1-b4ff-45a3-8100-d7e95a1bcb55'
    })

    expect(count).toEqual(2);
  })  
})