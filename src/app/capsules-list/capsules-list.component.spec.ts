import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsulesListComponent } from './capsules-list.component';

describe('CapsulesListComponent', () => {
  let component: CapsulesListComponent;
  let fixture: ComponentFixture<CapsulesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapsulesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapsulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
