import { Routes } from "@angular/router";
import { ArchivesComponent } from "../component/archives/archives.component";
import { ContentComponent } from "../component/content/content.component";

export const routes: Routes = [
  { path: "", redirectTo: "news", pathMatch: "full" },
  { path: "news", component: ContentComponent },
  { path: "archives", component: ArchivesComponent },
];
