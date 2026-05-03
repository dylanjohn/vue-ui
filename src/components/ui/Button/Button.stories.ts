import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

const meta = {
  title: 'Design System/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost'],
      description: 'Visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button shows a loading spinner',
    },
    default: {
      control: 'text',
      description: 'Button label (slot content)',
    },
  },
  args: {
    default: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
  parameters: {
    docs: {
      description: {
        component:
          'A versatile button component supporting multiple variants, sizes, and states. Use `primary` for main actions, `secondary` for less prominent actions, `danger` for destructive operations, and `ghost` for minimal UI.',
      },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// ─── Core Variants ───────────────────────────────────────────

export const Primary: Story = {
  args: {
    variant: 'primary',
    default: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    default: 'Secondary',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    default: 'Delete',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    default: 'Ghost',
  },
}

// ─── Sizes ───────────────────────────────────────────────────

export const Small: Story = {
  args: {
    size: 'sm',
    default: 'Small',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    default: 'Large',
  },
}

// ─── States ──────────────────────────────────────────────────

export const Disabled: Story = {
  args: {
    disabled: true,
    default: 'Disabled',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    default: 'Saving…',
  },
}

// ─── Showcase ────────────────────────────────────────────────

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="primary" loading>Loading</Button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'All button variants displayed side by side for visual comparison.',
      },
    },
  },
}
