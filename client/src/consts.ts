export const apiUrl = 'http://185.189.167.103:5000/api'

export function getDate() {
    var date = new Date()
    var mm = date.getMonth() + 1
    var dd = date.getDate()
      
   return [
            
            (dd>9 ? '' : '0') + dd,
            '.',
            (mm>9 ? '' : '0') + mm,
            '.',
            date.getFullYear()
           ].join('')
  };

// массив категорий трат должен был быть на сервере, но я не успел :(

export const spendCategories = [
    {
        name: 'Продукты',
        color: '#c2c51f',
    },
    {
        name: 'Книги',
        color: '#1b6da3',
    },
    {
        name: 'Транспорт',
        color: '#34138f',
    },
    {
        name: 'Обучение',
        color: '#14a82d',
    },
    {
        name: 'Рестораны',
        color: '#b31dab',
    },
    {
        name: 'Одежда',
        color: '#cc5e1e',
    },
    {
        name: 'Семья',
        color: '#c71616',
    },
    {
        name: 'Прочее',
        color: '#94948d',
    },
]

export const earnsCategories = [
    {
        name: 'Работа',
        color: '#94948d',
    },
    {
        name: 'Инвестиции',
        color: '#c71616',
    },
    {
        name: 'Бизнес',
        color: '#14a82d',
    },
    {
        name: 'Бабушка подарила',
        color: '#1b6da3',
    },
    {
        name: 'Нашёл',
        color: '#94948d',
    },
]