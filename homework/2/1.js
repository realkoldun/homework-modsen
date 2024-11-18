class EmailService {
    sendMessage(message) {
        console.log(message);
    }
}
class Notification {
    constructor(emailService) {
        this.emailService = emailService;
    }
    notify(message) {
        this.emailService.sendMessage(message);
    }
}

const emailService = new EmailService();
const notificationService = new Notification(emailService);
notificationService.notify("lol");