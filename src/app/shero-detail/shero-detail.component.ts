import { Component, OnInit, Input } from '@angular/core';
import { Shero } from '../shero';

@Component({
  selector: 'app-shero-detail',
  templateUrl: './shero-detail.component.html',
  styleUrls: ['./shero-detail.component.css']
})
export class SheroDetailComponent implements OnInit{
  @Input() shero?: Shero;

  constructor() {}

  ngOnInit(): void {

  }

}
