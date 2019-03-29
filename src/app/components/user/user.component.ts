import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { Item } from "src/app/model/item";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  addForm: FormGroup;
  data: Item[];
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.addForm = new FormGroup({
      itemname: new FormControl(null, [Validators.required]),
      itemquantity: new FormControl(null, [Validators.required]),
      itembought: new FormControl(null, [Validators.required])
    });
  }
  create() {
    if (this.addForm.invalid) {
      return;
    }
    this.userService.addItem(this.addForm.value).subscribe(data => {});
    this.userService.getItem().subscribe((data: Item[]) => {
      this.data = data;
    });
  }
}
