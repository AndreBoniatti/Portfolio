import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { SidenavService } from './../shared/components/sidenav/sidenav.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentPage: string = 'home';
  email: string = '';

  constructor(
    private sidenavService: SidenavService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.sidenavService.getCurrentPage().subscribe((res) => {
      if (res) this.currentPage = res;
    });
  }

  saveContact(): void {
    const emailRegex = RegExp(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    let emailIsValid: boolean = emailRegex.test(this.email);

    if (!emailIsValid) {
      alert('E-mail inválido!');
      return;
    }

    this.http
      .post<any>('http://localhost:3000/contacts', { email: this.email })
      .subscribe(
        (res) => {
          alert(res.message);
          this.email = '';
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
