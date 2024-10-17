import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengButtonsComponent } from './primeng-buttons.component';

describe('PrimengButtonsComponent', () => {
  let component: PrimengButtonsComponent;
  let fixture: ComponentFixture<PrimengButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
