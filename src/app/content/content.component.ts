import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  title = 'hui';
  message = 'app is running!';
  constructor(public appService: AppService) {}
}
