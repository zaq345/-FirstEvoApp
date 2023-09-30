import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolve',
  templateUrl: './resolve.component.html',
  styleUrls: ['./resolve.component.css']
})
export class ResolveComponent {
  resolvedData: any;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.resolvedData = data;
    });
  }
}