var dms =
{
    latitude:
        {
            degrees: null,
            minutes: null,
            seconds: null
        },

    longitude:
        {
            degrees: null,
            minutes: null,
            seconds: null
        },
    geographicalRepresentation:
        false,
    readData:   //maybe it's better to name toString?
        function()
        {
            var lat;
            var lon;
            if(this.geographicalRepresentation)
            {
                this.latitude.degrees >= 0
                    ? lat = this.latitude.degrees + "°" + this.latitude.minutes + "'" + this.latitude.seconds + "''" + "N"
                    : lat = -this.latitude.degrees + "°" + this.latitude.minutes + "'" + this.latitude.seconds + '"' + "S";
                this.longitude.degrees >= 0
                    ? lon = this.longitude.degrees + "°" + this.longitude.minutes + "'" + this.longitude.seconds + "''" + "E"
                    : lon = -this.longitude.degrees + "°" + this.longitude.minutes + "'" + this.longitude.seconds + "''" + "W";
            }
            else
            {
                lat = this.latitude.degrees + "°" + this.latitude.minutes + "'" + this.latitude.seconds + "''";
                lon = this.longitude.degrees + "°" + this.longitude.minutes + "'" + this.longitude.seconds + "''";
            }
            return lat  +  " "  +  lon;
        },
    writeData:
        function(latD, latM, latS, lonD, lonM, lonS, geo)
        {
            this.latitude.degrees = latD;
            this.latitude.minutes = latM;
            this.latitude.seconds = latS;

            this.longitude.degrees = lonD;
            this.longitude.minutes = lonM;
            this.longitude.seconds = lonS;

            this.geographicalRepresentation = geo;
        }
};
var dm =
{
    latitude:
        {
            degrees: null,
            minutes: null
        },

    longitude:
        {
            degrees: null,
            minutes: null
        },
    geographicalRepresentation:
        false,
    readData:
        function()
        {
            var lat;
            var lon;
            if(this.geographicalRepresentation)
            {
                this.latitude.degrees >= 0
                    ? lat = this.latitude.degrees + "°" + this.latitude.minutes + "'" + "N"
                    : lat = -this.latitude.degrees + "°" + this.latitude.minutes + "'" + "S";
                this.longitude.degrees >= 0
                    ? lon = this.longitude.degrees + "°" + this.longitude.minutes + "'" + "E"
                    : lon = -this.longitude.degrees + "°" + this.longitude.minutes + "'" + "W";
            }
            else
            {
                lat = this.latitude.degrees + "°" + this.latitude.minutes + "'";
                lon = this.longitude.degrees + "°" + this.longitude.minutes + "'";
            }
            return lat + " " + lon;
        },
    writeData:
        function(latD, latM, lonD, lonM, geo)
        {
            this.latitude.degrees = latD;
            this.latitude.minutes = latM;

            this.longitude.degrees = lonD;
            this.longitude.minutes = lonM;

            this.geographicalRepresentation = geo;
        }
};
var d =
{
    latitude:
        {
            degrees: null
        },

    longitude:
        {
            degrees: null
        },
    showDegreeSymbol:true,
    readData:
        function()
        {
            var lat = this.latitude.degrees + (this.showDegreeSymbol ? "°" : "");
            var lon = this.longitude.degrees + (this.showDegreeSymbol ? "°" : "");
            return lat  +  " "  +  lon;
        },
    writeData:
        function(latD, lonD, deg)
        {
            this.latitude.degrees = latD;
            this.longitude.degrees = lonD;
            this.showDegreeSymbol = deg;
        }
};
function clearData()
{
    dms.latitude.degrees = null;
    dms.latitude.minutes = null;
    dms.latitude.seconds = null;

    dms.longitude.degrees = null;
    dms.longitude.minutes = null;
    dms.longitude.seconds = null;

    dm.latitude.degrees = null;
    dm.latitude.minutes = null;

    dm.longitude.degrees = null;
    dm.longitude.minutes = null;

    dms.latitude.degrees = null;
    dms.longitude.degrees = null;
}
