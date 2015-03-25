var precDms = 2;
var precDm = 4;
var precD = 6;

function validateUi()
{
    //defining regexes
    var regDmsMath = /^[+,-]?\d{1,3}[°]\d{1,2}[']\d{1,2}[.]?\d{0,2}[']{2}\s[+,-]?\d{1,3}[°]\d{1,2}[']\d{1,2}[.]?\d{0,2}[']{2}/;
    var regDmMath = /^[+,-]?\d{1,3}[°]\d{1,2}[.]\d{1,2}[.]?\d{0,4}[']\s[+,-]?\d{1,3}[°]\d{1,2}[.]\d{1,2}[.]?\d{0,4}[']/;
    var regDMath = /^[+,-]?\d{1,3}[.]?\d{0,6}[°]?\s[+,-]?\d{1,3}[.]?\d{0,6}[°]?/;
    var regDmsGeo = /^\d{1,3}[°]\d{1,2}[']\d{1,2}[.]?\d{0,2}[']{2}[N,S]\s[+,-]?\d{1,3}[°]\d{1,2}[']\d{1,2}[.]?\d{0,2}[']{2}[W,E]/;
    var regDmGeo = /^\d{1,3}[°]\d{1,2}[.]\d{1,2}[.]?\d{0,4}['][N,S]\s[+,-]?\d{1,3}[°]\d{1,2}[.]\d{1,2}[.]?\d{0,4}['][W,E]/;

    //defining input value
    var str = document.getElementById("inp").value;

    //checking for validation. If true, go further else throw an exception
    if(!((str.match(regDmsMath)) || (str.match(regDmMath)) || (str.match(regDMath)) || (str.match(regDmsGeo)) ||(str.match(regDmGeo))))
    {
        alert("Invalid input data! Please make sure that your input matches geographical coordinates pattern. If it does please contact the webmaster.");
        throw("Invalid input data!");
    }
    chooseFormat(str);
}

function output()
{
    if(dms.latitude.degrees) {
        document.getElementById("dms").value = dms.readData();
        document.getElementById("dm").value = dm.readData();
        document.getElementById("d").value = d.readData();
        clearData();
    }
}

function chooseFormat(str)
{
    var modificators, values;
    if(str.indexOf("''") != -1)
    {
        modificators = checkNwse(str);
        values = clearEmptyStrings(str.split(/[°,',N,W,S,E]\s?/));
        dms.writeData(modificators[0] * values[0], +values[1], +(+values[2]).toFixed(precDms),
            modificators[1] * values[3], +values[4], +(+values[5]).toFixed(precDms), modificators[2]);
        fromDms();
    }
    else if(str.indexOf("'") != -1)
    {
        modificators = checkNwse(str);
        values = clearEmptyStrings(str.split(/[°,',N,W,S,E]\s?/));
        dm.writeData(modificators[0] * values[0], +(+values[1]).toFixed(precDm),
            modificators[0] * values[2], +(+values[3]).toFixed(precDm), modificators[2]);
        fromDm();
    }
    else
    {
        values = clearEmptyStrings(str.split(/[°]?\s/));
        d.writeData((+values[0]).toFixed(precD), (+values[1]).toFixed(precD), false);
        fromD("latitude");
    }
}

function checkNwse(str)
{
    var modificators = [1, 1, false];

    (str.match(/[N,W,S,E]{1}/))
        ? modificators[2] = true
        : modificators[2] = false;

    if(str.match(/[S]{1}/))
    {
        modificators[0] = -1;
    }

    if(str.match(/[W]{1}/))
    {
        modificators[1] = -1;
    }

    return modificators;
}

function clearEmptyStrings(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        arr[i] == ""
            ? arr.splice(i,1)
            : console.log("Nothing to do");
    }
    return arr;
}
function instruction()
{
    var x = document.getElementById("inst");
    (x.style.display == 'none')
        ? x.style.display = 'block'
        : x.style.display = 'none';
}
