// Находим элементы на странице
const elements = {
    form: document.querySelector('#form'),
    name: document.querySelector('#name'),
    phone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    product: document.querySelector('#product'),
};

// Функция вставляет данные в форму. Данные приходят из случайного массива из тестовых данных
function insertFormData(data) {
    elements.name.value = data.name; // Приходит имя
    elements.phone.value = data.phone; // Приходит телефон
    elements.email.value = data.email; // Приходит имэйл
    elements.product.value = data.product; // приходит продукт
}

// Функция получает данные из формы и возвращает в виде объекта.
function getFormData() {
    const name = elements.name.value;
    const phone = elements.phone.value;
    const email = elements.email.value;
    const product = elements.product.value;

    return {
        name,
        phone,
        email,
        product,
    };
}

export { elements, insertFormData, getFormData };
