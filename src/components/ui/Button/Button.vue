<script setup lang="ts">
export interface ButtonProps {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg'
  /** Whether the button is disabled */
  disabled?: boolean
  /** Whether the button is in a loading state */
  loading?: boolean
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

function handleClick(event: MouseEvent) {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    class="btn"
    :class="[
      `btn--${variant}`,
      `btn--${size}`,
      { 'btn--loading': loading },
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="btn__spinner" aria-hidden="true" />
    <span class="btn__content" :class="{ 'btn__content--hidden': loading }">
      <slot />
    </span>
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  border-radius: 6px;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.15s ease, box-shadow 0.15s ease, opacity 0.15s ease;
  position: relative;
}

.btn:focus-visible {
  outline: 2px solid var(--color-focus, #3b82f6);
  outline-offset: 2px;
}

/* Sizes */
.btn--sm {
  padding: 0.375rem 0.75rem;
  font-size: 0.8125rem;
  line-height: 1.25rem;
}
.btn--md {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
}
.btn--lg {
  padding: 0.625rem 1.5rem;
  font-size: 1rem;
  line-height: 1.75rem;
}

/* Variants */
.btn--primary {
  background-color: #2563eb;
  color: #fff;
}
.btn--primary:hover:not(:disabled) {
  background-color: #1d4ed8;
}

.btn--secondary {
  background-color: #f1f5f9;
  color: #1e293b;
  border: 1px solid #cbd5e1;
}
.btn--secondary:hover:not(:disabled) {
  background-color: #e2e8f0;
}

.btn--danger {
  background-color: #dc2626;
  color: #fff;
}
.btn--danger:hover:not(:disabled) {
  background-color: #b91c1c;
}

.btn--ghost {
  background-color: transparent;
  color: #1e293b;
}
.btn--ghost:hover:not(:disabled) {
  background-color: #f1f5f9;
}

/* States */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Loading */
.btn__content--hidden {
  visibility: hidden;
}

.btn__spinner {
  position: absolute;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>