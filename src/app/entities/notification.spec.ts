import { Content } from "./notification.content"
import { Notification } from "./notification";


describe('notification', () => {

  it(" should be able to create a notification", () => {
    const notification = new Notification({
      content: new Content('fulano de town'),
      category: 'town',
      recipientId: 'um-exemplo',
    });

    expect(notification).toBeTruthy();
  })
})