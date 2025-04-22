import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabscontents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabscontents.component.html',
  styleUrl: './tabscontents.component.scss'
})
export class TabscontentComponent {
  @Input() activeTab: string = 'mind';
}