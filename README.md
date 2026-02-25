# MAX Mini App

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


