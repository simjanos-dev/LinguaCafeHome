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
				tool for other learners, so I have started adding more features to grow LinguaCafe into a platform that more people can benefit from.
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
				LinguaCafe currently supports 4 languages: <b>German</b>, <b>Japanese</b>, <b>Norwegian</b> and <b>Spanish</b>.
				I provide dictionary sources for these languages, and I've personally tested <b>Japanese</b> 
				and <b>Norwegian</b>. Unfortunately I do not speak <b>German</b> and <b>Spanish</b>, and I couldn't 
				provide language specific fixes for these languages before community feedback.<br><br>
				
				It is quite easy to add further languages to LinguaCafe, but I've decide for these to start with, 
				so i can focus on stability of LinguaCafe's first release. I will add more languages in the future.
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
				
				You can select a <b>chapter</b> and start reading, or you can review your highlighted words from a specific <b>book</b> or <b>chapter</b>.
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Importing text</v-card-title>
			<v-card-text>
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/NewChapter.jpg')">
						<img width="100%" eager src="images/NewChapter.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/Import.jpg')">
						<img width="100%" eager src="images/Import.jpg"></img>
					</v-carousel-item>
				</v-carousel>

				At this time, there are two ways you can import text into LinguaCafe. The first is creating a <b>chapter</b>, 
				and simply copying the text into the textbox. <br><br>

				The other method is by clicking the import button on the <b>Library</b> page, where you can import an .epub file. 
				There will be more supported methods in the future, like importing movie subtitles or youtube captions.
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Reading</v-card-title>
			<v-card-text>
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/TextReader.jpg')">
						<img width="100%" eager src="images/TextReader.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/TextReaderVocabularyBox.jpg')">
						<img width="100%" eager src="images/TextReaderVocabularyBox.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/TextReaderVocabularyBoxEdit.jpg')">
						<img width="100%" eager src="images/TextReaderVocabularyBoxEdit.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/TextReaderSettings.jpg')">
						<img width="100%" eager src="images/TextReaderSettings.jpg"></img>
					</v-carousel-item>
				</v-carousel>
				When you first start reading, all your words will be yellow, which represents <span class="new">new words</span> that you haven't seen before. 
				Select the words you don't know, and add a translation from the built-in vocabulary search, and set the <b>level</b> of the word to 7 to make it a 
				<span class="highlighted">highlighted word</span>. From now on whenever you see this word again, it will be <span class="highlighted">highlighted</span> 
				in any text you read. You will be able to review these words to memorize their meaning. Clicking on the <b>Finished reading</b> button will set
				all the yellow words to known.<br><br>
				You can also select multiple words, and save them as a <b>phrase</b>.<br><br>
				
				On the settings page you can customize your text to look any way you like to read.
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

				On the review page you will be given words and phrases that you have highlighted and you have to guess their meaning.<br><br>

				Each <span class="highlighted">highlighted word and phrase</span> will have a level representing how well you know that word. 
				If you guess a card correctly, then the word or phrase will level up, and will appear less frequently over time. LinguaCafe uses
				a spaced repetition system similar to the Leitner system, but you can export your highlighted cards to Anki or other SRS 
				software if you want.
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
					<v-carousel-item contain eager @click="openImage('images/DictionaryImport.jpg')">
						<img width="100%" eager src="images/DictionaryImport.jpg"></img>
					</v-carousel-item>
				</v-carousel>
				LinguaCafe comes with no dictionary files by default, but you can download and import them from different sources. 
				JMDict is also supported, which is a popular japanese dictionary with detailed information. You can find more 
				information about it and some other dictionary sources on LinguaCafe's github page. 
				
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
				You can view information about the kanji you know, if you import JMDict files.
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Jellyfin</v-card-title>
			<v-card-text>
				<v-carousel eager class="my-4 rounded-lg carousel" cycle height="auto">
					<v-carousel-item contain eager @click="openImage('images/MediaPlayerList.jpg')">
						<img width="100%" eager src="images/MediaPlayerList.jpg"></img>
					</v-carousel-item>
					<v-carousel-item contain eager @click="openImage('images/MediaPlayerReader.jpg')">
						<img width="100%" eager src="images/MediaPlayerReader.jpg"></img>
					</v-carousel-item>
				</v-carousel>
				This is a very niche feature, but if it's set up properly, it allows the user to sit down in front of their TV, 
				select something to watch, and have the subtitles opened in LinguaCafe on their phone or tablet.<br><br>
				
				In LinguaCafe you can import any external subtitles straight from a Jellyfin Media Server. 
				Just start a video on any Jellyfin client, go to the <b>Media player page</b> in LinguaCafe, and select
				the subtitle you want to read. <br><br>

				There will be more ways to import your subtitles from other sources like mpv player, YouTube or straight 
				from subtitle files, and also an option to save them in your library.<br><br>
				
				Currently only works for TV Shows, it will be fixed soon.
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
				LinguaCafe comes with built-in Anki support. It can send your <span class="highlighted">highlighted words</span> to Anki
				automatically when you highlight them, or you can send them manually. You can find more information about setting it up 
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

				LinguaCafe comes with a light, dark and e-ink theme. The e-ink theme was created for Onyx Boox e-book readers, 
				but they probably work okay with other e-ink devices as well.<br><br>
				Mobile view is also supported. You can use LinguaCafe from any device that has a browser and at least 340px wide screen.
			</v-card-text>
		</v-card>

		<v-card outlined class="rounded-lg my-16">
			<v-card-title>Feature roadmap</v-card-title>
			<v-card-text>
				LinguaCafe has a lot of features planned, but they have no timeline, or order. 
				Please treat it more like a vision, of what LinguaCafe will be in its more developed form.
				I will choose what to develop next based on community feedback and my own 
				learning needs.	<br><br>

				Some important features that are on the list:
				<ul id="feature-list">
					<li>
						Making installation and update process easier wherever possible.
					</li>
					<li>
						Supporting more users on one LinguaCafe server, to make it possible 
						for the community to host one server for multiple people.
					</li>
					<li>
						Option to import and export all data.
					</li>
					<li>
						More language support.
					</li>
					<li>
						Support for multiple font types for the reader (especially useful for Japanese).
					</li>
					<li>
						Text reader sentence mode, where you can read the text one sentence at a time.
					</li>
					<li>
						Text reader continuous reading mode, where you can scroll between your <b>chapters</b>, 
						and you don't have to click on a link to go to the next <b>chapter</b>.
					</li>
					<li>
						Bookmarks.
					</li>
					<li>
						Manga reader.
					</li>
					<li>
						Activity timeline, that shows your activities.
					</li>
					<li>
						Support for treating word families together.
					</li>
					<li>
						Jellyfin playback statistics. I want to add a goal, that tracks your listening time of 
						audiobooks and podcasts on Jellyfin.
					</li>
					<li>
						Simplified version of vocabulary box when hovering over words.
					</li>
					<li>
						Option to make vocabulary box fixed on the right side of the screen, 
						always visible and taking the full height of the screen.
					</li>
					<li>
						Right to left, top to bottom reading mode for Japanese. There is already an option for it, 
						but it does not work yet.
					</li>
					<li>
						Customisable flashcards with different decks.
					</li>
					<li>
						Saving images for words.
					</li>
					<li>
						Support for importing audio for words and texts. Also text to speech.
					</li>
					<li>
						Browser plugin that allows you to use any text inside the browser.
					</li>
					<li>
						Importing text from all sources: youtube captions.
					</li>
					<li>
						A page where you can create sheets to practice Japanese writing 
						either on touch devices, or by printing out the sheets.
					</li>
				</ul><br>

				As you can see i have a lot of plans for LinguaCafe, and it will take a long time to finish all of them. 
				It is not something I write only for the purpose to make something useful, it is also my hobby, 
				and i will keep working on it probably forever. <br><br>

				I will also write a tool that shares my project management tool's tasks in real time, so you can
				see all the planned features, known bugs and developement progress in real time.
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
