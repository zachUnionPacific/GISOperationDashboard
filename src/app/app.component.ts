import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink,RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppComponent {
  title = 'GISOperationDashboard';
}
