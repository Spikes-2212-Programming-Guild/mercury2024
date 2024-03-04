export function getCookieByEntry(entry) {
    let cookieString = document.cookie.split('entry.' + entry + '=')[1]
    // console.log(cookieString)

    if (cookieString === undefined) {
        return ''
    }

    cookieString = cookieString.split('; ')[0]
    // console.log('what ' + cookieString)

    if (cookieString === undefined) {
        return ''
    }

    return decodeURIComponent(cookieString)
}

export function getCookieByName(Name) {
    let cookieString = document.cookie.split(Name)[1]
    // console.log(cookieString)

    if (cookieString === undefined) {
        return ''
    }

    cookieString = cookieString.split('; ')[0]
    // console.log('what ' + cookieString)

    if (cookieString === undefined) {
        return ''
    }

    return decodeURIComponent(cookieString)
}

export function createCookie(name, value) {
    // let expires = "";
    // const days = 69
    //
    // let date = new Date();
    // date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    // expires = "; expires=" + date.toUTCString();
    //
    // // document.cookie = name + "=" + (value || "") + expires + "; SameSite=none; secure=true";

    document.cookie = name + "=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; SameSite=Lax";

    // console.log(name + "=" + value)
    // console.log(document.cookie)

}

export function deleteAllCookies() {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf('=');
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
    }
}
