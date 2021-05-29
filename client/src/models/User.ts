export class User {
  constructor(args) {
    this.id = args._id;
    this.username = args.username;
    this.displayName = args.displayName;
    this.dob = args.dob;
    this.dateJoined = args.dateJoined;
  }
  id: string;
  username: string;
  displayName: string;
  dateJoined: Date | string;
  dob: Date | string;
}
