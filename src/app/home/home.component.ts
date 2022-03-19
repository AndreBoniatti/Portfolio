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

  constructor(
    private sidenavService: SidenavService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.sidenavService.getCurrentPage().subscribe((res) => {
      if (res) this.currentPage = res;
    });
  }

  teste(): void {
    this.http.post<any>('http://localhost:3000', {}).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
