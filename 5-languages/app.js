const userLanguage = prompt("Введите язык: en/ru/de/es");

switch (userLanguage) {
    case 'en':
        console.log("Hello!")      
        break;
    case 'de':
        console.log("Gutten tag!")      
        break;
    case 'ru':
        console.log("Привет!")      
        break;
    case 'es':
        console.log("Hola!")      
        break;
    default:
        console.log("Язык не распознан!")
        break;
}
