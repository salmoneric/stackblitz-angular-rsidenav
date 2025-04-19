import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../component/header/header.component';
import { ContentComponent } from '../component/content/content.component';
import { RsidenavComponent } from '../component/rsidenav/rsidenav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ContentComponent, RsidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rsidenav';
  toggleChildSideNav: Boolean = false;
  @ViewChild(RsidenavComponent) rsidenavComponent!: RsidenavComponent;

  onToggleSideNavClicked($event: void) {
    console.log('AppComponent: onToggleSideNavClicked()');
    this.toggleChildSideNav = !this.toggleChildSideNav;
  }
}
