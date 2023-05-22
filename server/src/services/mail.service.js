import nodemailer from 'nodemailer';
import config from '../config.js';

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Account activation for ${ config.CLIENT_URL }`,
      text: '',
      html:
        `
          <div>
              <h1>To activate follow the link</h1>
              <a href="${ link }">${ link }</a>
          </div>
        `
    });
  }
}

export default new MailService();
