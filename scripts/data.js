const list = [
    {item: "Активироване вугілля", group: "Аптечка"},
    {item: "Алкоголь", group: "Продукти"},
    {item: "Анальгін", group: "Аптечка"},
    {item: "Антибактеріальний крем", group: "Аптечка"},
    {item: "Антипреспірант", group: "Гігієна"},
    {item: "Аспірин", group: "Аптечка"},
    {item: "Батарейки / аккумулятори", group: "Спорядження"},
    {item: "Баул", group: "Спорядження"},
    {item: "Бахіли", group: "Одяг"},
    {item: "Бинт", group: "Аптечка"},
    {item: "Бінокль", group: "Спорядження"},
    {item: "Блокнот", group: "Спорядження"},
    {item: "Бритва", group: "Гігієна"},
    {item: "Булавки", group: "Інструменти"},
    {item: "Валідол", group: "Аптечка"},
    {item: "Вата", group: "Аптечка"},
    {item: "Викрутка", group: "Інструменти"},
    {item: "Вівсянка", group: "Продукти"},
    {item: "Вітровка", group: "Одяг"},
    {item: "Вологі серветки", group: "Гігієна"},
    {item: "Вугілля", group: "Вогонь"},
    {item: "Гігієнічна помада", group: "Гігієна"},
    {item: "Голка", group: "Інструменти"},
    {item: "Горілка + газовый баллон", group: "Вогонь"},
    {item: "Горіхи", group: "Продукти"},
    {item: "Гребінець", group: "Гігієна"},
    {item: "Гречка", group: "Продукти"},
    {item: "Гроші", group: "Спорядження"},
    {item: "Джгут", group: "Аптечка"},
    {item: "Дощовик", group: "Одяг"},
    {item: "Еластичний бинт", group: "Аптечка"},
    {item: "Жуйка", group: "Гігієна"},
    {item: "Запальничка / сірники", group: "Вогонь"},
    {item: "Заморозка", group: "Аптечка"},
    {item: "Запасна камера", group: "Інструменти"},
    {item: "Запасний тросик", group: "Інструменти"},
    {item: "Зарядка", group: "Спорядження"},
    {item: "Кабель до телефона", group: "Спорядження"},
    {item: "Засіб від діареї", group: "Аптечка"},
    {item: "Зеркальце", group: "Гігієна"},
    {item: "Зубна нитка", group: "Гігієна"},
    {item: "Зубна паста та щітка", group: "Гігієна"},
    {item: "Зубочистки", group: "Гігієна"},
    {item: "Йод", group: "Аптечка"},
    {item: "Ібупрофен", group: "Аптечка"},
    {item: "Кава", group: "Продукти"},
    {item: "Казанок", group: "Вогонь"},
    {item: "Каремат", group: "Спорядження"},
    {item: "Карта", group: "Спорядження"},
    {item: "Квитки", group: "Спорядження"},
    {item: "Кепка", group: "Одяг"},
    {item: "Кипятильник", group: "Спорядження"},
    {item: "Клей", group: "Інструменти"},
    {item: "Ковбаса", group: "Продукти"},
    {item: "Компас", group: "Спорядження"},
    {item: "Консерви (мясі, рибні, сгущене молоко)", group: "Продукти"},
    {item: "Крекери", group: "Продукти"},
    {item: "Крем від комарів", group: "Аптечка"},
    {item: "Крем від сонця", group: "Аптечка"},
    {item: "Крем зірочка", group: "Аптечка"},
    {item: "Кроссовки", group: "Одяг"},
    {item: "Кружка", group: "Вогонь"},
    {item: "Курточка", group: "Одяг"},
    {item: "Латки для камери та клей", group: "Інструменти"},
    {item: "Лейкопластир", group: "Аптечка"},
    {item: "Ліхтарик", group: "Спорядження"},
    {item: "Ложка", group: "Вогонь"},
    {item: "Ложка з довгою ручкою", group: "Вогонь"},
    {item: "Макарони", group: "Продукти"},
    {item: "Маленькі ножниці", group: "Аптечка"},
    {item: "Мангар та шампури", group: "Вогонь"},
    {item: "Мило", group: "Гігієна"},
    {item: "Миска", group: "Вогонь"},
    {item: "Моток дроту", group: "Інструменти"},
    {item: "Наждачка", group: "Інструменти"},
    {item: "Насос", group: "Інструменти"},
    {item: "Нижня білизна", group: "Одяг"},
    {item: "Нитки", group: "Інструменти"},
    {item: "Ніж", group: "Інструменти"},
    {item: "Носки", group: "Одяг"},
    {item: "Ношпа", group: "Аптечка"},
    {item: "Пакети для сміття", group: "Спорядження"},
    {item: "Палатка", group: "Спорядження"},
    {item: "Парацетамол", group: "Аптечка"},
    {item: "Паспорт", group: "Спорядження"},
    {item: "Перекись водню", group: "Аптечка"},
    {item: "Парасолька", group: "Спорядження"},
    {item: "Пилка / сокира", group: "Інструменти"},
    {item: "Пінцет", group: "Аптечка"},
    {item: "Плавки", group: "Одяг"},
    {item: "Пласкогубці", group: "Інструменти"},
    {item: "Пластикова пляшка / фляга ", group: "Продукти"},
    {item: "Поліетиленова плівка", group: "Спорядження"},
    {item: "Презирвативи", group: "Аптечка"},
    {item: "Пшоно", group: "Продукти"},
    {item: "Ремонтні ключі", group: "Інструменти"},
    {item: "Робочі рукавиці", group: "Одяг"},
    {item: "Розвідний ключ", group: "Інструменти"},
    {item: "Рукавиці", group: "Одяг"},
    {item: "Ручка", group: "Спорядження"},
    {item: "Рушник", group: "Гігієна"},
    {item: "Рюкзак", group: "Спорядження"},
    {item: "Сало", group: "Продукти"},
    {item: "Селфі палка", group: "Спорядження"},
    {item: "Сведр", group: "Одяг"},
    {item: "Сідушка", group: "Спорядження"},
    {item: "Сіль", group: "Продукти"},
    {item: "Скотч / ізолента", group: "Інструменти"},
    {item: "Сонячні окуляри", group: "Одяг"},
    {item: "Соус / кетчуп / гірчиця", group: "Продукти"},
    {item: "Спальник", group: "Спорядження"},
    {item: "Спортивні штани", group: "Одяг"},
    {item: "Стакани", group: "Вогонь"},
    {item: "Сухий спирт / бумага / оргскло / свічка", group: "Вогонь"},
    {item: "Сухофрукти", group: "Продукти"},
    {item: "Сушені овочі", group: "Продукти"},
    {item: "Тапочки", group: "Одяг"},
    {item: "Телефон", group: "Спорядження"},
    {item: "Тент", group: "Спорядження"},
    {item: "Термобілизна", group: "Одяг"},
    {item: "Термос", group: "Продукти"},
    {item: "Треккінгові палки", group: "Спорядження"},
    {item: "Тросик для вогнища", group: "Вогонь"},
    {item: "Туалетна бумага", group: "Гігієна"},
    {item: "Тушонка", group: "Продукти"},
    {item: "Фотоаппарат", group: "Спорядження"},
    {item: "Футболка", group: "Одяг"},
    {item: "Хліб", group: "Продукти"},
    {item: "Цитрамон", group: "Аптечка"},
    {item: "Цукор", group: "Продукти"},
    {item: "Чай", group: "Продукти"},
    {item: "Черевики", group: "Одяг"},
    {item: "Чохол на велосипед", group: "Одяг"},
    {item: "Чохол на рюкзак", group: "Одяг"},
    {item: "Шапка", group: "Одяг"},
    {item: "Шерстяні носки", group: "Одяг"},
    {item: "Шестигранники", group: "Інструменти"},
    {item: "Шнурок звичайний", group: "Інструменти"},
    {item: "Шоколадка", group: "Продукти"},
    {item: "Штани", group: "Одяг"},
    {item: "Хороший настрій", group: "Спорядження"},
];
