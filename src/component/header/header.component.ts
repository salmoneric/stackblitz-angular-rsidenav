import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() toggleSideNavClick = new EventEmitter<void>();

  clickToggleSideNav() {
    console.log('HeaderComponent: clickToggleSideNav()');
    this.toggleSideNavClick.emit();
  }
}
