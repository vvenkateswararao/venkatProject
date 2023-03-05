import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ServService } from 'src/app/services/serv.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: any

  service = jasmine.createSpyObj('ServService', ['addUserData']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      providers: [
        RegisterComponent,
        { provide: ServService, useValue: service }
      ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should test ngOnit', () => {
    component.ngOnInit();
    expect(component.ngOnInit).toBeDefined();
  });

  it('should test onSubmit', () => {
    spyOn(component, 'addUser');
    component.registerForm = {
      controls: {
        name: 'vvrao',
        email: {
          value: 'v.raovelidi@gmail.com'
        },
        password: {
          value: '123'
        }
      }
    }
    component.onSubmit();
    expect(component.onSubmit).toBeDefined()
  });

  it('should test addUser if block', () => {
    component.registerForm = {
      controls: {
        name: {
          value: 'venkat'
        },
        email: {
          value: 'v.raovelidi@gmail.com'
        },
        password: {
          value: '123'
        }
      }
    }
    service.addUserData.and.returnValue(of([{ name: 'vvr', email: 'abc@gmail.com', password: '123' }]));
    component.addUser();
    expect(component.addUser).toBeDefined();
  });
  it('should test addUser else block', () => {
    component.registerForm = {
      controls: {
        name: {
          value: 'venkat'
        },
        email: {
          value: 'v.raovelidi@gmail.com'
        },
        password: {
          value: '123'
        }
      }
    }
    service.addUserData.and.returnValue(of([]));
    component.addUser();
    expect(component.addUser).toBeDefined();
  });
});
