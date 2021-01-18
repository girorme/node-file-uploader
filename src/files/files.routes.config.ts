import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';
import XLSX from 'xlsx';
import formidable from 'formidable';

export class FilesRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'FilesRoutes');
    }

    configureRoutes() {
        this.app.route('/files/xlsx')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('List files')
            })
            .post((req: express.Request, res: express.Response) => {
                const form = new formidable.IncomingForm();
                form.parse(req, function(_err: any, _fields: any, files: any) {
                    const f = files[Object.keys(files)[0]];
                    const workbook = XLSX.readFile(f.path);
                    const sheet_name_list = workbook.SheetNames[0];
                    res.status(200).send(
                        XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list])
                    )
                });
            });

        return this.app;
    }
}