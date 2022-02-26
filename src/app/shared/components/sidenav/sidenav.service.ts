import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidenavService {
  currentPage$: BehaviorSubject<string> = new BehaviorSubject<string>('home');

  setCurrentPage(currentPage: string): void {
    this.currentPage$.next(currentPage);
  }

  getCurrentPage(): Observable<string> {
    return this.currentPage$.asObservable();
  }
}
