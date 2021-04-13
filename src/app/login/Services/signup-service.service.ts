import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user-model';

@Injectable({
  providedIn: 'root'
})
export class SignupServiceService {

  constructor() { }

  registerUser(userDetail: User): Observable<string> {
    return of('Test');
  }
}
