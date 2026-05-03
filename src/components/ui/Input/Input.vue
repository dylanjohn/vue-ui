<script setup lang="ts">
export interface InputProps {
  /** Input label */
  label: string
  /** Placeholder text */
  placeholder?: string
  /** Current value (v-model) */
  modelValue?: string
  /** Error message — shows error styling when set */
  error?: string
  /** Whether the input is disabled */
  disabled?: boolean
  /** HTML input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
}

withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  modelValue: '',
  error: '',
  disabled: false,
  type: 'text',
})

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="input-field" :class="{ 'input-field--error': error, 'input-field--disabled': disabled }">
    <label class="input-field__label">{{ label }}</label>
    <input
      class="input-field__input"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <span v-if="error" class="input-field__error">{{ error }}</span>
  </div>
</template>

<style scoped>
.input-field {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.input-field__label {
  font-size: 0.875rem;
  font-weight: 500;
  color: #1e293b;
}

.input-field__input {
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background-color: #fff;
  color: #1e293b;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
  font-family: inherit;
}

.input-field__input::placeholder {
  color: #94a3b8;
}

.input-field__input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.input-field--error .input-field__input {
  border-color: #dc2626;
}

.input-field--error .input-field__input:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
}

.input-field__error {
  font-size: 0.8125rem;
  color: #dc2626;
}

.input-field--disabled .input-field__input {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #f8fafc;
}
</style>
