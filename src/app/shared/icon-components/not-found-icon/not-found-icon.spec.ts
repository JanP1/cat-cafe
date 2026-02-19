import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundIcon } from './not-found-icon';

describe('NotFoundIcon', () => {
  let component: NotFoundIcon;
  let fixture: ComponentFixture<NotFoundIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
