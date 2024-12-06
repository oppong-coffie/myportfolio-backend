import { Controller, Post, Body } from '@nestjs/common';
import { SmsService } from './sms.service';

@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Post('sendme')
  async sendMe(@Body() body: { name: string; phone: string }) {
    const { name, phone } = body;
    return await this.smsService.sendMe(name, phone);
  }

  @Post('sendsms')
  async sendSms(@Body() body: { name: string; phone: string }) {
    const { name, phone } = body;
    return await this.smsService.sendSms(name, phone);
    return await this.smsService.sendMe(name, phone);

  }
}
