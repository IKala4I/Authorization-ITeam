import {HttpInterceptorFn} from '@angular/common/http';
import {LocalStorageService} from 'src/app/services/local-storage.service';
import {inject} from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(LocalStorageService).getItem('token') || '';

  const authReq = req.clone({
    setHeaders:{
      'X-Token': token
    }
  });
  return next(authReq);
};
