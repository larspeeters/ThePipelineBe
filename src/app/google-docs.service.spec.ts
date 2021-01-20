import { TestBed } from '@angular/core/testing';

import { GoogleDocsService } from './google-docs.service';

describe('GoogleDocsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleDocsService = TestBed.get(GoogleDocsService);
    expect(service).toBeTruthy();
  });
});
