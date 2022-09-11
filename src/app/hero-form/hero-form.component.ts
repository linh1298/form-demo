import { Component, OnInit } from '@angular/core';

import { Hero } from '../Hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Smart', 'Flexible', 'Hot', 'Fast', 'Strong', 'Magic']

  model = new Hero(1, 'Dr. Strange', this.powers[5], 'Chuck OverStreet');

  submitted = false;  

  onSubmit(): void {
    this.submitted = true;
  }

  formReset(): void {
    this.submitted = false;
    
  }

  newHero() {
    this.model = new Hero(12, '', '');
  }

  constructor() { }

  ngOnInit() {
  }

}
