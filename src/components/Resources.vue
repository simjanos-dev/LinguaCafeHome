<template>
    <div class="flex flex-col items-center">
        <Card
			v-for="(resource, resourceIndex) in resources"
			:key="resourceIndex"
			class="w-full my-1 w-[800px] my-6"
		>
			<template #title>{{ resource.title }}</template>
			<template #content>
				{{ resource.description }}	
				<div class="flex flex-wrap mt-4">
					<Image
						v-for="(language, languageIndex) in resource.languages"
						:key="languageIndex"
						:src="'images/flags/' + language + '.png'"
						imageClass="w-[35px] h-[24px] w-auto mr-1 rounded border border-surface-300"
					/>
				</div>

				<a class="block text-primary mt-8" :href="resource.url">{{ resource.url }}</a>
			</template>
		</Card>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            resources: null,
        };
    },
	mounted() {
		console.log('ok');
		axios.get('/resources.json').then((response) => {
			this.resources = response.data;
		});
    },
    methods: {

    }
}
</script>