import { Component, Inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { DataService } from "src/app/service/data.service";
import { User } from "src/user/user";

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../dialogs/add/add.dialog.html',
  styleUrls: ['../../dialogs/add/add.dialog.css']
})

export class AddDialogComponent {

  // @ts-ignore

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              public dataService: DataService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addUser(this.data);
  }
}


function MAT_DIALOG_DATA(MAT_DIALOG_DATA: any) {
    throw new Error("Function not implemented.");
}

