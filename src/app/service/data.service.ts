import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "src/user/user";
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = 'https://api.github.com/repos/angular/angular/users';

  dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  // @ts-ignore
  constructor(private httpClient: HttpClient) {
  }

  get data(): User[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {

    // @ts-ignore
    this.httpClient.get<User[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below
  // @ts-ignore
  addUser(user: User): void {
    this.dialogData = user;
  }

  updateUser(user: User): void {
    this.dialogData = user;
  }

  deleteUser(id: number): void {
    console.log(id);
  }
}
