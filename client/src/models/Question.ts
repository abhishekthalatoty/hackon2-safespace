export class Question {
  constructor(args) {
    this.id = args._id;
    this.body = args.body;
    this.userId = args.userId;
    this.userDisplayName = args.userDisplayName;
    this.date = new Date(args.date);
    this.tags = args.tags;
    this.randomAnswer = args.randomAnswer;
  }

  id: string;
  body: string;
  userId: string;
  userDisplayName: string;
  date: Date | string; //change later
  tags: [string];
  randomAnswer?: string;
}
