import { outputAst } from '@angular/compiler';
import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {
isLogged : boolean
  router;
  constructor(private auth: AngularFireAuth, router : Router) { 
    this.router = router;
    this.isLogged = false
  }

  ngOnInit(): void {
    
  }

  ngDoCheck() {
    this.checkLoggeduser ()
  }

  onLogout() {
    this.auth.signOut().then(() => this.router.navigate(['']));
  }

checkLoggeduser () {
  const auth = getAuth();
const user = auth.currentUser;

if (user) {
  this.isLogged = true
} else {
  this.isLogged = false
}
}

}
