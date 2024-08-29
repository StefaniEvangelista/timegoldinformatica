import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosServicosComponent } from './produtos-servicos.component';

describe('ProdutosServicosComponent', () => {
  let component: ProdutosServicosComponent;
  let fixture: ComponentFixture<ProdutosServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
