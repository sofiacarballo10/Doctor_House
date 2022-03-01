import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoritesCardDoctorContainer } from './favorites-card-doctor.container';

describe('FavoritesCardDoctorComponent', () => {
  let component: FavoritesCardDoctorContainer;
  let fixture: ComponentFixture<FavoritesCardDoctorContainer>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesCardDoctorContainer ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesCardDoctorContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
