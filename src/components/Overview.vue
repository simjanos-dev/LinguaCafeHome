<template>
    <div>
        <Card class="max-w-5xl mx-auto my-4">
            <template #title>What is LinguaCafe?</template>
            <template #content>
				LinguaCafe is a free, web-based and self-hosted platform that helps language learners read in foreign languages. 
				It allows users to import texts from different sources, and provides a set of tools 
				that helps them easily acquire vocabulary.<br><br>

				I developed LinguaCafe mainly for personal use, because I found the alternative platforms too expensive or lacking in features I wanted. 
				<br><br>After years of developement and reading other language learners' opinions about similar platforms, i realised that it might also be a useful
				tool for other learners, so I have started adding more features to grow LinguaCafe into a platform that more people can benefit from.<br><br>
				
				This overview was written for v0.7, it is possible that some improvements have been made since.<br><br>

				You can download it from here:<br>

                <a href="https://github.com/simjanos-dev/LinguaCafe" class="flex items-center">
                    <GithubIcon class="mr-1" />
                    <span>
                        Github
                    </span>
                </a>
            </template>
		</Card>

        <Card class="max-w-5xl mx-auto my-4">
			<template #title>
                <div class="flex items-center">
                    <AlertIcon fillColor="red" class="mr-2" /> Active development disclaimer
                </div>
            </template>

			<template #content>
				LinguaCafe is still in active development. There are a few missing features, and you might encounter some bugs while using the software. 
				Please test it before you start actively using it, and make sure it is up to your expectations.
			</template>
		</Card>

		<Card class="max-w-5xl mx-auto my-4">
			<template #title>Supported languages</template>
			<template #content>
                <CustomGalleria :images="[
                    { src: 'images/Languages.jpg' },
                ]"/>

				LinguaCafe currently supports 15 languages. You can see a more detailed list of 
				supported features for each language on the github page. <br><br>
				
				More languages will be added soon.
			</template>
		</Card>

        <Card class="max-w-5xl mx-auto my-4">
            <template #title>Library</template>
			<template #content>
                <CustomGalleria :images="[
                    { src: 'images/LibraryCover.jpg' },
                    { src: 'images/LibraryDetailed.jpg' },
                    { src: 'images/LibraryChapters.jpg' },
                ]"/>
				
				You can manage all imported texts on the <b>Library</b> page.<br><br>

				The imported texts are arranged and labeled as <b>books</b> and <b>chapters</b>, 
				but they can be anything like subtitles, podcast transcripts or news articles.<br><br>
				
				You can see how many <span class="new">new words</span> and <span class="highlighted">highlighted words</span> each <b>book</b> and <b>chapter</b> contains and estimate how difficult a text will be for your level.<br><br>
			</template>
		</Card>

        <Card class="max-w-5xl mx-auto my-4">
			<template #title>Importing text</template>
			<template #content>
                <CustomGalleria :images="[
                    { src: 'images/Import.jpg' },
                ]" />
				LinguaCafe has a variety of supported import sources, and more are coming in future updates.
            </template>
		</Card>

        <Card class="max-w-5xl mx-auto my-4">
			<template #title>Reading</template>
			<template #content>
                <CustomGalleria :images="[
                    { src: 'images/TextReader1.jpg' },
                    { src: 'images/TextReader2.jpg' },
                ]" />

				When you first start reading, all your words will be yellow, which represents <span class="new">new words</span> that you haven't seen before. 
				Select the words you don't know, and add a translation from the built-in vocabulary search. From now on whenever you see this word again, it will be <span class="highlighted">highlighted</span> 
				in any text you read. <br><br>
				
				You will be able to review these words to memorize their meaning. Clicking on the <b>Finished reading</b> button will set
				all the yellow words to known in the chapter.<br><br>
				You can also select multiple words, and save them as a <b>phrase</b>.
			</template>
		</Card>

        <Card class="max-w-5xl mx-auto my-4">
			<template #title>Review</template>
			<template #content>
                <CustomGalleria :images="[
                    { src: 'images/ReviewFrontCard.jpg' },
                    { src: 'images/ReviewBackCard.jpg' },
                ]" />
				After reading your texts and creating <span class="highlighted">highlighted words and phrases</span>, you can review them on the <b>Review page</b>.
				You can review words from a specific <b>book</b>, <b>chapter</b>, or you can review them all at once.<br><br>

				LinguaCafe uses a spaced repetition system similar to the Leitner system, but you can 
				export your highlighted cards to Anki or other SRS software if you want.
			</template>
		</Card>

		<Card class="max-w-5xl mx-auto my-4">
			<template #title>Goal tracking</template>
			<template #content>
                <CustomGalleria :images="[
                    { src: 'images/GoalTracking.jpg' },
                    { src: 'images/Statistics.jpg' },
                ]" />

				LinguaCafe tracks how many words you read, highlight and review daily. You can view and edit your 
				daily goals on the <b>Home page</b>, and you can see your progress over time on the <b>Calendar</b>.<br><br>

				You can also view your all time statistics on the bottom of <b>Home page</b>.
			</template>
		</Card>

        <Card class="max-w-5xl mx-auto my-4">
			<template #title>Vocabulary</template>
			<template #content>
				You can search, edit and export your words on the <b>Vocabulary</b> page.
                <CustomGalleria :images="[
                    { src: 'images/VocabularySearch.jpg' },
                    { src: 'images/VocabularyEdit.jpg' },
                    { src: 'images/VocabularyExport.jpg' },
                ]" />
			</template>
		</Card>

		<Card class="max-w-5xl mx-auto my-4">
			<template #title>Dictionaries</template>
			<template #content>
                <CustomGalleria :images="[
                    { src: 'images/DictionaryList.jpg' },
                ]" />
				LinguaCafe comes with no dictionary files by default, but you can download and import them from different sources. 
				There is a list of supported dictionaries on the github page.
				<br><br>
				You can also use DeepL translator, which allows you to translate 500.000 characters/month for free with machine translation.
			</template>
		</Card>

		<Card class="max-w-5xl mx-auto my-4">
			<template #title>Kanji and radicals</template>
			<template #content>
                <CustomGalleria :images="[
                    { src: 'images/KanjiList.jpg' },
                    { src: 'images/KanjiDetails.jpg' },
                ]" />
				You can view information about the kanji you know.
			</template>
		</Card>

		<Card class="max-w-5xl mx-auto my-4">
			<template #title>Anki</template>
			<template #content>
                <CustomGalleria :images="[
                    { src: 'images/AnkiHome.jpg' },
                    { src: 'images/AnkiReview.jpg' },
                ]" />

				LinguaCafe comes with built-in Anki support. It can send words when you highlight them to Anki
				automatically, or you can send them manually. You can find more information about setting it up 
				on the github page.
			</template>
		</Card>

		<Card class="max-w-5xl mx-auto my-4">
			<template #title>Theming and customization</template>
			<template #content>
                <CustomGalleria :images="[
                    { src: 'images/ThemeDark.jpg' },
                    { src: 'images/ThemeLight.jpg' },
                    { src: 'images/ThemeEink.jpg' },
                ]" />

				LinguaCafe comes with a light, dark and e-ink theme.<br><br>
				Mobile view is also supported. You can use LinguaCafe from any device that has a browser and at least 340px wide screen.
			</template>
		</Card>
    </div>
</template>

<script>
export default {
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