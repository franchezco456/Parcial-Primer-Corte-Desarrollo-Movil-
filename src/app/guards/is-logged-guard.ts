import { CanActivateFn, Router } from '@angular/router';
import { inject} from '@angular/core';
import { Storage } from '../shared/providers/storage/storage';
import { Uuid } from '../shared/providers/uuid/uuid';

export const isLoggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const storage = inject(Storage);
  const auth =  storage.get<{Uuid:string}>('AUTH');
  if(router.url === '/' && auth){
    return true;
  }
  router.navigate(['/home'])
  return false;
};
