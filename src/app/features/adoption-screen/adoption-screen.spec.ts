import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionScreen } from './adoption-screen';

describe('AdoptionScreen', () => {
  let component: AdoptionScreen;
  let fixture: ComponentFixture<AdoptionScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptionScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionScreen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
