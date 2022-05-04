---
head:
  - - link
    - rel: icon
      href: favicon.ico
---




# @obewds/tw-border-palette-default

Welcome to the docs page for OBE:WDS's `twBorderPaletteDefault` component for [Vue.js](https://vuejs.org/)!

<br>




## Installation

```bash
npm install @obewds/tw-border-palette-default --save-dev
```

<br>




## Object Schema

The object returned when importing Tailwind CSS background default color palette has the following schema:

```javascript
{
    'default': {
        colors: {
            'default': '',
            'error': '...',
            'primary': '...',
            'secondary': '...',
            'success': '...',
        },
    },
}
```

<br>





## Use Example

```html{3,8,16}
<script setup lang="ts">

    import { twBorderPaletteDefault } from '@obewds/tw-border-palette-default'

    const props = defineProps({
        borderClasses: {
            type: String,
            default: twBorderPaletteDefault.default.colors.primary,
        },
    })

</script>

<template>

    <div :class="borderClasses">
        {{ borderClasses }}
    </div>

</template>
```




## Uninstall

```bash
npm uninstall @obewds/tw-border-palette-default
```



<!--
## Markdown Examples

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip CUSTOM TITLE
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
-->
