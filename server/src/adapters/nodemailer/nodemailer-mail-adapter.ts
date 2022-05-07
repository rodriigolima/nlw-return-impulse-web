import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from './../mail-adapter';



const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f131bb4085d2f9",
      pass: "1ebde22896d44e"
    }
  });



export class NodemailerMailAdpter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Rodrigo Lima <rodrigomoreiralima@hotmail.com>',
        subject,
        html: body,
        })
    };
}