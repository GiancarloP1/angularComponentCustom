import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengCardsComponent } from './primeng-cards.component';

describe('PrimengCardsComponent', () => {
  let component: PrimengCardsComponent;
  let fixture: ComponentFixture<PrimengCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimengCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
