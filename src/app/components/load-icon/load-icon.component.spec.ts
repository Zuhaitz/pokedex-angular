import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadIconComponent } from './load-icon.component';

describe('LoadIconComponent', () => {
  let component: LoadIconComponent;
  let fixture: ComponentFixture<LoadIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
