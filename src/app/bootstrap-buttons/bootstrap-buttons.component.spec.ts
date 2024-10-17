import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapButtonsComponent } from './bootstrap-buttons.component';

describe('BootstrapButtonsComponent', () => {
  let component: BootstrapButtonsComponent;
  let fixture: ComponentFixture<BootstrapButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
