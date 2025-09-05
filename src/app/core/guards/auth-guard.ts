import { CanActivateFn, Router } from '@angular/router';
import { inject} from '@angular/core';
import { Storage } from 'src/app/core/providers/storage/storage';
import { Uuid } from 'src/app/core/providers/uuid/uuid';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storage = inject(Storage);
  const auth =  storage.get<{Uuid:string}>('AUTH');
  if(!auth){
    router.navigate(['/login']);
    return false
  }
  return true;
};

