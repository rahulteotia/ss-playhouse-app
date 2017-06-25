export function retrieveErrorMessages(errorFieldMap, errorResponse, errorMap) {
    console.log('Error Response is: ', errorResponse);

    const messages = errorResponse.errors;
    errorMap.genericError = errorResponse.message;
    for (let field in errorFieldMap) {
        const errorVar = errorFieldMap[field];
        const errorMessage = messages[field];
        errorMap[errorVar] = errorMessage;
    }

    return errorMap;
}

let lastId = 0;
export function uniqueId(prefix) {
    lastId++;
    return prefix + lastId;
}


export function getMinutes(fromDate, toDate) {

    var diffMs = (toDate - fromDate); // milliseconds between from & to
    var seconds = diffMs / 1000;
    var minutes = seconds / 60;
    return minutes;
}

export function isUrlValid(url) {
    var regex = /(\S+\.[^/\s]+(\/\S+|\/|))/g;
    return regex.test(url);
}

export function formatDateString(dateString) {
    if (dateString == undefined || dateString == null) {
        return null;
    }
    let date = new Date(dateString);
    return formatDate(date);
}

export function formatDate(date) {
    if (date == null) {
        return null;
    }
    var currentDate = date.getDate();
    var currentYear = date.getFullYear();
    var month = date.toLocaleString('en-us', {month: 'short'})
    var dateString = currentDate + ' ' + month + ' ' + currentYear;
    return dateString;
}

export function getDateFromDateString(dateString) {
    var date = convertDateStringtoDate(dateString);
    var currentDate = date.getDate() - 1;
    return currentDate;
}

export function getHourFromDateString(dateString) {
    var date = convertDateStringtoDate(dateString);
    var currentHour = date.getHours();
    return currentHour;
}

export function convertDateStringtoDate(dateString) {
    if (dateString == undefined || dateString == null) {
        return null;
    }
    let date = new Date(dateString);
    return date;
}

export function getDateInSqlFormat(date) {
    var dd = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var monthFormatted = mm < 10 ? '0' + mm : mm;
    var yyyy = date.getFullYear();
    return yyyy + '-' + monthFormatted + '-' + dd;
}
