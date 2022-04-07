// code your solution here
function superbowlWin(record) {
    const yearRecord = record.find(isWinningYear);
    return yearRecord === undefined? undefined: yearRecord.year;
}

function isWinningYear(element) {
    return element.result === `W`;
}