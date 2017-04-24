import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<app-title [subtitle]="subtitle"></app-title>
             <nav>
                <a routerLink ="contact" routerActive="active">Contact</a>
                <a routerLink ="crisis" routerActive="active">Crisis</a>
                <a routerLink ="heroes" routerActive="active">Heroes</a>
             </nav>
             <router-outlet></router-outlet>
             `,
})
export class AppComponent  {
  subtitle = '(v1)';
}
