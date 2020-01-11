import { Component, OnInit } from '@angular/core';
import { BuildingService } from './services/building.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit {
  title = 'elevator-system-app';

  constructor(
    private buildingService: BuildingService
  ) {
    console.log(this.buildingService.getBuilding());
  }

  ngOnInit() {
  }
}
