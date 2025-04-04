import { Replace } from "src/helpers/Replace";
import { Content } from "./notification.content";
import { randomUUID } from "crypto";

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;  
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification { 

  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, {createdAt?: Date}>, ) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  // RECIPIENT ID
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  // CATEGORY
  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  // CONTENT
  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  // READAT
  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined  {
    return this.props.readAt;
  }

  // CREATED AT
  public get createdAt(): Date {
    return this.props.createdAt;
  }

  // ID

  public get id(): string {
    return this._id;
  }
  
  // CANCEL AT
  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

} 



