import type { Meta, StoryObj } from '@storybook/vue3'
import Input from './Input.vue'

const meta = {
  title: 'Design System/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
  },
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    modelValue: '',
    error: '',
    disabled: false,
    type: 'email',
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    modelValue: 'hello@example.com',
  },
}

export const WithError: Story = {
  args: {
    modelValue: 'not-an-email',
    error: 'Please enter a valid email address',
  },
}

export const Disabled: Story = {
  args: {
    modelValue: 'locked@example.com',
    disabled: true,
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
  },
}
