<template>
	<v-app>
		<v-app-bar
			app
			color="primary"
			light
			dense
			flat
		>
			<v-btn rounded text plain>Overview</v-btn>
		</v-app-bar>

		<v-main>
			<Home/>
		</v-main>
	</v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
