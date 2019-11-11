export interface ICourse {
  id: number;
  title: string;
  date: string;
  duration?: number;
  description: string;
  rate?: number;
}

export class Course implements ICourse {
  public id: number;
  public title: string;
  public date: string;
  public duration?: number;
  public description: string;
  public rate?: number;

  constructor(id: number, title: string, date: string, description: string, duration?: number, rate?: number) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.description = description;
    this.duration = duration;
    this.rate = rate;
  }
}
