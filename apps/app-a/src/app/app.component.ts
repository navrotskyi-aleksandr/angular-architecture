import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@navrik/app-a-ui';

@Component({
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  selector: 'navrik-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'app-a';
}
