# Тестовое задание для собеседования
Условия задания:
> Создать Vue.js CRUD application с хранением данных в local storage.

  Приложение состоит из двух страниц.

  Страница 1.
  На первой странице отображается таблица сохраненных данных.
  В таблице поля: "name" "surname" "phone" "email" и кнопки "delete" "edit"

  Над таблицей кнопка "Add user"

  Кнопки "Add user" и "edit" ведут на страницу №2

  Страница 2.
  На странице можно добавлять или редактировать уже существующие записи. (поля "name" "surname" "phone" "email")
  При редактировании в полях должны загружаться соответствующие данные.

  Также на этой странице можно импортировать данные из JSON массива.
  Пользователь вводит в  отдельное поле "Import JSON" JSON массив, приложение его парсит и сохраняет.

  Все данные таблицы должны храниться в локальном хранилище.

  По выполнению задания загрузите его на github и отправьте ссылку на репозиторий.

Разбор условий:
[ ] Приложение на 2 страницы:
    1. базисная таблица:
    - Кнопка для добавления пользователя
    - Поля таблицы
        "name" "surname" "phone" "email"
        кнопки "delete" "edit"
    Таблица редактирования:
        Форма для редактирования текущей/добавления новой записи
        Форма для ввода json массива с данными, с возможностью парсинга

[ ] Сохранение данных в local storage и загрузка данных из хранилища