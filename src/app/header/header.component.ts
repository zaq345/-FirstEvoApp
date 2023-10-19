import { Store } from '@ngxs/store';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState } from '../store/auth.state';
import { AuthUpdate } from '../store/model/auth.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store,
    private elementRef: ElementRef
  ) { }
  authObject: any;
  ngOnInit(): void {
    this.store.select(AuthState.getAuthObject).subscribe({
      next: data => {
        this.authObject = data
      }
    })
  }

  showLoginBtn() {
    const currentPath = this.router.url;
    return !(currentPath === '/auth' || currentPath === '/register') && this.authObject.role === 'guest';
  }

  showUser() {
    const currentPath = this.router.url;
    return !(currentPath === '/auth' || currentPath === '/register') && (this.authObject.role === 'user' || this.authObject.role === 'admin');
  }

  showRole(role: string) {
    return role === 'admin' ? 'Администратор' : 'Пользователь';
  }

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onDocumentClick(event: MouseEvent) {
    const clickedInsideMenu = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInsideMenu) {
      this.toggleMenu()
    }
  }
  

  showAdminBtn() {
    return this.authObject.role === 'admin'
  }

  exit() {
    this.store.dispatch(new AuthUpdate({
      access_token: '',
      role: 'guest',
      username: 'guest',
      id: -1,
      fullname: 'guest',
      image: ''
    }))
    this.router.navigateByUrl('/')
    this.isMenuOpen = false;
  }
}
