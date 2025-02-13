"use strict";
{
    globalThis.C3.Plugins.Sparsha_CloudflareTrace.Cnds = {
        OnFetch()
        {
            return true;
        },

        OnError()
        {
            return true
        }
    };
}