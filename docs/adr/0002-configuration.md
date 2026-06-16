# ADR-0002 Configuration

## Status

Accepted

## Context

Нужно конфигурировать проложение по осям
цель

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
