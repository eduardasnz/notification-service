import { makeNotification } from "../../../test/factory/notification-factory"; 
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notification";
import { GetRecipientsNotification } from "./get-notifications-recipients";

describe('get recipient notifications', () => {

  it('should be able to get recipients notification', async () => {

    const notificationRepository = new InMemoryNotificationsRepository()
    const getRecipientsNotification = new GetRecipientsNotification(notificationRepository);

    await notificationRepository.create(
      makeNotification({ recipientId: '799152b1-b4ff-45a3-8100-d7e95a1bcb55'})
    );

    await notificationRepository.create(
      makeNotification({ recipientId: '799152b1-b4ff-45a3-8100-d7e95a1bcb55'})
    );

    await notificationRepository.create(
      makeNotification({ recipientId: '799152b1-b4ff-45a3-8100-d7e95a1bcb099'})
    );

    const { notifications } = await getRecipientsNotification.execute({
      recipientId: '799152b1-b4ff-45a3-8100-d7e95a1bcb55'
    })

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(expect.arrayContaining([
      expect.objectContaining({ recipientId: '799152b1-b4ff-45a3-8100-d7e95a1bcb55' }),
      expect.objectContaining({ recipientId: '799152b1-b4ff-45a3-8100-d7e95a1bcb55' }),
    ]))
  })  
})