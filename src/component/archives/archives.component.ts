import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-Archives",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./archives.component.html",
  styleUrl: "./archives.component.scss",
})
export class ArchivesComponent {
  activeTab: string = "mind";

  onTabChange(tab: string) {
    this.activeTab = tab;
  }
}
