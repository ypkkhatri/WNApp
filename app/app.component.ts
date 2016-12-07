import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
<p-dialog header="Title" [(visible)]="display">
    Content
</p-dialog>

<button type="text" (click)="showDialog()" pButton icon="fa-external-link-square" label="Show"></button>
`,
})
export class AppComponent {
  name = 'Angular';

  display: boolean = false;

  showDialog() {
    this.display = true;
    this.display = true;
  }
}
