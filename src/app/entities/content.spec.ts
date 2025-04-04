import { Content } from "./notification.content"

describe('notification content', () => {
  
it(" should be able to create a notification content", () => {
  const content = new Content('voce recebeu um pedido de amizade');

  expect(content).toBeTruthy();
})

it(" should not be able to create a notification content with less than 5 characters", () => {

  expect(() => {
    new Content('oi');
  }).toThrow();
})

it(" should not be able to create a notification content with less than 800 characters", () => {

  expect(() => {
    new Content('a'.repeat(801));
  }).toThrow();
})

})