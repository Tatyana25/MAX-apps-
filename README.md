# MAX Mini App


Mini App для MAX на React + TypeScript + Vite.
Подключены MAX UI (`@maxhub/max-ui`) и MAX Bridge для чтения контекста запуска.
=======

=======
<

Mini App для MAX на React + TypeScript + Vite.
На этом этапе подключён MAX UI (`@maxhub/max-ui`) и базовый экран на его компонентах.


## Запуск

```bash
npm ci
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```


## Открытие в MAX

Формат ссылки:

```text
https://max.ru/<BOT_NAME>?startapp=<PAYLOAD>
```

Пример без payload:

```text
https://max.ru/<BOT_NAME>
```

Примечание: `PAYLOAD` (параметр `startapp`) — до 512 символов.

## MAX Bridge

Подключаем скрипт `https://st.max.ru/js/max-web-app.js`.
Из `window.WebApp` читаем:
- `initDataUnsafe.start_param`
- `platform`
- `version`
=======
=======

=======

Базовый репозиторий Mini App для MAX.

## PR0: Repo hygiene

На этом шаге настроена базовая гигиена репозитория:
- добавлен `.gitignore` для Node/TypeScript-проекта;
- зафиксирована стартовая структура для следующих PR.

## Контекст проекта

- UI: `@maxhub/max-ui` (`MaxUI` provider + `styles.css`)
- Bridge: `https://st.max.ru/js/max-web-app.js` и `window.WebApp`
- Деплой: GitHub Pages (только HTTPS)

## Дальше

Следующим шагом можно сделать минимальный каркас приложения (TS strict + smoke build).




