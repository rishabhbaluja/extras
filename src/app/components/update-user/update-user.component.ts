import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"]
})
export class UpdateUserComponent implements OnInit {
  editForm: FormGroup;
  submitted: boolean = false;
  constructor(private router: Router, private userService: UserService) {}

  //Reactive form
  ngOnInit() {
    let _id = localStorage.getItem("id");
    if (!_id) {
      alert("invalid action please check user list");
      this.router.navigate([""]);
    } else {
      this.editForm = new FormGroup({
        _id: new FormControl(null, [Validators.required]),
        itemname: new FormControl(null, [Validators.required]),
        itemquantity: new FormControl(null, [Validators.required]),
        itembought: new FormControl(null, [Validators.required])
      });
    }
    this.userService.getItemById(_id).subscribe(data => {
      this.editForm.patchValue(data);
    });
  }

  //if the form is valid update the record and navigate back to todo page
  edit() {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    } 
    this.userService.updateItem(this.editForm.value).subscribe(data => {
      alert(this.editForm.value.itemname + " record updated");
      this.userService.getItem().subscribe(data => {
        this.router.navigate([""]);
      });
    });
  }
  backToUser() {
    this.router.navigate([""]);
  }
}
