import { Component } from '@angular/core';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrl: './search-menu.component.css'
})
export class SearchMenuComponent {
  closed: boolean = true;

  toggleSearchMenu(): void {
    this.closed = !this.closed;
  }
}
