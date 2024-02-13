<template>
	<v-container>
		<v-overlay :value="overlay.active" :opacity="1">
			<v-btn id="close-image-button" class="textDark--text" small rounded color="error" @click="overlay.active = false;">
				close
			</v-btn>
			<img :src="overlay.img"></img>
		</v-overlay>
		<div style="text-align: center; font-size: 42px;">LinguaCafe</div>

		<v-card outlined class="rounded-lg">
			<v-card-title>What is LinguaCafe?</v-card-title>
			<v-card-text>
				LinguaCafe is a free, web-based and self-hosted platform that helps language learners read in foreign languages. 
				It allows users to import texts from different sources, and provides a set of tools 
				that helps them easily acquire vocabulary.<br><br>

				I developed LinguaCafe mainly for personal use, because I found the alternative platforms too expensive or lacking in features I wanted. 
				<br><br>After years of developement and reading other language learners' opinions about similar platforms, i realised that it might also be a useful
				tool for other learners, so I have started adding more features to grow LinguaCafe into a platform that more people can benefit from.<br><br>
				
				This overview was written for v0.7, it is possible that some improvements have been made since.<br><br>

				You can download it from here:<br>
				<v-icon class="mr-2">mdi-github</v-icon><a href="https://github.com/simjanos-dev/LinguaCafe">Github</a>
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title><v-icon large class="mr-2" color="error">mdi-alert</v-icon>Active development disclaimer</v-card-title>
			<v-card-text>
				LinguaCafe is still in active development. There are a few missing features, and you might encounter some bugs while using the software. 
				Please test it before you start actively using it, and make sure it is up to your expectations.
			</v-card-text>
		</v-card>

		<div style="text-align: center; font-size: 42px;">Feature overview</div>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Supported languages</v-card-title>
			<v-card-text>
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/Languages.jpg')">
						<img width="100%" eager src="images/Languages.jpg"></img>
					</v-carousel-item>
				</v-carousel>
				LinguaCafe currently supports 15 languages. You can see a more detailed list of 
				supported features for each language on the github page. <br><br>
				
				More languages will be added soon.
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Library</v-card-title>
			<v-card-text>
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/LibraryCover.jpg')">
						<img width="100%" eager src="images/LibraryCover.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/LibraryDetailed.jpg')">
						<img width="100%" eager src="images/LibraryDetailed.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/LibraryChapters.jpg')">
						<img width="100%" eager src="images/LibraryChapters.jpg"></img>
					</v-carousel-item>
				</v-carousel>
				
				You can manage all imported texts on the <b>Library</b> page.<br><br>

				The imported texts are arranged and labeled as <b>books</b> and <b>chapters</b>, 
				but they can be anything like subtitles, podcast transcripts or news articles.<br><br>
				
				You can see how many <span class="new">new words</span> and <span class="highlighted">highlighted words</span> each <b>book</b> and <b>chapter</b> contains and estimate how difficult a text will be for your level.<br><br>
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Importing text</v-card-title>
			<v-card-text>
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/Import.jpg')">
						<img width="100%" eager src="images/Import.jpg"></img>
					</v-carousel-item>
				</v-carousel>
				LinguaCafe has a variety of supported import sources, and more are coming in future updates.
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Reading</v-card-title>
			<v-card-text>
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/TextReader1.jpg')">
						<img width="100%" eager src="images/TextReader1.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/TextReader2.jpg')">
						<img width="100%" eager src="images/TextReader2.jpg"></img>
					</v-carousel-item>
				</v-carousel>

				When you first start reading, all your words will be yellow, which represents <span class="new">new words</span> that you haven't seen before. 
				Select the words you don't know, and add a translation from the built-in vocabulary search. From now on whenever you see this word again, it will be <span class="highlighted">highlighted</span> 
				in any text you read. <br><br>
				
				You will be able to review these words to memorize their meaning. Clicking on the <b>Finished reading</b> button will set
				all the yellow words to known in the chapter.<br><br>
				You can also select multiple words, and save them as a <b>phrase</b>.
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Review</v-card-title>
			<v-card-text>
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/ReviewFrontCard.jpg')">
						<img width="100%" eager src="images/ReviewFrontCard.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/ReviewBackCard.jpg')">
						<img width="100%" eager src="images/ReviewBackCard.jpg"></img>
					</v-carousel-item>
				</v-carousel>
				After reading your texts and creating <span class="highlighted">highlighted words and phrases</span>, you can review them on the <b>Review page</b>.
				You can review words from a specific <b>book</b>, <b>chapter</b>, or you can review them all at once.<br><br>

				LinguaCafe uses a spaced repetition system similar to the Leitner system, but you can 
				export your highlighted cards to Anki or other SRS software if you want.
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Goal tracking</v-card-title>
			<v-card-text>
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/GoalTracking.jpg')">
						<img width="100%" eager src="images/GoalTracking.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/Statistics.jpg')">
						<img width="100%" eager src="images/Statistics.jpg"></img>
					</v-carousel-item>
				</v-carousel>

				LinguaCafe tracks how many words you read, highlight and review daily. You can view and edit your 
				daily goals on the <b>Home page</b>, and you can see your progress over time on the <b>Calendar</b>.<br><br>

				You can also view your all time statistics on the bottom of <b>Home page</b>.
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Vocabulary</v-card-title>
			<v-card-text>
				You can search, edit and export your words on the <b>Vocabulary</b> page.
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/VocabularySearch.jpg')">
						<img width="100%" eager src="images/VocabularySearch.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/VocabularyEdit.jpg')">
						<img width="100%" eager src="images/VocabularyEdit.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/VocabularyExport.jpg')">
						<img width="100%" eager src="images/VocabularyExport.jpg"></img>
					</v-carousel-item>
				</v-carousel>
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Dictionaries</v-card-title>
			<v-card-text>
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/DictionaryList.jpg')">
						<img width="100%" eager src="images/DictionaryList.jpg"></img>
					</v-carousel-item>
				</v-carousel>
				LinguaCafe comes with no dictionary files by default, but you can download and import them from different sources. 
				There is a list of supported dictionaries on the github page.
				<br><br>
				You can also use DeepL translator, which allows you to translate 500.000 characters/month for free with machine translation.
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Kanji and radicals</v-card-title>
			<v-card-text>
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/KanjiList.jpg')">
						<img width="100%" eager src="images/KanjiList.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/KanjiDetails.jpg')">
						<img width="100%" eager src="images/KanjiDetails.jpg"></img>
					</v-carousel-item>
				</v-carousel>
				You can view information about the kanji you know.
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Anki</v-card-title>
			<v-card-text>
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/AnkiHome.jpg')">
						<img width="100%" eager src="images/AnkiHome.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/AnkiReview.jpg')">
						<img width="100%" eager src="images/AnkiReview.jpg"></img>
					</v-carousel-item>
				</v-carousel>
				LinguaCafe comes with built-in Anki support. It can send words when you highlight them to Anki
				automatically, or you can send them manually. You can find more information about setting it up 
				on the github page.
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Theming and customization</v-card-title>
			<v-card-text>
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/ThemeDark.jpg')">
						<img width="100%" eager src="images/ThemeDark.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/ThemeLight.jpg')">
						<img width="100%" eager src="images/ThemeLight.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/ThemeEink.jpg')">
						<img width="100%" eager src="images/ThemeEink.jpg"></img>
					</v-carousel-item>
				</v-carousel>

				LinguaCafe comes with a light, dark and e-ink theme.<br><br>
				Mobile view is also supported. You can use LinguaCafe from any device that has a browser and at least 340px wide screen.
			</v-card-text>
		</v-card>
	</v-container>
</template>


<style> 
	::-webkit-scrollbar {
		width: 8px;
		height: 8px;
		background: #1C1B20;
		z-index: 100;
	}

	::-webkit-scrollbar-thumb {
		background: #B59686;

		border-radius: 4px;
		z-index: 100;
	}

	.new {
		background-color: #ffdd4b;
		color: #141110;
		padding: 2px 4px;
		border-radius: 8px;
	}

	.highlighted {
		background-color: #61df6b;
		color: #141110;
		padding: 2px 4px;
		border-radius: 8px;
	}

	.v-main__wrap {
		background-color: #1C1B20;
	}

	.v-card {
		background-color: #28272C !important;
		color: #c3c3c3;
	}

	.v-overlay img {
		width: 100%;
		max-height: calc(100vh - 160px);
	}
	
	div.container {
		max-width: 800px;
	}

	#close-image-button {
		position: absolute !important;
		top: -36px;
		right: calc(0%);
	}

	#opened-image {
		width: 100%;
		width: 90%;
		max-width: 1800px;
	}

	.v-window.v-carousel {
		overflow: hidden !important;
		cursor: pointer;	
	}

	.carousel {
		
		overflow: hidden !important;
	}

	.v-card__subtitle, .v-card__text {
		font-size: 18px;
	}

	#feature-list li {
		margin-top: 4px;

	}
</style>
<script>
	export default {
		data: function () {
			return {
				overlay: {
					active: false,
					img: ''
				}
			}

		},
		methods: {
			openImage(img) {
				this.overlay.active = true;
				this.overlay.img = img;
			}
		}
	}
</script>
