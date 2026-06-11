export const buttonVariants = {
  primary: {
    background:
      "var(--color-primary)",

    color:
      "#ffffff",
  },

  secondary: {
    background:
      "var(--color-secondary)",

    color:
      "#ffffff",
  },

  accent: {
    background:
      "var(--color-accent)",

    color:
      "#ffffff",
  },

  subtle: {
    background:
      "var(--color-surface-secondary)",

    color:
      "var(--color-text-primary)",
  },

  ghost: {
    background:
      "transparent",

    color:
      "var(--color-text-primary)",
  },

  outline: {
    background:
      "transparent",

    color:
      "var(--color-text-primary)",

    border:
      "1px solid color-mix(in srgb, var(--color-text-muted) 18%, transparent)",
  },

  glass: {
    background:
      "color-mix(in srgb, var(--color-surface) 70%, transparent)",

    color:
      "var(--color-text-primary)",

    border:
      "1px solid color-mix(in srgb, var(--color-text-primary) 8%, transparent)",

    backdropFilter:
      "blur(16px)",

    WebkitBackdropFilter:
      "blur(16px)",
  },

  gradient: {
    background: `
      linear-gradient(
        135deg,
        var(--color-primary),
        var(--color-accent)
      )
    `,

    color:
      "#ffffff",
  },
} as const;