import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsbuttonsComponent } from '../tabsbuttons/tabsbuttons.component';
import { TabscontentComponent } from '../tabscontents/tabscontent.components';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, TabsbuttonsComponent, TabscontentComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  activeTab: string = 'mind';

  onTabChange(tab: string) {
    this.activeTab = tab;
  }
}