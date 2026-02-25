# MAX Mini App

Mini App для MAX на React + TypeScript + Vite.
Подключены MAX UI (`@maxhub/max-ui`) и MAX Bridge для чтения контекста запуска.

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
