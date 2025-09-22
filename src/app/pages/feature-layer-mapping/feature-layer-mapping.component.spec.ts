import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureLayerMappingComponent } from './feature-layer-mapping.component';

describe('FeatureLayerMappingComponent', () => {
  let component: FeatureLayerMappingComponent;
  let fixture: ComponentFixture<FeatureLayerMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureLayerMappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureLayerMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
