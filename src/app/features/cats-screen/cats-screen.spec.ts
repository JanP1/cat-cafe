import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsScreen } from './cats-screen';

describe('CatsScreen', () => {
  let component: CatsScreen;
  let fixture: ComponentFixture<CatsScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatsScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsScreen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
