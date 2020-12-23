import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import {Api} from 'services/api/api';
import {Router} from 'aurelia-router';
@inject(Api, Router)
export class Home {

    // Variables
    client = null;
    url = 'https://tdp20hff.aws1-mamoka.network';
    urlAnalytics = '/googleapis/analytics/v1alpha:runReport';
    postData = {
        "entity": { "propertyId": "256169789" },
        "dateRanges": [{ "startDate": "2020-01-01", "endDate": "2020-12-31" }],
        "dimensions": [{ "name": "customEvent:id" }, { "name": "customEvent:titolo" }],
        "metrics": [{ "name": "totalUsers" }, { "name": "eventCount" }],
        "dimensionFilter": {
            "andGroup": {
                "expressions": [
                    {
                        "filter": {
                            "fieldName": "eventName",
                            "stringFilter": {
                            "value": "pa_apertura_articolo"
                            }
                        }
                    },
                    {
                        "notExpression": {
                            "filter": {
                                "fieldName": "customEvent:id",
                                "stringFilter": {
                                "value": "(not set)"
                                }
                            }
                        }
                    }
                ]
            }
        }
    };

    // Constructor
    constructor(api, router) {
        this.router = router;
        this.api = api;
        this.client = new HttpClient()
        .configure(x => {
            x.withBaseUrl(this.url);
          })
    }

    // Post Analytics
    post() {
        this.client.fetch(this.urlAnalytics, {
           method: "POST",
           body: JSON.stringify(this.postData)
        })
          
        .then(response => response.json())
        .then(data => {
           this.api.dataAnalytics = data.rows;
           this.router.navigateToRoute('results');
        });
    }
}