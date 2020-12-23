import { inject } from 'aurelia-framework';
import {Api} from 'services/api/api';
import {Router} from 'aurelia-router';
@inject(Api, Router)
export class Results {

    //  Variables
    results = null;

    // Constructor
    constructor(api, router) {
        this.router = router;
        this.api = api;
        this.results = api.dataAnalytics;
    }

    activate() {
        console.log(this.results);
    }
}