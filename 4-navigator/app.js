// Точка назначения
let addressLat = 10; 
let addressLong = 20;

// Текущее положение
let positionLat = 12;
let positionLong = 25;

// Разница по координатам
let deltaX = addressLong - positionLong;
let deltaY = addressLat - positionLat;

// Расстояние по теореме Пифагора
let distance = (deltaX * deltaX + deltaY * deltaY) ** 0.5;

console.log("Расстояние до точки назначения: " + distance);
