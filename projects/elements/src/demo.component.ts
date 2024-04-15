import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'a-html',
  template: `<h1>{{ $title() }}</h1>`,
})
export class DemoComponent {
  $title = signal<string>('no  title is set with a signal');

  @Input()
  set title(value: string) {
    this.$title.set(value);
  }
}
