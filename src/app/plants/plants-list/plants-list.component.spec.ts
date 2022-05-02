/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Plant } from '../plant';

import { PlantsListComponent } from './plants-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('PlantsListComponent', () => {
  let component: PlantsListComponent;
  let fixture: ComponentFixture<PlantsListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantsListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsListComponent);
    component = fixture.componentInstance;
    component.plants = [
      new Plant(
        1,
        180,
        'Planta Comun 1',
        'Planta Cientifica 1',
        'Interior',
        'sutrato siembra 1',
        'Todos'
      ),
      new Plant(
        2,
        280,
        'Planta Comun 2',
        'Planta Cientifica 2',
        'Interior',
        'sutrato siembra 2',
        'Todos'
      ),
      new Plant(
        3,
        380,
        'Planta Comun 3',
        'Planta Cientifica 3',
        'Interior',
        'sutrato siembra 3',
        'Todos'
      ),
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have table', () => {
    const table = debug.query(By.css('table'));
    expect(table).toBeTruthy();
  });
  it('should have table header', () => {
    const tableHeader = debug.query(By.css('thead'));
    expect(tableHeader).toBeTruthy();
  });
  it('should have three table rows in tbody', () => {
    console.log(component.plants, 'las platans');
    const tableBody = debug.queryAll(By.css('tbody tr'));
    expect(tableBody).toBeTruthy();
    expect(tableBody.length).toEqual(component.plants.length);
  });
});
