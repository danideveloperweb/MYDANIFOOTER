import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydaniFooterComponent } from './mydani-footer.component';

describe('MydaniFooterComponent', () => {
  let component: MydaniFooterComponent;
  let fixture: ComponentFixture<MydaniFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MydaniFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydaniFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
