<template>
    <div class="flex flex-col items-center">
		<!-- filters -->
		<Card class="my-1 w-[90%] max-w-[1000px] my-6">
			<template #title>Filter</template>
			<template #content>
				<InputText 
					v-model="filter"
					type="text" 
					class="w-full" 
					placeholder="Search for languages, title or description..." 
					@keyup="filterChanged"
					@change="filterChanged"
				></InputText>
			</template>
		</Card>


		<!-- Resource list -->
        <Card
			v-for="(resource, resourceIndex) in filteredResources"
			:key="resourceIndex"
			class="my-1 w-[90%] max-w-[1000px] my-6"
		>
			<template #title>
				<div class="flex flex-wrap justify-between">
					
					<!-- Title -->
					<span class="flex items-center flex-wrap w-full lg:w-auto">
						<!-- Icon -->
						<BookOpenVariantIcon class="mr-2 hidden md:block" v-if="resource.type == 'reading'" />
						<ToolsIcon class="mr-2 hidden md:block" v-if="resource.type == 'tool'" />
						<MovieIcon class="mr-2 hidden md:block" v-if="resource.type == 'video'" />

						<!-- Title text-->
						{{ resource.title }}
					</span>
					
					<!-- Language list -->
					<div class="w-full mt-2 lg:w-auto lg:mt-0">
						<Image
							v-for="(language, languageIndex) in resource.languages"
							:key="languageIndex"
							:src="'/images/flags/' + language + '.png'"
							imageClass="w-[35px] h-[24px] mr-1 rounded border border-surface-300"
						/>
					</div>
				</div>
			</template>
			<template #content>
				<div class="block">
					{{ resource.description }}
				</div>
				<a class="text-primary mt-8 break-all" :href="resource.url" target="_blank">{{ resource.url }}</a>
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
			filteredResources: null,
			filter: '',
        };
    },
	mounted() {
		console.log('ok');
		axios.get('/resources.json').then((response) => {
			this.resources = response.data;
			this.filteredResources = response.data;
		});
    },
    methods: {
		filterChanged() {
			let lowercaseFilter = this.filter.toLowerCase();
			this.filteredResources = [];
			this.resources.forEach((element) => {
				let languages = element.languages.join(' ').toLowerCase();
				if (
					languages.includes(lowercaseFilter) || 
					element.title.toLowerCase().includes(lowercaseFilter) || 
					element.description.toLowerCase().includes(lowercaseFilter) ||
					element.url.toLowerCase().includes(lowercaseFilter)
				) {
					this.filteredResources.push(element);
				}
			});

		}

    }
}
</script>