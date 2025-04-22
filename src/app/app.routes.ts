import { Routes } from "@angular/router";
import { TabsComponent } from "../component/tabs/tabs.component";
import { ContentComponent } from "../component/content/content.component";

export const routes: Routes = [
  { path: "", redirectTo: "news", pathMatch: "full" },
  { path: "news", component: ContentComponent },
  { path: "tabs", component: TabsComponent },
];
