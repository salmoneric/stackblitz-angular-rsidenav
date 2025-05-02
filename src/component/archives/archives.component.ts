import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabsbuttonsComponent } from "../tabsbuttons/tabsbuttons.component";
import { TabscontentComponent } from "../tabscontents/tabscontent.components";

@Component({
  selector: "app-Archives",
  standalone: true,
  imports: [CommonModule, TabsbuttonsComponent, TabscontentComponent],
  templateUrl: "./archives.component.html",
  styleUrl: "./archives.component.scss",
})
export class ArchivesComponent {
  activeTab: string = "mind";

  onTabChange(tab: string) {
    this.activeTab = tab;
  }
}
