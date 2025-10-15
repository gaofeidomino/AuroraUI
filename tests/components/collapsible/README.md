# Collapsible Component Tests

This directory contains tests for the Collapsible components.

## Test Files

- `Collapsible.test.ts` - Tests for the main Collapsible component
- `CollapsibleContent.test.ts` - Tests for the CollapsibleContent component
- `CollapsibleTrigger.test.ts` - Tests for the CollapsibleTrigger component
- `CollapsibleIntegration.test.ts` - Integration tests for all collapsible components working together

## Test Coverage

The tests cover:

### Collapsible Component

- Basic rendering and props
- Open state provision to slots
- Default and controlled open states
- Data slot attributes
- Props forwarding
- Complex slot content
- Disabled state
- Multiple instances

### CollapsibleContent Component

- Basic rendering
- Data slot attributes
- Props forwarding
- Complex content rendering
- Force mount functionality

### CollapsibleTrigger Component

- Basic rendering
- Data slot attributes
- Props forwarding
- Element type rendering (button, div, etc.)
- Complex content
- Disabled state
- Accessibility attributes
- Multiple instances

### Integration Tests

- Complete collapsible structure
- Component hierarchy
- Multiple independent instances
- Custom styling and props
- Nested collapsibles
- Default open state
- Disabled state handling

## Running Tests

To run these specific tests:

```bash
pnpm test tests/components/collapsible/
```

To run with coverage:

```bash
pnpm test:coverage tests/components/collapsible/
```
