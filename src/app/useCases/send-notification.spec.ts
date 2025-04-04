import { SendNotification } from "./send-notification"
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notification";

describe('send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationRepository);
    
    await sendNotification.execute({
      category: 'social',
      content: 'sei la, é um test',
      recipientId: 'exemple01023912030123'
    })

    expect(notificationRepository.notifications).toHaveLength(1)
  })  
})