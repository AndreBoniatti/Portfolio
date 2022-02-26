import { Component, OnInit } from '@angular/core';
import { SidenavService } from './../shared/components/sidenav/sidenav.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currentPage: string = 'home';

  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    this.sidenavService.getCurrentPage().subscribe((res) => {
      if (res) this.currentPage = res;
    });
  }
}
