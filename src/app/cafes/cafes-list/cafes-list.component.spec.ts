/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CafesListComponent } from './cafes-list.component';
import { faker } from '@faker-js/faker';
import { CafeModel } from 'src/app/models/CafeModel';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('CafesListComponent', () => {
  let component: CafesListComponent;
  let fixture: ComponentFixture<CafesListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ CafesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafesListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const cafe = new CafeModel(
        Number(faker.datatype.uuid()),
        faker.name.firstName(),
        faker.lorem.sentence(),
        faker.address.country(),
        faker.lorem.word(),
        faker.datatype.number(),
        faker.image.food(),
      );
      component.cafes.push(cafe);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
