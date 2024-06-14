export function formatTimestampToInputDate(timestamp){

    const collator = new Intl.DateTimeFormat("en-CA", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }); 
    // seteo el formato de fecha para que coincida con el input date

    const offset = new Date().getTimezoneOffset() * 60 * 1000;
    timestamp += offset;

    return collator.format(timestamp)
}

export function formatTimestampToUserDate(timestamp){
    const dateFormat = new Intl.DateTimeFormat("es-AR", {
        year:"numeric",
        month: "2-digit",
        day: "2-digit"
    })

    // seteo el formato de fecha para que coincida con el user date
    const offset = new Date().getTimezoneOffset() * 60 * 1000;
    timestamp += offset;
    const date = dateFormat.format(timestamp)

    return date
}