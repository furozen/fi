# ADR-0001 White Label Strategy

## Status

Accepted

## Context

Необходимо поддерживать несколько партнеров
(WhiteStar, Acme, ...)

## Decision

Использовать build-time branding через Nx file replacements.

Подменяются:

- brands/branding-config.ts
- brands/providers.ts
- brands/theme.scss

## Consequences

Плюсы:

- Нет runtime-переключения бренда
- Простая сборка
- Безопасное разделение окружений

Минусы:

- Несколько file replacements
- Новый бренд требует конфигурации сборки
