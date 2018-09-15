import { Component, Input } from '@angular/core';
import { navItems } from './../../_nav';
import { AuthRouteService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(private authservice: AuthRouteService, private route: Router) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  Logout() {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.authservice.logout();
    localStorage.removeItem('userToken');
    this.route.navigateByUrl('/login');
  }
}
