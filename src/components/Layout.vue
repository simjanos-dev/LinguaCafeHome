<template>
    <div class="bg-surface-100">
        <Menubar :model="menuItems"/>

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
            selectedMenu: 'overview',
            menuItems: [
                { label: 'LinguaCafe', command: this.showOverview },
                { label: 'Resources', command: this.showResources }
            ]
        };
    },
    mounted() {
        let path = window.location.href.split('?page=');
        if (path.length == 2) {
            this.selectedMenu = path[1];
        }
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