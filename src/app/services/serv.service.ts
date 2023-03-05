import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as uuid from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private db: AngularFirestore) { }
  isUserLogged = false;
  userName = '';

  // To save data to firebase
  addUserData(name: any, email: any, password: any) {
    const id = uuid.v1();
    this.db.collection('User').doc(id).set({ name: `${name}`, email: `${email}`, password: `${password}` });
    return new Promise<any>((resolve) => {
      this.db.collection('User', ref => ref.where('email', '==', `${email}`)).valueChanges().subscribe((user: any) => resolve(user));
    });
  }

  // To retrive data from firebase
  getUserData(email: any) {
    return new Promise<any>((resolve) => {
      this.db.collection('User', ref => ref.where('email', '==', `${email}`)).valueChanges().subscribe((user: any) => resolve(user));
    });
  }
}
