import {
    Injectable, NestInterceptor, ExecutionContext, CallHandler
    } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable()
export class MyInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext,
    next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    console.log('Before handling Request ...');
    const request = context.switchToHttp().getRequest();
    const start = Date.now();
    return next.handle().pipe(
    tap(()=> {
    const end = Date.now();
    // console.log("end request");
    
    console.log(`the duration of the request is ${end-start} ms`);
    }
    ));
    }
    }