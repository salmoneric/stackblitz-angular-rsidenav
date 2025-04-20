import { Routes } from '@angular/router';
import { TabsComponent } from '../component/tabs/tabs.component';
import { ContentComponent } from '../component/content/content.component';

export const routes: Routes = [
  { path: '', redirectTo: 'missions', pathMatch: 'full' },
  { path: 'missions', component: ContentComponent },
  { path: 'tabs', component: TabsComponent }
];