import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() sidebarStatus = new EventEmitter<boolean>();

  emitEvent(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.sidebarStatus.emit(checked);
  }
}
