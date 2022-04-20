function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};
let colorcombo = getRandomInt(1,4);
switch(colorcombo) {
    case 1:
        document.querySelector('html').style='background-color: #994DFA';
        document.querySelector('body').style='color: #F7BF48';
        break;
    case 2:
        document.querySelector('html').style='background-color: #58FAC8';
        document.querySelector('body').style='color: #F74DA2';
        break;
    case 3:
        document.querySelector('html').style='background-color: #FAEA43';
        document.querySelector('body').style='color: #3983F7';
        break;
    case 4:
        document.querySelector('html').style='background-color: #FA6A46';
        document.querySelector('body').style='color: #3FF73B';
        break;
};