import { Component, ViewChild } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "../component/header/header.component";
import { RsidenavComponent } from "../component/rsidenav/rsidenav.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, RsidenavComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "rsidenav";
  toggleChildSideNav: Boolean = false;
  @ViewChild(RsidenavComponent) rsidenavComponent!: RsidenavComponent;

  onToggleSideNavClicked($event: void) {
    console.log("AppComponent: onToggleSideNavClicked()");
    this.toggleChildSideNav = !this.toggleChildSideNav;
  }
}
