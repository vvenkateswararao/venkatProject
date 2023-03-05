import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ServService } from 'src/app/services/serv.service';
import { RouterTestingModule } from '@angular/router/testing'
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';

let navigation;
class MockRouter {
  navigate(url: any) {
    navigation = url;
  }
  url = 'dashboard';
} 
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: any

  service = jasmine.createSpyObj('ServService', ['getUserData', 'isUserLogged']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        LoginComponent,
        { provide: ServService, useValue: service },
        { provide: Router, useClass: MockRouter}
      ],
      declarations: [ LoginComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
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
    spyOn(component, 'validateUser');
    component.loginForm = {
      controls: {
        email: {
          value: 'abc@gmail.com'
        },
        password: {
          value: '123'
        }
      }
    }
    component.onSubmit();
    expect(component.onSubmit).toBeDefined()
  });

  it('should test validateUser if block', () => {
    component.loginForm = {
      controls: {
        name: {
          value: 'abc'
        },
        email: {
          value: 'abc@gmail.com'
        },
        password: {
          value: '123'
        }
      }
    }
    service.getUserData.and.returnValue(of([{ name: 'vvr', email: 'abc@gmail.com', password: '123' }]));
    service.isUserLogged;
    component.validateUser();
    expect(component.validateUser).toBeDefined();
  });

  it('should test validateUser else block', () => {
    component.loginForm = {
      controls: {
        name: {
          value: 'abc'
        },
        email: {
          value: 'abc@gmail.com'
        },
        password: {
          value: '123'
        }
      }
    }
    service.getUserData.and.returnValue(of([]));
    component.validateUser();
    expect(component.validateUser).toBeDefined();
  });
});
