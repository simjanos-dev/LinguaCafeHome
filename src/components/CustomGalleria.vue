<template>
    <Galleria 
        indicatorsPosition="bottom"
        :autoPlay="true"
        showIndicatorsOnItem
        showIndicators
        :showItemNavigators="true"
        :showThumbnails="false"
        :circular="true"
        :value="$props.images" 
        :pt="{root: 'mb-4'}"
    >
        <template #item="slotProps">
            <a :href="slotProps.item.src" _blank>
                <img :src="slotProps.item.src" />
            </a>
        </template>
    </Galleria>
</template>

<script>
export default {
    props: {
        images: Array,
    },
    data() {
        return {
        };
    },
    mounted() {

    },
    methods: {

    }
}
</script>