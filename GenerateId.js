function getPrefixNullString(number, prefixCount) {
    let prefixedResult =  "";
    const numberNull = prefixCount - String(number).length;

    for (let count = 0; count < numberNull; ++count)
        prefixedResult += "0";

    return prefixedResult + String(number);
}


function generateIDFromStringList(stringList, prefixCount=3) {
    let serielIndex = 0;
    const date = new Date();
    const month = String(date.getMonth());
    const year = String(date.getFullYear());

    return stringList.map((item) => {
        let uniqueID = item[0].toUpperCase();
        uniqueID += month.length == 1 ? "0" + month + year : month + year;

        serielIndex++;
        return uniqueID + getPrefixNullString(serielIndex,prefixCount);
    })
}

