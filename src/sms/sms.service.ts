import { Injectable } from '@nestjs/common';
import axios from 'axios'; // Import Axios for HTTP requests

@Injectable()
export class SmsService {
  private readonly apikey = 'd97868cc69d36af20e76';
  private readonly sender = 'PrestigeLab';
  private readonly me = '0246414197'; // Your personal phone number

  constructor() {}

  /**
   * Sends a message to yourself when someone contacts you via the form.
   * @param name Name of the person who contacted you
   * @param phone Phone number of the person who contacted you
   */
  async sendMe(name: string, phone: string): Promise<any> {
    const message = `${name} contacted you from your portfolio. Phone: ${phone}`;
    const url = `https://sms.smsnotifygh.com/smsapi?key=${this.apikey}&to=${this.me}&msg=${encodeURIComponent(
      message
    )}&sender_id=${this.sender}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error sending SMS to yourself:', error);
      throw new Error('Failed to send SMS to yourself');
    }
  }

  /**
   * Sends a thank-you message to the person who contacted you via the form.
   * @param name Name of the person
   * @param phone Phone number of the person
   */
  async sendSms(name: string, phone: string): Promise<any> {
    const message = `Hi ${name}, I'm Emmanuel. Thank you for reaching out. Let's create something special.`;
    const url = `https://sms.smsnotifygh.com/smsapi?key=${this.apikey}&to=${phone}&msg=${encodeURIComponent(
      message
    )}&sender_id=${this.sender}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error sending SMS to the contact:', error);
      throw new Error('Failed to send SMS to the contact');
    }
  }
}
