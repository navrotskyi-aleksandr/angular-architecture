import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'navrik-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app-b';
}
