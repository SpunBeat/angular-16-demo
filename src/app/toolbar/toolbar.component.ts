import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  welcome = 'Welcome';
  constructor(public appService: AppService) {}
}
