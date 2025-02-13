"use strict";
{
    const C3 = globalThis.C3;
    C3.Plugins.Sparsha_CloudflareTrace.Acts = {
        FetchData()
        {
            var self = this;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function()
            {
                if (xhttp.readyState == 4 && xhttp.status == 200)
                {
                    self.DataCloudflare = xhttp.responseText;
                    self._trigger(C3.Plugins.Sparsha_CloudflareTrace.Cnds.OnFetch);
                }
                else if (xhttp.readyState == 4 && xhttp.status != 200) self._trigger(C3.Plugins.Sparsha_CloudflareTrace.Cnds.OnError);
            };
            xhttp.open("GET", "https://www.cloudflare.com/cdn-cgi/trace", true);
            xhttp.send();
        }
    };
}