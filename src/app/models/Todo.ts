export class Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  updatedDate: Date;


  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.isCompleted = false;
    this.updatedDate = new Date();
  }
}
