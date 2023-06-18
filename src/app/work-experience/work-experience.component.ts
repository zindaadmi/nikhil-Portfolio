import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Associate Software Engineer',
      company: 'Mpokket',
      duration: 'Dec 2021 - Now',
      description: [
        'Developed Restful services for CRM and mobile integration.',
        'Utilized SQL, Roach, and Redis for efficient data handling and manipulation.',
        'Successfully integrated Genesys and Ameyo services into the application.',
        'Streamlined call bucket movement and dispositions, improving overall operational efficiency.',
        'Analyzed business requirements, identified solutions, and met client needs.',
        'Oversaw modules and conducted system monitoring.',
        'Played an active role in resolving production issues and collaborating with the testing team.'
      ],
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
