import {Component, EventEmitter, Output} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() sidebarStatus = new EventEmitter<boolean>();

  constructor() {
  }
  emitEvent(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.sidebarStatus.emit(checked);
  }

  
}
