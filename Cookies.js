function setCookie(cookieName, cookieVal, expDate)
{
    if(arguments[2])
    {
        document.cookie = cookieName+"="+cookieVal+";"+"expires="+expDate.toUTCString();    
    }
    else{
        document.cookie = cookieName+"="+cookieVal;
    }
}

/*function getCookie(cookieName)
{
    var start = document.cookie.search(cookieName+"=");
    var end = document.cookie.search(";",start);
    if(end == -1) end = document.cookie.length;
    if(start == -1) return "Doesn't Exist";
    var sub = document.cookie.substring(start,end);
    return sub.split("=")[1];
}*/

function getCookie(cookieName)
{
    var clst = allCookieList();
    return clst[cookieName];
}
function deleteCookie(cookieName){
    var newDate = new Date();
    newDate.setTime(newDate.getTime() - 86400000);
    document.cookie = cookieName+"=;expires="+ newDate.toUTCString();

}

function allCookieList(){
    var cookieList = [];
    var splt = decodeURI(document.cookie);
    splt = splt.split(";");
    
    
    for(var i=0;i<splt.length;i++)
    {
        cookieList[splt[i].split("=")[0].trim()] = splt[i].split("=")[1].trim();
    }
    return cookieList;
}

function hasCookie(cookieName)
{
    var cklst = allCookieList();
    for(var c in cklst)
    {
        if(c==cookieName) return true;
    }
    
    return false;
}
