<template>
    <div class="flex flex-col items-center">
		<Card class="my-1 w-[90%] max-w-5xl my-6">
			<template #title>Language learning resource collection</template>
			<template #content>
				<div class="mb-2">
					This is a resource collection of free texts, audios, videos and tools that you can use to learn languages with <b>comprehensible input</b>. 
					Feel free to propose additions to it either on GitHub, or on the LinguaCafe discord channel.
				</div>
				<div>
					This collection is mainly for reading materials, but people have proposed to add more material to it, so I added an optional filter where everything 
					related to comprehensible input learning can be added.
				</div>


			</template>
		</Card>

		<!-- filters -->
		<Card class="my-1 w-[90%] max-w-5xl my-6">
			<template #title>
				<div class="flex justify-between">
					<span>Filter</span>
					<div class="flex items-center font-normal text-base">
						<label for="readingOnlyTextbox">Reading materials only</label>
						<Checkbox 
							v-model="readingMaterialsOnly"
							:binary="true"
							inputId="readingOnlyTextbox"
							class="ml-2"
							@change="filterChanged"
						/>
					</div>
				</div>
			</template>
			<template #content>
				<InputText 
					v-model="filter"
					type="text" 
					class="w-full mt-4" 
					placeholder="Search for languages, titles or descriptions..." 
					@keyup="filterChanged"
					@change="filterChanged"
				></InputText>
			</template>
		</Card>


		<!-- Resource list -->
        <Card
			v-for="(resource, resourceIndex) in filteredResources"
			:key="resourceIndex"
			class="my-1 w-[90%] max-w-5xl my-6"
		>
			<template #title>
				<div class="flex flex-wrap justify-between">
					
					<!-- Title -->
					<span class="flex items-center flex-wrap w-full lg:w-auto">
						<!-- Icon -->
						<BookOpenVariantIcon class="mr-2 hidden md:block" v-if="resource.type == 'reading'" />
						<ToolsIcon class="mr-2 hidden md:block" v-if="resource.type == 'tool'" />
						<MovieIcon class="mr-2 hidden md:block" v-if="resource.type == 'video'" />
						<HeadphonesIcon class="mr-2 hidden md:block" v-if="resource.type == 'audio'" />

						<!-- Title text-->
						{{ resource.title }}
					</span>
					
					<!-- Language list -->
					<div class="w-full mt-2 lg:w-auto lg:mt-0">
						<Image
							v-for="(language, languageIndex) in resource.languages"
							:key="languageIndex"
							:src="'images/flags/' + language + '.png'"
							imageClass="w-[35px] h-[24px] mr-1 rounded border border-surface-300"
						/>
					</div>
				</div>
			</template>
			<template #content>
				<div class="block">
					{{ resource.description }}
				</div>
				<a class="text-primary mt-4 break-all inline-block" :href="resource.url" target="_blank">{{ resource.url }}</a>
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
			readingMaterialsOnly: true,
        };
    },
	mounted() {
		axios.get('resources.json').then((response) => {
			this.resources = response.data;
			this.filteredResources = response.data;

			this.filterChanged();
		});
    },
    methods: {
		filterChanged() {
			let lowercaseFilter = this.filter.toLowerCase();
			this.filteredResources = [];
			this.resources.forEach((element) => {
				// reading materials only filter
				if (this.readingMaterialsOnly && !element.hasText) {
					return;
				}

				// text filter
				let languages = element.languages.join(' ').toLowerCase();
				if (
					!languages.includes(lowercaseFilter) && 
					!element.title.toLowerCase().includes(lowercaseFilter) && 
					!element.description.toLowerCase().includes(lowercaseFilter) &&
					!element.url.toLowerCase().includes(lowercaseFilter)
				) {
					return;
				}

				this.filteredResources.push(element);
			});

		}

    }
}
</script>