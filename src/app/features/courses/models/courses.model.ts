export interface ICourse {
  id: number;
  title: string;
  data: string;
  duration?: string;
  description: string;
}

export class Course implements ICourse {
  public id: number;
  public title: string;
  public data: string;
  public duration?: string;
  public description: string;

  constructor(id: number, title: string, data: string, description: string, duration?: string) {
    this.id = id;
    this.title = title;
    this.data = data;
    this.description = description;
    this.duration = duration;
  }
}
