import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-check",
  templateUrl: "./check.component.html",
  styleUrls: ["./check.component.css"],
})
export class CheckComponent {
  minutes = 0;
  gender = "female";
  fly = true;
  logo = "https://angular.io/assets/images/logos/angular/angular.png";
  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  male() {
    this.gender = "male";
  }
  female() {
    this.gender = "female";
  }
  other() {
    this.gender = "other";
  }
}
