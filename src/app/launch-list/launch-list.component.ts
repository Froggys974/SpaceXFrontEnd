import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../services/spaceX.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss']
})
export class LaunchListComponent implements OnInit {
  launches: any[]=[];

  constructor(private spaceXService: SpaceXService) { }

  ngOnInit(): void {
    this.spaceXService.getLaunches().subscribe((data: any[]) => {
      this.launches = data;
    });
  }
}
