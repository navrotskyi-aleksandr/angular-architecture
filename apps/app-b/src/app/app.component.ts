import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@navrik/app-b-ui';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  selector: 'navrik-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'app-b';
}
