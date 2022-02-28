import { NestMiddleware } from '@nestjs/common';



export class loggerMiddleware implements NestMiddleware{
use(req: any, res: any, next: () => void): any {

    console.log(" BODY.....")
    console.log(req.body);
    console.log(" IP ADDRESS .....")

    console.log(req.ip);

    console.log(" HEADERS .....")

    console.log(req.headers);

    console.log(" END .....")


    next();
}
}