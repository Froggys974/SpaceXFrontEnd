import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../services/spaceX.service';

@Component({
  selector: 'app-capsule-details',
  templateUrl: './capsules-list.component.html',
  styleUrls: ['./capsules-list.component.scss']
})
export class CapsulesListComponent implements OnInit {
  capsules!: any[];

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.spaceXService.getCapsules().subscribe((data: any[]) => {
      this.capsules = data;
    });
  }

}