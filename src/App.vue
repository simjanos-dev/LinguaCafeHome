<template>
	<v-app>
		<v-app-bar
			app
			color="primary"
			light
			dense
			flat
		>
			<v-btn rounded text plain @click="page = 'home'">Overview</v-btn>
			<v-btn rounded text plain @click="page = 'user-manual'">User manual (v0.8 pre-release)</v-btn>
		</v-app-bar>

		<v-main>
			<Home v-if="page === 'home'"/>
			<UserManual v-if="page === 'user-manual'"/>
		</v-main>
	</v-app>
</template>

<style>
	#user-manual-content {
		height: 100% !important;
	}

	div#user-manual .subheader {
		display: block;
		width: 100%;
		height: 42px;
		line-height: 42px;
		font-size: 24px;
		margin-bottom: 4px;
	}

	div#user-manual .subheader {
		color: #c3c3c3 !important;
	}

	div#user-manual .subheader-margin-top {
		margin-top: 40px;
	}

	div#user-manual .v-card {
		background-color: #28272C !important;
		color: #c3c3c3 !important;
	}

	div#user-manual .v-card i {
		color: #c3c3c3;
	}

	div#user-manual .theme--dark.v-data-table.v-data-table--fixed-header thead th,
	div#user-manual .theme--dark.v-data-table.v-data-table--fixed-header thead td,
	div#user-manual .theme--dark.v-data-table {
		background: #28272C !important;
		color: #c3c3c3 !important;
	}

	div#user-manual div.v-data-table.no-hover .v-data-table__wrapper table tbody tr:hover, 
	div#user-manual div.v-data-table.no-hover .v-data-table__wrapper table tbody tr:hover td {
		background-color: transparent !important;
	}
</style>

<script>
import Home from './components/Home';
import UserManual from './components/UserManual/UserManual';

export default {
	name: 'App',

	components: {
		Home,
		UserManual
	},

	data: () => ({
		page: 'home',
	}),
	mounted() {
		if (window.location.hash === '#user-manual') {
			this.page = 'user-manual';
		}
	}
	
};
</script>

