import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortnavComponent } from './portnav.component';

describe('PortnavComponent', () => {
  let component: PortnavComponent;
  let fixture: ComponentFixture<PortnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
