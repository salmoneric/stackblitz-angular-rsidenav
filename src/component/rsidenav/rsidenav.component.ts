import { NgClass } from "@angular/common";
import { Component, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-rsidenav",
  imports: [NgClass],
  templateUrl: "./rsidenav.component.html",
  styleUrl: "./rsidenav.component.scss",
})
export class RsidenavComponent {
  isVisible = true;
  @Input() toggleSideNavFromParent?: Boolean;

  toggleVisible() {
    this.isVisible = !this.isVisible;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["toggleSideNavFromParent"]) {
      console.log(
        "toggleSideNavFromParent received:",
        this.toggleSideNavFromParent
      );
      this.toggleVisible();
    }
  }
}
