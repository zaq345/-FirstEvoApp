import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    // console.log(this.route.snapshot.url.join('/'));
  }
}
