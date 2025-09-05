import { NgModule } from '@angular/core';

import {
  provideHttpClient,
  withInterceptorsFromDi,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Interceptor } from './interceptor/interceptor';

import { User } from './services/user/user';
import { Uuid } from './providers/uuid/uuid';
import { Storage } from './providers/storage/storage';
import { Encrypt } from './providers/encrypt/encrypt';
import { Http } from './providers/http/http';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    },
    User,
    Uuid,
    Storage,
    Encrypt,
    Http,
  ],
})
export class CoreModule {}
