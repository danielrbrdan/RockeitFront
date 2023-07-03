import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfessionalsDialogComponent } from './new-professionals-dialog.component';

describe('NewProfessionalsDialogComponent', () => {
  let component: NewProfessionalsDialogComponent;
  let fixture: ComponentFixture<NewProfessionalsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProfessionalsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProfessionalsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
