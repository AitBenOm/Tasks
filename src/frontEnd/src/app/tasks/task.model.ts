export class Task {

  public id: number;
  public name: string;
  public compleated: boolean;
  public dueDate: string;

  constructor(id: number, name: string, compleated: boolean, dueDate: string) {
    this.id = id;
    this.name = name;
    this.compleated = compleated;
    this.dueDate = dueDate;
  }
}
