import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeIcon } from './coffee-icon';

describe('CoffeeIcon', () => {
  let component: CoffeeIcon;
  let fixture: ComponentFixture<CoffeeIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
