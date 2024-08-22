import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckKhodamComponent } from './check.khodam.component';

describe('CheckKhodamComponent', () => {
  let component: CheckKhodamComponent;
  let fixture: ComponentFixture<CheckKhodamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckKhodamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckKhodamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
