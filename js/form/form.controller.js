import getRandomData from './form.test-data.js';
import * as view from './form.view.js';
import * as model from './../model.js';

init(); // Вызываем функцию инит чтобы отобразить данные в форме заявки

function init() {
    view.insertFormData(getRandomData()); // функция вставляет данные в разметку на странцице
    addEventListeners();
}

function addEventListeners() {
    view.elements.form.addEventListener('submit', addRequest);
}

function addRequest(event) {
    event.preventDefault(); // отменяем стандартную отправку формы в браузере
    const formData = view.getFormData(); // получили данные из формы и записали в переменную
    model.addRequests(formData); // в модели есть функция которая пушит эти данные в виде объекта в массив

    view.insertFormData(getRandomData()); // тестовые данные
}
