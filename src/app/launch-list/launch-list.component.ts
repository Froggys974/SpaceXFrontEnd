import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SpaceXService } from '../services/spaceX.service';
import { Router } from '@angular/router';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.scss'],
})
export class LaunchListComponent implements OnInit {
  launches: any[] = [];
  currentIndex: number = 0;
  @ViewChild('carousel') carousel!: ElementRef;
  @ViewChild('nextLaunch') nextLaunchElement!: ElementRef;
  @ViewChild('top') top!: ElementRef;
  selectedLaunchIndex: number = -1;
  filteredLaunches: any[] = [];
  filterCriteria = {
    mission_name: '',
    launch_year: '',
    launch_success: null,
    rocket_name: '',
    site_name: '',
    upcoming: null,
  };
  nextLaunch: any;

  constructor(private spaceXService: SpaceXService, public router: Router, private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.spaceXService.getLaunches().subscribe((data: any[]) => {
      this.launches = data;
      this.filteredLaunches = data;
      this.checkData();
    });
    this.spaceXService.getNextLaunch().subscribe((data: any[]) => {
      this.nextLaunch = data;
      console.log(this.nextLaunch);
    });
  }

  checkData() {
    this.launches.forEach((launch) => {
      if (launch.links.mission_patch_small === null) {
        launch.links.mission_patch_small = '../../assets/images/noPatch.jpg';
      }
    });
  }

  next() {
    if (this.currentIndex < this.launches.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateCarousel();
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.launches.length - 1;
    }
    this.updateCarousel();
  }

  updateCarousel() {
    const carousel = this.carousel.nativeElement as HTMLElement;
    const itemWidth = carousel.querySelector('.carousel-item')?.clientWidth;
    if (itemWidth) {
      carousel.style.transform = `translateX(-${
        this.currentIndex * (itemWidth + 40)
      }px)`; // 40px is the margin
    }
  }

  navigateToLaunchDetails(index: number) {
    this.selectedLaunchIndex = index;
    console.log(this.launches[index]);

    // Redirection vers la page des détails du lancement
    setTimeout(() => {
      this.router.navigate(['/launch', this.launches[index].flight_number]);
    }, 500);
  }

  applyFilters() {
    this.filteredLaunches = this.launches.filter((launch) => {
      return (
        (!this.filterCriteria.mission_name ||
          launch.mission_name.includes(this.filterCriteria.mission_name)) &&
        (!this.filterCriteria.launch_year ||
          launch.launch_year === this.filterCriteria.launch_year) &&
        (this.filterCriteria.launch_success === null ||
          launch.launch_success === this.filterCriteria.launch_success) &&
        (!this.filterCriteria.rocket_name ||
          launch.rocket.rocket_name.includes(
            this.filterCriteria.rocket_name
          )) &&
        (!this.filterCriteria.site_name ||
          launch.launch_site.site_name.includes(
            this.filterCriteria.site_name
          )) &&
        (this.filterCriteria.upcoming === null ||
          launch.upcoming === this.filterCriteria.upcoming)
      );
    });
  }

  scrollTo(element: string) {
    let elementToScroll:any={};
    switch (element) {
      case 'nextLaunch':
        elementToScroll = this.nextLaunchElement.nativeElement;
        elementToScroll.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'top':
        this.scrollService.scrollToTop();
        break;
      default:
        break;
    } 
    
  }
}
