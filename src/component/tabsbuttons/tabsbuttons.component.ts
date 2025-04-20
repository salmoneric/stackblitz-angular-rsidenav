import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-tabsbuttons",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tabsbuttons.component.html",
  styleUrl: "./tabsbuttons.component.scss",
})
export class TabsbuttonsComponent {
  activeTab: string = "mind";

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
