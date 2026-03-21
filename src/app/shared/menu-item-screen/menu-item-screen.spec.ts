import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemScreen } from './menu-item-screen';

describe('MenuItemScreen', () => {
  let component: MenuItemScreen;
  let fixture: ComponentFixture<MenuItemScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemScreen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
