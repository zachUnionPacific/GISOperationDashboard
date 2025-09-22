import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationStatusComponent } from './application-status.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ApplicationStatusComponent', () => {
  let component: ApplicationStatusComponent;
  let fixture: ComponentFixture<ApplicationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationStatusComponent],
      providers: [
        // component subscribes to route.queryParams in ngOnInit
        { provide: ActivatedRoute, useValue: { queryParams: of({}) } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept a ?q= query param to prefill search', async () => {
    // reconfigure with a query param to verify prefill
    await TestBed.resetTestingModule()
      .configureTestingModule({
        imports: [ApplicationStatusComponent],
        providers: [
          { provide: ActivatedRoute, useValue: { queryParams: of({ q: 'RailView' }) } },
        ],
      })
      .compileComponents();

    const f = TestBed.createComponent(ApplicationStatusComponent);
    const c = f.componentInstance;
    f.detectChanges();

    expect(c.term).toBe('RailView');
  });
});