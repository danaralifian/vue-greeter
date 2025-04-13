# Vue Standalone Greeter Component

A standalone Vue.js component that can be embedded in any web application using a simple script tag.

## Why Virtual DOM?

This component uses Vue.js's Virtual DOM for several reasons:

1. **Efficient Updates**: Virtual DOM provides optimal performance by minimizing actual DOM manipulations through its diffing algorithm. When the message prop changes, Vue efficiently updates only the necessary parts of the component.

2. **Cross-browser Compatibility**: Vue's Virtual DOM implementation handles browser inconsistencies and provides a consistent experience across different browsers and platforms.

3. **Component Lifecycle Management**: Vue's Virtual DOM helps manage component mounting, updating, and unmounting efficiently. This is especially important for a standalone component that may be initialized and destroyed multiple times in the host application.

4. **State Management**: The Virtual DOM makes it easy to handle reactive state changes and prop updates while maintaining performance, which is essential for interactive components like our button-based greeter.

## Installation

Include the following scripts in your HTML:

```html
<!-- style is required -->
<link rel="stylesheet" href="https://vue-greeter.netlify.app/style.css" />

<!-- Vue.js is required -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<!-- Our component -->
<script src="https://vue-greeter.netlify.app/greeter.umd.js"></script>
```

## Usage

```html
<div id="my-greeter"></div>
<script>
  Greeter.init("#my-greeter", { message: "Hello from the host app!" });
</script>
```

## Development

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Build the library:

```bash
npm run build:lib
```

## Testing

Run the tests:

```bash
npm test
```

The test suite includes:

- Component rendering verification
- Button click behavior testing
- Message prop handling
- Component lifecycle tests

## Building

To build the standalone component:

```bash
npm run build:lib
```

The built files will be available in the `dist` directory.
