class testForm {
    constructor(name, phone, email, product) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product;
    }
}

const testData = [
    new testForm('Алексеев Вадим', '+7 (495) 00-43-817', 'o@outlook.com', 'course-html'),
    new testForm('Попова Алина', '+7 (495) 14-13-676', 'hr6zdl@yandex.ru', 'course-js'),
    new testForm('Зайцев Артём', '+7 (495) 46-08-984', 'kaft93x@outlook.com', 'course-vue'),
    new testForm('Ковалева Софья', '+7 (495) 97-17-901', 'dcu@yandex.ru', 'course-php'),
    new testForm('Никитина Анна', '+7 (495) 15-39-605', '19dn@outlook.com', 'course-wordpress'),
    new testForm('Воронина Ярослава', '+7 (495) 47-11-577', 'pa5h@mail.ru', 'course-html'),
    new testForm('Корчагин Илья', '+7 (495) 38-72-715', '281av0@gmail.com', 'course-js'),
    new testForm('Копылов Владимир', '+7 (495) 97-39-849', '8edmfh@outlook.com', 'course-vue'),
    new testForm('Селезнева Ульяна', '+7 (495) 03-96-454', 'sfn13i@mail.ru', 'course-php'),
];

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

export default function getRandomData() {
    const random = getRandomIndex(testData.length);
    const randomItem = testData[random];
    return randomItem;
}
