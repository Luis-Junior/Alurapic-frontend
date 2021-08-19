import { TestBed, async, inject } from '@angular/core/testing';

import { RequiresAutenticationGuard } from './requires-autentication.guard';

describe('RequiresAutenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequiresAutenticationGuard]
    });
  });

  it('should ...', inject([RequiresAutenticationGuard], (guard: RequiresAutenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
