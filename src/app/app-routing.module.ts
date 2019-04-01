import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./components/user/user.component";
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  { path: "", component: UserComponent },
  { path: "edit", component: UpdateUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
