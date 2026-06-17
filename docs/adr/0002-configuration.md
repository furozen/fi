# ADR-0002 Configuration

## Status

Accepted

## Context

Нужно конфигурировать проложение по осям
цель

## Decision

Используес конфигурации через запятую.
```Configurations can be applied to any Angular CLI builder. Multiple configurations can be specified with a comma separator. The configurations are applied in order, with conflicting options using the value from the last configuration.```

как например: 

```nx serve operator \
  --configuration=development,whitestar,mock-api```

## Consequences

Плюсы:

- нет комбинаторики
- сколько угодно осей
- оси независимы от друг друга

Минусы:

- пока не видно
