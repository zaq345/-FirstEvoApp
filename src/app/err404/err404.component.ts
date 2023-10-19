import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  templateUrl: './err404.component.html',
  styleUrls: ['./err404.component.css']
})
export class Err404Component {

  constructor(
    // private route: ActivatedRoute, 
    // private router: Router,
    private location: Location
  ) { }

  return() {
    this.location.back()
  }
}
