import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss']
})
export class DurationComponent implements OnInit {
  @Input() duration;

  lessonDuration;

  constructor() { }

  ngOnInit() {
    this.lessonDuration = this.duration ? this.duration : '';
  }

}
