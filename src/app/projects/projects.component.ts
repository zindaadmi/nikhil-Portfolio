import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Collection Closed Month(Mpokket)',
      technologies: 'Python',
      description: [
        'a Functional API in Python for a scheduler that identifies and permanently blocks overdue users.',
        'Worked with devops to deploy the new functionality.',
        'Got better in Python and integration with Genesys'
      ],
    },
    {
      title: 'Paylatte - BNPL',
      technologies: 'Laravel, Angular',
      description: [
        'BNPL service with deferred payment and a shorter repayment window',
        'Got to learn about Web Development in Fintech Industry',
      ],
    },
    {
      title: 'Design and implementation of smartbulbs',
      technologies: 'HTML, CSS, JS, React Native, Android',
      description: [
        'A cost effective react native app for efficient home lighting control saving electricity',
        'Learned multiple technologies to build the product.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
