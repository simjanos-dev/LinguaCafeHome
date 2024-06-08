<template>
    <div class="bg-surface-100">
        <Menubar :model="menuItems" :pt="{ root: 'bg-primary-600 rounded-none m-0 border-0' }"/>

        <div class="">
            <Overview v-if="selectedMenu == 'overview'" />
            <Resources v-if="selectedMenu == 'resources'" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedMenu: 'resources',
            menuItems: [
                { label: 'Overview', command: this.showOverview },
                { label: 'Resources', command: this.showResources }
            ]
        };
    },
    mounted() {

    },
    methods: {
        showOverview() {
            this.selectedMenu = 'overview';
        },
        showResources() {
            this.selectedMenu = 'resources';
        }
    }
}
</script>