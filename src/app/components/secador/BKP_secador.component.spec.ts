import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecadorComponent } from './secador.component';

describe('SecadorComponent', () => {
  let component: SecadorComponent;
  let fixture: ComponentFixture<SecadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
