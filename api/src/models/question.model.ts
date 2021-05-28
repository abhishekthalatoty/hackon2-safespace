interface IQuestion {
  _id: string;
  userId: string;
  body: string;
  date: Date;
  tags: [string];
}
