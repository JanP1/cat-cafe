import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPanel } from './cat-panel';

describe('CatPanel', () => {
  let component: CatPanel;
  let fixture: ComponentFixture<CatPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
