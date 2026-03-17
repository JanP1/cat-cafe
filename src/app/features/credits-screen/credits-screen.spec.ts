import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsScreen } from './credits-screen';

describe('CreditsScreen', () => {
  let component: CreditsScreen;
  let fixture: ComponentFixture<CreditsScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditsScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsScreen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
