export function navTo(where){
    sessionStorage.setItem('page', where)
    window.location.reload()
}