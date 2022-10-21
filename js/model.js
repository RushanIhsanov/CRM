// Создаем массив сданными
// Загружаем данные из localstorage
let requests = loadFromLocalStorage();

// Функция которая пушит пришедший объект из вью (имя, телефон, имэйл и продукт)

// Подсмотрел у тебя в скринкасте. Добавил класс Request
class Request {
    constructor(id, name, phone, email, product) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product;
        this.date = new Date().toISOString();
        this.status = 'new';
    }
}

const products = {
    'course-html': 'Курс по верстке',
    'course-js': 'Курс по JavaScript',
    'course-vue': 'Курс по VUE JS',
    'course-php': 'Курс по PHP',
    'course-wordpress': 'Курс по WordPress',
};

const statuses = {
    new: 'Новая',
    inwork: 'В работе',
    complete: 'Завершена',
};

const filter = loadFilter();

function loadFilter() {
    let filter = {
        products: 'all',
        status: 'all',
    };

    if (localStorage.getItem('filter')) {
        filter = JSON.parse(localStorage.getItem('filter'));
    }

    return filter;
}

function changeFilter(props, value) {
    filter[props] = value;
    localStorage.setItem('filter', JSON.stringify(filter));
    return filter;
}

function filterRequests(filter) {
    let filteredRequests;
    // Фильтрация по продукту
    if (filter.products !== 'all') {
        filteredRequests = requests.filter((request) => {
            return request.product == filter.products;
        });
    } else {
        filteredRequests = [...requests];
    }

    // По статусу

    if (filter.status !== 'all') {
        filteredRequests = filteredRequests.filter((request) => {
            return request.status == filter.status;
        });
    }

    return prepareRequests(filteredRequests);
}

function getRequests() {
    return filterRequests(filter);
}

function countViewRequests() {
    const newRequests = requests.filter((request) => request.status === 'new');
    return newRequests.length;
}

function addRequests(formData) {
    // Генерируем id
    const id = requests.length > 0 ? requests[requests.length - 1]['id'] + 1 : 0;

    const request = new Request(id, formData.name, formData.phone, formData.email, formData.product);
    requests.push(request);
    saveRequestToLocalStorage();
    console.log(requests);
}

function loadFromLocalStorage() {
    const data = localStorage.getItem('requests');
    if (data) return JSON.parse(data);
    return [];
}

function saveRequestToLocalStorage() {
    localStorage.setItem('requests', JSON.stringify(requests));
}

function prepareRequests(requests) {
    return requests.map((item) => {
        return {
            ...item,
            dateToDisplay: new Date(item.date).toLocaleDateString(),
            productName: products[item.product],
            statusName: statuses[item.status],
        };
    });
}

function getRequestById(id) {
    const request = requests.find((request) => request.id == id);
    request.dateDate = new Date(request.date).toLocaleDateString();
    request.dateTime = new Date(request.date).toLocaleTimeString();
    return request;
}

function updateRequest(formData) {
    const request = getRequestById(formData.get('id'));

    request.name = formData.get('name');
    request.email = formData.get('email');
    request.phone = formData.get('phone');
    request.product = formData.get('product');
    request.status = formData.get('status');

    saveRequestToLocalStorage();
}

function getFilter() {
    return { ...filter };
}

export { addRequests, requests, getRequests, getRequestById, updateRequest, changeFilter, filterRequests, countViewRequests, getFilter };
