import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreateNotificationBody {
  
  @IsNotEmpty()
  @IsUUID()
  recipientId!: string;
  
  @IsNotEmpty()
  @Length(4, 922)
  content!: string;
  
  @IsNotEmpty()
  category!: string;
}