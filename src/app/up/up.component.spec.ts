import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComponent } from './up.component';

describe('UpComponent', () => {
  let component: UpComponent;
  let fixture: ComponentFixture<UpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpComponent]
    });
    fixture = TestBed.createComponent(UpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
