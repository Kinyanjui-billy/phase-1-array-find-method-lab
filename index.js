function isWin(elem, value, record) {
    console.log(elem['result']);
    return (elem['result'] === 'w');
}

function superbowlWin(record){
    const winYear = record.find(elem => elem['result'] === 'W');
    return winYear ? winYear['year'] : undefined;
}