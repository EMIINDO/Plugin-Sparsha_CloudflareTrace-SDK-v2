"use strict";
{
    globalThis.C3.Plugins.Sparsha_CloudflareTrace.Exps = {
        hostname()
        {
            return this._extractString("h").replace(/\n/g, '');
        },

        uri_scheme()
        {
            return this._extractString("visit_scheme").replace(/\n/g, '');
        },

        userAgent()
        {
            return this._extractString("uag").replace(/\n/g, '');
        },

        ip_address()
        {
            return this._extractString("ip").replace(/\n/g, '');
        },

        timestamp()
        {
            return parseInt(this._extractString("ts")) * 1000;
        },

        dataCenter()
        {
            return this._extractString("colo").replace(/\n/g, '');
        },

        http_version()
        {
            return this._extractString("http").replace(/\n/g, '');
        },

        tls_version()
        {
            return this._extractString("tls").replace(/\n/g, '');
        },

        country()
        {
            return this._extractString("loc").replace(/\n/g, '');
        },

        warpStatus()
        {
            return this._extractString("warp").replace(/\n/g, '');
        },

        sni()
        {
            return this._extractString("sni").replace(/\n/g, '');
        },

        gatewayStatus()
        {
            return this._extractString("gateway").replace(/\n/g, '');
        },

        serverInstance()
        {
            return this._extractString("fl").replace(/\n/g, '');
        },

        gatewayAccountId()
        {
            return this._extractString("gateway_account_id").replace(/\n/g, '');
        }
    };
}