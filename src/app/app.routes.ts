import { Routes } from "@angular/router";
import { TabsComponent } from "../component/tabs/tabs.component";
import { ContentComponent } from "../component/content/content.component";
import { TabsbuttonsComponent } from "../component/tabsbuttons/tabsbuttons.component";

export const routes: Routes = [
  { path: "", redirectTo: "missions", pathMatch: "full" },
  { path: "missions", component: ContentComponent },
  { path: "tabsb", component: TabsbuttonsComponent },
  { path: "tabs", component: TabsComponent },
];
