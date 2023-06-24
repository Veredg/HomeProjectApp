
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';


@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(public spinnerService: SpinnerService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.showLoader();

    return next.handle(request).pipe(
      finalize(() => this.spinnerService.hideLoader())
    );
  }
}
