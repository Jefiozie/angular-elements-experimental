import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '?';
  constructor() {
    setTimeout(async () => {
      // @ts-ignore
      (await import('./main.js')) as unknown as any;
      const div = document.createElement('div');
      document.body.appendChild(div);
      const demoElementWithoutBinding = document.createElement('demo-element');
      const demoElement = document.createElement('demo-element');
      demoElement.setAttribute('title', 'hello will this binding work');

      div.appendChild(demoElement);
      div.appendChild(demoElementWithoutBinding);
    }, 500);
  }
}
