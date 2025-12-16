/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        cmpt_border: "hsl(var(--cmpt_border))",
        cmpt_input: "hsl(var(--cmpt_input))",
        cmpt_ring: "hsl(var(--cmpt_ring))",
        cmpt_background: "hsl(var(--cmpt_background))",
        cmpt_foreground: "hsl(var(--cmpt_foreground))",

        cmpt_primary: {
          DEFAULT: "hsl(var(--cmpt_primary))",
          foreground: "hsl(var(--cmpt_primary-foreground))",
        },

        cmpt_secondary: {
          DEFAULT: "hsl(var(--cmpt_secondary))",
          foreground: "hsl(var(--cmpt_secondary-foreground))",
        },

        cmpt_destructive: {
          DEFAULT: "hsl(var(--cmpt_destructive))",
          foreground: "hsl(var(--cmpt_destructive-foreground))",
        },

        cmpt_muted: {
          DEFAULT: "hsl(var(--cmpt_muted))",
          foreground: "hsl(var(--cmpt_muted-foreground))",
        },

        cmpt_accent: {
          DEFAULT: "hsl(var(--cmpt_accent))",
          foreground: "hsl(var(--cmpt_accent-foreground))",
        },

        cmpt_popover: {
          DEFAULT: "hsl(var(--cmpt_popover))",
          foreground: "hsl(var(--cmpt_popover-foreground))",
        },

        cmpt_card: {
          DEFAULT: "hsl(var(--cmpt_card))",
          foreground: "hsl(var(--cmpt_card-foreground))",
        },

        cmpt_success: "hsl(var(--cmpt_success))",
        "cmpt_surface-elevated": "hsl(var(--cmpt_surface-elevated))",

        cmpt_sidebar: {
          DEFAULT: "hsl(var(--cmpt_sidebar-background))",
          foreground: "hsl(var(--cmpt_sidebar-foreground))",
          primary: "hsl(var(--cmpt_sidebar-primary))",
          "primary-foreground": "hsl(var(--cmpt_sidebar-primary-foreground))",
          accent: "hsl(var(--cmpt_sidebar-accent))",
          "accent-foreground": "hsl(var(--cmpt_sidebar-accent-foreground))",
          border: "hsl(var(--cmpt_sidebar-border))",
          ring: "hsl(var(--cmpt_sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        cmpt_lg: "var(--cmpt_radius)",
        cmpt_md: "calc(var(--cmpt_radius) - 2px)",
        cmpt_sm: "calc(var(--cmpt_radius) - 4px)",
      },
      keyframes: {
        'zoom-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        'zoom-in': 'zoom-in 0.8s ease-out forwards',
        'zoom-in-delay': 'zoom-in 0.8s ease-out 0.3s forwards', // delayed animation for list
        'zoom-in-delay2': 'zoom-in 0.8s ease-out 0.6s forwards', // delayed animation for button
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sora: "var(--font-sora)",
      },
    },
  },
  plugins: [],
};