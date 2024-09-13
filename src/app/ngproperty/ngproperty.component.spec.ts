import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgpropertyComponent } from './ngproperty.component';

describe('NgpropertyComponent', () => {
  let component: NgpropertyComponent;
  let fixture: ComponentFixture<NgpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgpropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
