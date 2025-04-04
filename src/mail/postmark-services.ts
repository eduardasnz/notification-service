import { Injectable } from "@nestjs/common";
import { MailService } from "./mail-services";

@Injectable()
export class PostmarkMailServices implements MailService {
  sendEmail(): string {
      return 'PostMark mail :)';
  }
}