import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UnsavedChangesGuard } from '../models/unsaved-changes-guard-model';

@Injectable()

export class UnsavedChangesService implements CanDeactivate<UnsavedChangesGuard>{

  constructor() { }

  canDeactivate(component: UnsavedChangesGuard): boolean | Observable<boolean> {
    return component.UnsavedChangesPrompt() ? true : 
                                              confirm('"WARNING: You have unsaved changes. Press Cancel to go back and save these changes, or OK to lose these changes."');

  }
}
