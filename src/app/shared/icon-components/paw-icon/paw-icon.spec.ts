import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PawIcon } from './paw-icon';

describe('PawIcon', () => {
  let component: PawIcon;
  let fixture: ComponentFixture<PawIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PawIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PawIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
