//this function converts from ddºmm'ss" to all others
function fromDms()
{
    var lat = (dms.latitude.degrees + dms.latitude.minutes / 60 + dms.latitude.seconds / 3600).toFixed(precD);
    var lon = (dms.longitude.degrees + dms.longitude.minutes / 60 + dms.longitude.seconds / 3600).toFixed(precD);
    d.writeData(lat, lon, false);
    fromD("latitude");
}

//this function converts from ddºmm.mmmmmmmm to all others
function fromDm()
{
    var lat = (dms.latitude.degrees + dms.latitude.minutes / 60).toFixed(precD);
    var lon = (dms.longitude.degrees + dms.longitude.minutes / 60).toFixed(precD);
    d.writeData(lat, lon, false);
    fromD("latitude");
}

//this function converts from dd.ddddddddº to all others
function fromD(axis)
{
    var value = d[axis].degrees

    var dd = truncate(value);
    var mm = (value - dd) * 60;
    var ss = ((value - dd) * 60 - truncate(mm)) * 60;

    if(!dms[axis].degrees) {
        dms[axis].degrees = dd;
        dms[axis].minutes = truncate(mm);
        dms[axis].seconds = ss.toFixed(precDms);
    }

    if(!dm[axis].degrees) {
        dm[axis].degrees = dd;
        dm[axis].minutes = mm.toFixed(precDm);
    }

    if(axis == "latitude")
        fromD("longitude");

    output();
}

//additional function for some conversions
function truncate(number)
{
    return number > 0
        ? Math.floor(number)
        : Math.ceil(number);
}/**
 * Created by Triplecorpse on 20.03.2015.
 */
