import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionScreen } from './description-screen';

describe('DescriptionScreen', () => {
  let component: DescriptionScreen;
  let fixture: ComponentFixture<DescriptionScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionScreen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
