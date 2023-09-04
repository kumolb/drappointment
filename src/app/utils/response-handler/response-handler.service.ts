import { Injectable, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
@Injectable()
export class ResponseHandlerService {
    success(res: Response, message: String, body: any, others: any): any {
        const responseObj: { statusCode: Number, message: String, page: Number, total: Number, limit: Number, body: any } = {
            statusCode: HttpStatus.OK,
            message: message,
            total: others.total,
            page: 0,
            limit: 0,
            body: body
        }
        others.total ? responseObj.total = others.total : null;
        others.page ? responseObj.page = others.page : null;
        others.limit ? responseObj.limit = others.limit : null;
        responseObj.body = body;
        return res.json(responseObj)
    }

    ok(res: Response, message: String, body: any): any {
        return res.json
    }

    notFound(res, Response, message: String, body: any): any {

    }
}
