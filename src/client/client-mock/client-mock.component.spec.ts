import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMockComponent } from './client-mock.component';

describe('ClientMockComponent', () => {
  let component: ClientMockComponent;
  let fixture: ComponentFixture<ClientMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientMockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
