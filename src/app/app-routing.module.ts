import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { CheckComponent } from "./components/check/check.component";
import { ReactiveComponent } from "./components/reactive/reactive.component";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { LocalizeComponent } from "./components/localize/localize.component";

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "check", component: CheckComponent },
  { path: "reactive", component: ReactiveComponent },
  { path: "login-form", component: LoginFormComponent },
  { path: "localize", component: LocalizeComponent },

  { path: "", redirectTo: "/localize", pathMatch: "full" },
  { path: "**", redirectTo: "/localize", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
