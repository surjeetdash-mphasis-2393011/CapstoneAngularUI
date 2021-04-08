import { TestBed } from '@angular/core/testing';

import { Signup2Service } from './signup2.service';

describe('Signup2Service', () => {
  let service: Signup2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Signup2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
