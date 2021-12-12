import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tutorial: AngularFirestoreDocument<any>;
  books: Observable<any[]>;

  constructor(store: AngularFirestore) {
    this.books = store.collection('books').valueChanges();
    this.tutorial = store.collection('books').doc('zVEXhrrzw4w1VWkn7LRn');
  }

  ngOnInit(): void {
    console.log(this.tutorial)
  }

}
