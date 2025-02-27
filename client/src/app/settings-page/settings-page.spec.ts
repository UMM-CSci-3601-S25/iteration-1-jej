import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { SettingsComponent } from './settings-page';

describe('Home', () => {

  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule, SettingsComponent],
    });

    fixture = TestBed.createComponent(SettingsComponent);

    component = fixture.componentInstance; // BannerComponent test instance

    // query for the link (<a> tag) by CSS element selector
    de = fixture.debugElement.query(By.css('.home-card'));
    el = de.nativeElement;
  });

  it('It has the basic home page text', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain('This is a home page! It doesn\'t do anything!');
    expect(component).toBeTruthy();
  });

});
