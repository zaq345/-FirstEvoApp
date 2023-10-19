import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private router: Router) { }

  currentPath!: string;

  ngOnInit(): void {
    // console.log('app component init')
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPath = this.router.url;
        // console.log('now path is: ' + this.currentPath)
      }
    });
  } 
  showHeaderFooter(){
    if(this.currentPath !== '/err404' && this.currentPath !== '/err401'){
      return true
    } else {
      return false
    }
  }
}
