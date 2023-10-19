import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-err401',
  templateUrl: './err401.component.html',
  styleUrls: ['./err401.component.css']
})
export class Err401Component {
  constructor(
    // private route: ActivatedRoute, 
    // private router: Router,
    private location: Location
  ) { }

  return() {
    this.location.back()
  }

}
