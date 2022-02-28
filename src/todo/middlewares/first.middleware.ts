import { NestMiddleware } from '@nestjs/common';



export class FirstMiddleware implements NestMiddleware{
use(req: any, res: any, next: () => void): any {

    
    console.log(req);

    next();
}
}