---
head:
  - - link
    - rel: icon
      href: favicon.ico
---


::: danger
This is an example GitHub Pages site and is NOT intended for actual use in real projects/products!
:::


# @obewds/tw-border-palette-default

Welcome to the docs page for OBE:WDS's `TwBorderPaletteDefault.vue` component for [Vue.js](https://vuejs.org/)!




## Installation

```bash
npm install @obewds/tw-border-palette-default --save-dev
```




## Import Component




### Template syntax

```html{2}
<template>
    <TwBorderPaletteDefault/>
</template>
```




### Script setup syntax

```html{2}
<script setup lang="ts">
    import { TwBorderPaletteDefault } from '@obewds/tw-border-palette-default'
</script>
```




### Composition API syntax

```html{3,6}
<script lang="ts">
    import { defineComponent } from 'vue'
    import { TwBorderPaletteDefault } from '@obewds/tw-border-palette-default'

    export default defineComponent({
        components: { TwBorderPaletteDefault }
    })
</script>
```




## Props




### text

:white_check_mark: - Type `String`  
:x: - Not Required  
:x: - Doesn't Validate


```html{2}
<template>
    <TwBorderPaletteDefault text="My text prop string"/>
</template>
```

Outputs:

```html
<div>My text prop string</div>
```

::: warning
If both the `text` prop and `slot` content are used, then the `text` prop takes precidence and the `slot` content will **NOT** render!
:::




## Slots




### default

```html{2-4}
<template>
    <TwBorderPaletteDefault>
        My slot content
    </TwBorderPaletteDefault>
</template>
```

Outputs:

```html
<div>My slot content</div>
```

::: danger
If both the `text` prop and `slot` content are used, then the `text` prop takes precidence and the `slot` content will **NOT** render!
:::




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
