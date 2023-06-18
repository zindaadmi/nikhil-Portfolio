import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'BIT (Bengaluru)',
      course: 'BE in Computer Science Engineering',
      duration: '2016-2021',
      score: '60%',
    },
    {
      institute: 'Holy Hearts Educational Academy',
      course: 'Higher Secondary School',
      duration: '2014-2016',
      score: '72%',
    },
    {
      institute: 'Holy Hearts Educational Academy',
      course: 'Senior Secondary School',
      duration: '2012-2014',
      score: '70%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
