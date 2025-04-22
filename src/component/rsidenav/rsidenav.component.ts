import { NgClass } from "@angular/common";
import { Component, Input, SimpleChanges } from "@angular/core";
import { TabsbuttonsComponent } from '../tabsbuttons/tabsbuttons.component';
import { TabscontentComponent } from '../tabscontents/tabscontent.components';

@Component({
  selector: "app-rsidenav",
  standalone: true,
  imports: [NgClass, TabsbuttonsComponent, TabscontentComponent],
  templateUrl: "./rsidenav.component.html",
  styleUrl: "./rsidenav.component.scss",
})
export class RsidenavComponent {
  isVisible = true;
  @Input() toggleSideNavFromParent?: Boolean;
  activeTab: string = 'mind';

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

  onTabChange(tab: string) {
    this.activeTab = tab;
  }
}
