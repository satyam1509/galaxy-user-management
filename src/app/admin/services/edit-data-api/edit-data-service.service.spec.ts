import { TestBed } from '@angular/core/testing';

import { EditDataServiceService } from './edit-data-service.service';

describe('EditDataServiceService', () => {
  let service: EditDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
