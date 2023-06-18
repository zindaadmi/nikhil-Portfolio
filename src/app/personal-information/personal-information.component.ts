import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Nikhil Parakh'],
    ['DOB', '30/08/1998'],
    ['Work Exp', '1.5 Years+'],
    ['Education', 'BE (2021)'],
    ['Interests', 'Video Games, Guitar, Travelling'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 1.5 years+ of experience in software industry.',
    'Throughout my professional journey, my focus has been on developing web applications using Python, Laravel, Angular',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as ASE in Mpokket',
  ];

  constructor() {}

  ngOnInit(): void {}
}
