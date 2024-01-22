import { EEmailAction } from "../enums/email-action.enum";

export const emailTemplates = {
  [EEmailAction.WELCOME]: {
    templateName: "welcome",
    subject: "Happy to see you in our app !!!👋",
  },
};
