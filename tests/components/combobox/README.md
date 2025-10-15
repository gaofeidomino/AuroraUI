# Combobox Component Tests

This directory contains tests for the Combobox components.

## Test Files

- `Combobox.test.ts` - Tests for the main Combobox component
- `ComboboxInput.test.ts` - Tests for the ComboboxInput component
- `ComboboxItem.test.ts` - Tests for the ComboboxItem component

## Test Coverage

The tests cover:

### Combobox Component

- Basic rendering and props
- Data slot attributes
- Props forwarding
- Complex content rendering
- Disabled state
- ModelValue handling
- Multiple selection mode
- Accessibility attributes
- Different selection types
- Custom class application

### ComboboxInput Component

- Basic rendering with wrapper structure
- Search icon rendering
- Data slot attributes
- Custom class application
- CSS class application
- Props forwarding
- Complex slot content
- Disabled state
- Wrapper structure verification
- Multiple input instances

### ComboboxItem Component

- Basic rendering
- Data slot attributes
- Custom class application
- CSS class application
- Props forwarding
- Complex slot content
- Disabled and highlighted states
- Value prop handling
- Accessibility attributes
- Multiple item instances
- Text content styling

## Running Tests

To run these specific tests:

```bash
pnpm test tests/components/combobox/
```

To run with coverage:

```bash
pnpm test:coverage tests/components/combobox/
```
