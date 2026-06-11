export const cardVariants = {
  default: {
    background:
      "var(--color-surface)",

    border:
      "1px solid transparent",
  },

  subtle: {
    background:
      "color-mix(in srgb, var(--color-surface) 92%, var(--color-background))",

    border:
      "1px solid color-mix(in srgb, var(--color-text-muted) 12%, transparent)",
  },

  outlined: {
    background:
      "var(--color-surface)",

    border:
      "1px solid color-mix(in srgb, var(--color-text-muted) 18%, transparent)",
  },

  secondary: {
    background:
      "var(--color-surface-secondary)",

    border:
      "1px solid transparent",
  },

  elevated: {
    background:
      "var(--color-surface)",

    border:
      "1px solid transparent",

    boxShadow: `
      0 8px 24px
      color-mix(
        in srgb,
        var(--color-background) 20%,
        transparent
      )
    `,
  },

  floating: {
    background:
      "var(--color-surface)",

    border:
      "1px solid color-mix(in srgb, var(--color-text-muted) 10%, transparent)",

    boxShadow: `
      0 4px 12px rgba(0,0,0,.04),
      0 16px 40px rgba(0,0,0,.08)
    `,
  },

  glass: {
    background:
      "color-mix(in srgb, var(--color-surface) 70%, transparent)",

    border:
      "1px solid color-mix(in srgb, var(--color-text-primary) 8%, transparent)",

    backdropFilter:
      "blur(20px)",

    WebkitBackdropFilter:
      "blur(20px)",
  },

  gradient: {
    background: `
      linear-gradient(
        180deg,
        color-mix(
          in srgb,
          var(--color-primary) 8%,
          var(--color-surface)
        ) 0%,
        var(--color-surface) 100%
      )
    `,

    border:
      "1px solid color-mix(in srgb, var(--color-primary) 15%, transparent)",
  },

  accent: {
    background: `
      linear-gradient(
        180deg,
        color-mix(
          in srgb,
          var(--color-accent) 12%,
          var(--color-surface)
        ),
        var(--color-surface)
      )
    `,

    border:
      "1px solid color-mix(in srgb, var(--color-accent) 18%, transparent)",
  },
} as const;