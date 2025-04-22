import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-tabsbuttons",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tabsbuttons.component.html",
  styleUrl: "./tabsbuttons.component.scss",
})
export class TabsbuttonsComponent {
  @Input() activeTab: string = 'mind';
  @Output() tabChange = new EventEmitter<string>();

  setActiveTab(tab: string) {
    this.tabChange.emit(tab);
  }
}