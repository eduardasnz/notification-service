import { Injectable } from "@nestjs/common";
import { MailService } from "./mail-services";

@Injectable()
export class SMTPMailService implements MailService {
  sendEmail(): string {
      return 'SMTP mail :)';
  }
}