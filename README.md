# Homework 2

Задачи:

1. Написать компонент `App`, который содержит `input`, `div.App`, а так же список компонент `NewsPost`;
done!
2. Компонент `App` должен иметь метод `handleChange` который реагирует на `onChange` компонента `input`;
3. Компонент `App` должен иметь метод `handleKeyDown` который реагирует на `onKeyDown` компонента `input`;
4. `state` компонента `App` должен содержать список постов в `news` и строку `newsInput`, в которую попадают значения из `input`;
5. Компонент `App` должен создавать список компонент `NewsPost`;
6. Написать компонент `NewsPost`, который содержит `input`, и параграф `p`, в котором будет текст новости, которую передаёт компонент `App` через `props.text`;
7. Компонент `NewsPost` должен содержать методы `handleChange`, `handleKeyDown` и `handleDelete`;
8. Компонент `NewsPost` должен создавать компоненты `Comments` на каждый новый комментарий созданный через инпут, по аналогии с `App`;
9. Компонент `Comment` должен получать уникальный `key` при создании;
10. Компонент `Comment` должен содержать `p` с текстом переданным из компоненты `NewsPost`;
11. Компонент `Comment` должен содержать метод `handleDelete`, который вызывается при клике на `span`;
12. Компонент `Comment` должен содержать `span.delete`, при клике на который должен вызываться метод `onDelete` который передают из `props`. `onDelete` должен получать `id` комментария;
13. Все тесты должны работать.
