import { provideHttpClient } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { createApplication } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';

(async () => {
  const app = await createApplication({
    providers: [provideHttpClient()],
  });

  const DemoElement = createCustomElement(DemoComponent, {
    injector: app.injector,
  });

  customElements.define('demo-element', DemoElement);
})();
