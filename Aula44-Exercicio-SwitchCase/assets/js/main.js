function getWeekDay(oDate) {
    const day = oDate.getDay();
    switch(day) {
    case 0: return 'Domingo';
    case 1: return 'Segunda-feira';
    case 2: return 'Terça-feira';
    case 3: return 'Quarta-feira';
    case 4: return 'Quinta-feira';
    case 5: return 'Sexta-feira';
    case 6: return 'Sábado';
    default: return '!Dia de semana desconhecido: (' + day + ')!';
    }
}

function getMonth(oDate) {
    const month = oDate.getMonth();
    switch (month) {
    case 0: return 'janeiro';
    case 1: return 'fevereiro';
    case 2: return 'março';
    case 3: return 'abril';
    case 4: return 'maio';
    case 5: return 'junho';
    case 6: return 'julho';
    case 7: return 'agosto';
    case 8: return 'setembro';
    case 9: return 'outubro';
    case 10: return 'novembro';
    case 11: return 'dezembro';
    default: return `!Mês desconhecido: (${month})`;
    }
}

function getTime(oDate) {
    const hour = oDate.getHours();
    const min = oDate.getMinutes();
    return `${addZerosToLeft(hour)}:${addZerosToLeft(min)}`;
}

function addZerosToLeft(num) {
    if (num < 10) return `0${num}`;
    return num;
}

function getPTFormattedDate(oDate) {
    const weekDay = getWeekDay(oDate);
    const monthDay = oDate.getDate();
    const month = getMonth(oDate);
    const year = oDate.getFullYear();
    const time = getTime(oDate);
    return `${weekDay}, ${monthDay} de ${month} de ${year} ${time}`;
}

const oDate = new Date();
console.log(getPTFormattedDate(oDate));
const textLocal = document.querySelector('.container h1');
textLocal.innerHTML = getPTFormattedDate(oDate);

/*
const h1 = documetn.querySelector('.container h1');
const date = new Date();
const option = {
    dateStyle: 'full',
    timeStyle: 'short'
}
h1.innerHTML = date.toLocaleDateString('pt-BR', option);
*/

/*
const h1 = documetn.querySelector('.container h1');
const date = new Date();
const option = {
    dateStyle: 'full',
    timeStyle: 'short'
}
h1.innerHTML = date.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});
*/