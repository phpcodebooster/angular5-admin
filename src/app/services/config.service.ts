import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService implements Resolve<any> {

    resolve(route: ActivatedRouteSnapshot) {
        return new Promise((resolve, reject) => {

            // get local configuration file based on environment
            const env = environment.production ? 'prod' : 'dev';
            const filePath = './../../configs/' + env + '.json';

            // read json file internally here and pass json data
            // to below resolve function
            resolve({
                'test': 'sample json data'
            });
        });
    }
}
