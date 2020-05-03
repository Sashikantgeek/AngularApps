import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { RegisterComponent } from "./components/register/register.component";
import { CheckComponent } from "./components/check/check.component";
import { MatCardModule } from "@angular/material";
import { ReactiveComponent } from "./components/reactive/reactive.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { LocalizeComponent } from "./components/localize/localize.component";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient, HttpClientModule } from "@angular/common/http";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "../assets/en.json", ".json");
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CheckComponent,
    ReactiveComponent,
    LoginFormComponent,
    LocalizeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
