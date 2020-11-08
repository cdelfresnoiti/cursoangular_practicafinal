import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AgentesService } from './agentes.service';

describe('AgentesService', () => {
  let service: AgentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
    });
    service = TestBed.inject(AgentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
