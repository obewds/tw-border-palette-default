<script setup lang="ts">

    type TwBorderPaletteDefaultProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<TwBorderPaletteDefaultProps>(), {
            text: ''
        }
    )

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>TwBorderPaletteDefault</slot>
        </template>
    </div>

</template>
