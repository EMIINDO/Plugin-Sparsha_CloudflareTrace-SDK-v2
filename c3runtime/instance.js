"use strict";
{

    globalThis.C3.Plugins.Sparsha_CloudflareTrace.Instance = class CloudflareTraceInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();

            this.DataCloudflare = "";

            if (properties) { }
        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }


        _extractString(code) {
            const myRegexp = eval("/^(?:" + code + ")=(.*)$/gm");
            const myString = this.DataCloudflare;
            let match;

            let resultString = "";
            match = myRegexp.exec(myString);
            while (match != null) {
                resultString = resultString.concat(match[1] + "\n");
                match = myRegexp.exec(myString);
            }
            return resultString
        }
    }
}