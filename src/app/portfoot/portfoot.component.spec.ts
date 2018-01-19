import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfootComponent } from './portfoot.component';

describe('PortfootComponent', () => {
  let component: PortfootComponent;
  let fixture: ComponentFixture<PortfootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
