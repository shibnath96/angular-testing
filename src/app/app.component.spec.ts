import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { RouterTestingModule } from '@angular/router/testing';
import { FormTesting } from './components/form-testing-custom/form-testing.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        
        AppComponent,
        FormTesting
      ],
      imports: [ RouterTestingModule ]
    }).compileComponents();
  }));

  

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compoIns = fixture.debugElement.componentInstance;
      
    expect(compoIns).toBeTruthy();
  
  }));

});
