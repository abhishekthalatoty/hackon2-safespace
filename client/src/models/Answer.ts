export class Answer {
  constructor(args) {
    this.id = args.id;
    this.body = args.body;
    this.userId = args.userId;
    this.userDisplayName = args.userDisplayName;
    this.date = new Date(args.id);
  }
  id: string;
  body: string;
  userId: string;
  questionId: string;
  date: Date | string; //change later
  userDisplayName: string;
}
