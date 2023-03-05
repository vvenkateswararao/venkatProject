import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServService } from 'src/app/services/serv.service';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: any

  service = jasmine.createSpyObj('ServService', ['userName']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      providers: [
        DashboardComponent,
        { provide: ServService, useValue: service }
      ],
      declarations: [ DashboardComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should test ngOnit', () => {
    service.userName.and.returnValue('venkat');
    component.ngOnInit();
    expect(component.ngOnInit).toBeDefined();
  });
});
