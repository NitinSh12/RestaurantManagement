import { Observable } from "rxjs";

export interface UnsavedChangesGuard {
    UnsavedChangesPrompt:() => boolean | Observable<boolean>;
}