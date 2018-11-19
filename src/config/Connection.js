'use strict';
/*
 * @file: Connection.js
 * @description: Connection file for the application
 * @date: 22.03.2018
 * @author: Gurtej Singh
 * */

const localhost       = "172.24.4.178//financialApp",
      staging         = "34.211.31.84:8039",
     // live            = "176.126.246.61";
     live            = "199.192.25.30";

const running_url   = live,
    http_url        = `http://${running_url}`,
    apiBase_url     = `http://${running_url}/services/`;
    

export default class Connection {
    static getResturl() {
        return apiBase_url;
    };
    static getBaseUrl() {
        return http_url;
    };
}