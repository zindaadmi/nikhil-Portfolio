import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Python Web Development',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Laravel',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Angular',
      level: 'Good',
      rating: 50,
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
