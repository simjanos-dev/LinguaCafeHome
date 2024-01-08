(function(){"use strict";var e={800:function(e,t,a){var r=a(144),i=a(726),o=a(506),n=a(381),s=a(102),l=function(){var e=this,t=e._self._c;return t(i.Z,[t(o.Z,{attrs:{app:"",color:"primary",light:"",dense:"",flat:""}},[t(n.Z,{attrs:{rounded:"",text:"",plain:""}},[e._v("Overview")])],1),t(s.Z,[t("Home")],1)],1)},g=[],c=a(941),u=a(255),d=a(316),h=a(444),m=a(248),p=a(88),v=a(767),f=function(){var e=this,t=e._self._c;return t(m.Z,[t(v.Z,{attrs:{value:e.overlay.active,opacity:1}},[t(n.Z,{staticClass:"textDark--text",attrs:{id:"close-image-button",small:"",rounded:"",color:"error"},on:{click:function(t){e.overlay.active=!1}}},[e._v(" close ")]),t("img",{attrs:{src:e.overlay.img}})],1),t("div",{staticStyle:{"text-align":"center","font-size":"42px"}},[e._v("LinguaCafe")]),t(c.Z,{staticClass:"rounded-lg",attrs:{outlined:""}},[t(u.EB,[e._v("What is LinguaCafe?")]),t(u.ZB,[e._v(" LinguaCafe is a free, web-based and self-hosted platform that helps language learners read in foreign languages. It allows users to import texts from different sources, and provides a set of tools that helps them easily acquire vocabulary."),t("br"),t("br"),e._v(" I developed LinguaCafe mainly for personal use, because I found the alternative platforms too expensive or lacking in features I wanted. "),t("br"),t("br"),e._v("After years of developement and reading other language learners' opinions about similar platforms, i realised that it might also be a useful tool for other learners, so I have started adding more features to grow LinguaCafe into a platform that more people can benefit from."),t("br"),t("br"),e._v(" You can download it from here:"),t("br"),t(p.Z,{staticClass:"mr-2"},[e._v("mdi-github")]),t("a",{attrs:{href:"https://github.com/simjanos-dev/LinguaCafe"}},[e._v("Github")])],1)],1),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[t(p.Z,{staticClass:"mr-2",attrs:{large:"",color:"error"}},[e._v("mdi-alert")]),e._v("Active development disclaimer")],1),t(u.ZB,[e._v(" LinguaCafe is still in active development. There are a few missing features, and you might encounter some bugs while using the software. Please test it before you start actively using it, and make sure it is up to your expectations. ")])],1),t("div",{staticStyle:{"text-align":"center","font-size":"42px"}},[e._v("Feature overview")]),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Supported languages")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/Languages.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/Languages.jpg"}})])],1),e._v(" LinguaCafe currently supports 4 languages: "),t("b",[e._v("German")]),e._v(", "),t("b",[e._v("Japanese")]),e._v(", "),t("b",[e._v("Norwegian")]),e._v(" and "),t("b",[e._v("Spanish")]),e._v(". I provide dictionary sources for these languages, and I've personally tested "),t("b",[e._v("Japanese")]),e._v(" and "),t("b",[e._v("Norwegian")]),e._v(". Unfortunately I do not speak "),t("b",[e._v("German")]),e._v(" and "),t("b",[e._v("Spanish")]),e._v(", and I couldn't provide language specific fixes for these languages before community feedback."),t("br"),t("br"),e._v(" It is quite easy to add further languages to LinguaCafe, but I've decided for these to start with, so i can focus on stability of LinguaCafe's first release. I will add more languages in the future. ")],1)],1),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Library")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/LibraryCover.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/LibraryCover.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/LibraryDetailed.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/LibraryDetailed.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/LibraryChapters.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/LibraryChapters.jpg"}})])],1),e._v(" You can manage all imported texts on the "),t("b",[e._v("Library")]),e._v(" page."),t("br"),t("br"),e._v(" The imported texts are arranged and labeled as "),t("b",[e._v("books")]),e._v(" and "),t("b",[e._v("chapters")]),e._v(", but they can be anything like subtitles, podcast transcripts or news articles."),t("br"),t("br"),e._v(" You can see how many "),t("span",{staticClass:"new"},[e._v("new words")]),e._v(" and "),t("span",{staticClass:"highlighted"},[e._v("highlighted words")]),e._v(" each "),t("b",[e._v("book")]),e._v(" and "),t("b",[e._v("chapter")]),e._v(" contains and estimate how difficult a text will be for your level."),t("br"),t("br"),e._v(" You can select a "),t("b",[e._v("chapter")]),e._v(" and start reading, or you can review your highlighted words from a specific "),t("b",[e._v("book")]),e._v(" or "),t("b",[e._v("chapter")]),e._v(". ")],1)],1),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Importing text")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/NewChapter.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/NewChapter.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/Import.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/Import.jpg"}})])],1),e._v(" At this time, there are two ways you can import text into LinguaCafe. The first is creating a "),t("b",[e._v("chapter")]),e._v(", and simply copying the text into the textbox. "),t("br"),t("br"),e._v(" The other method is by clicking the import button on the "),t("b",[e._v("Library")]),e._v(" page, where you can import an .epub file. There will be more supported methods in the future, like importing movie subtitles or youtube captions. ")],1)],1),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Reading")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/TextReader.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/TextReader.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/TextReaderVocabularyBox.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/TextReaderVocabularyBox.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/TextReaderVocabularyBoxEdit.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/TextReaderVocabularyBoxEdit.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/TextReaderSettings.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/TextReaderSettings.jpg"}})])],1),e._v(" When you first start reading, all your words will be yellow, which represents "),t("span",{staticClass:"new"},[e._v("new words")]),e._v(" that you haven't seen before. Select the words you don't know, and add a translation from the built-in vocabulary search, and set the "),t("b",[e._v("level")]),e._v(" of the word to 7 to make it a "),t("span",{staticClass:"highlighted"},[e._v("highlighted word")]),e._v(". From now on whenever you see this word again, it will be "),t("span",{staticClass:"highlighted"},[e._v("highlighted")]),e._v(" in any text you read. You will be able to review these words to memorize their meaning. Clicking on the "),t("b",[e._v("Finished reading")]),e._v(" button will set all the yellow words to known."),t("br"),t("br"),e._v(" You can also select multiple words, and save them as a "),t("b",[e._v("phrase")]),e._v("."),t("br"),t("br"),e._v(" On the settings page you can customize your text to look any way you like to read. ")],1)],1),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Review")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/ReviewFrontCard.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/ReviewFrontCard.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/ReviewBackCard.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/ReviewBackCard.jpg"}})])],1),e._v(" After reading your texts and creating "),t("span",{staticClass:"highlighted"},[e._v("highlighted words and phrases")]),e._v(", you can review them on the "),t("b",[e._v("Review page")]),e._v(". You can review words from a specific "),t("b",[e._v("book")]),e._v(", "),t("b",[e._v("chapter")]),e._v(", or you can review them all at once."),t("br"),t("br"),e._v(" On the review page you will be given words and phrases that you have highlighted and you have to guess their meaning."),t("br"),t("br"),e._v(" Each "),t("span",{staticClass:"highlighted"},[e._v("highlighted word and phrase")]),e._v(" will have a level representing how well you know that word. If you guess a card correctly, then the word or phrase will level up, and will appear less frequently over time. LinguaCafe uses a spaced repetition system similar to the Leitner system, but you can export your highlighted cards to Anki or other SRS software if you want. ")],1)],1),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Goal tracking")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/GoalTracking.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/GoalTracking.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/Statistics.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/Statistics.jpg"}})])],1),e._v(" LinguaCafe tracks how many words you read, highlight and review daily. You can view and edit your daily goals on the "),t("b",[e._v("Home page")]),e._v(", and you can see your progress over time on the "),t("b",[e._v("Calendar")]),e._v("."),t("br"),t("br"),e._v(" You can also view your all time statistics on the bottom of "),t("b",[e._v("Home page")]),e._v(". ")],1)],1),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Vocabulary")]),t(u.ZB,[e._v(" You can search, edit and export your words on the "),t("b",[e._v("Vocabulary")]),e._v(" page. "),t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/VocabularySearch.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/VocabularySearch.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/VocabularyEdit.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/VocabularyEdit.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/VocabularyExport.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/VocabularyExport.jpg"}})])],1)],1)],1),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Dictionaries")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/DictionaryList.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/DictionaryList.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/DictionaryImport.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/DictionaryImport.jpg"}})])],1),e._v(" LinguaCafe comes with no dictionary files by default, but you can download and import them from different sources. JMDict is also supported, which is a popular japanese dictionary with detailed information. You can find more information about it and some other dictionary sources on LinguaCafe's github page. "),t("br"),t("br"),e._v(" You can also use DeepL translator, which allows you to translate 500.000 characters/month for free with machine translation. ")],1)],1),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Kanji and radicals")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/KanjiList.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/KanjiList.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/KanjiDetails.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/KanjiDetails.jpg"}})])],1),e._v(" You can view information about the kanji you know. ")],1)],1),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Jellyfin")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/MediaPlayerList.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/MediaPlayerList.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/MediaPlayerReader.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/MediaPlayerReader.jpg"}})])],1),e._v(" This is a very niche feature, but if it's set up properly, it allows the user to sit down in front of their TV, select something to watch, and have the subtitles opened in LinguaCafe on their phone or tablet."),t("br"),t("br"),e._v(" In LinguaCafe you can import any external subtitles straight from a Jellyfin Media Server. Just start a video on any Jellyfin client, go to the "),t("b",[e._v("Media player page")]),e._v(" in LinguaCafe, and select the subtitle you want to read. "),t("br"),t("br"),e._v(" There will be more ways to import your subtitles from other sources like mpv player, YouTube or straight from subtitle files, and also an option to save them in your library."),t("br"),t("br"),e._v(" Currently only works for TV Shows, it will be fixed soon. ")],1)],1),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Anki")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/AnkiHome.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/AnkiHome.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/AnkiReview.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/AnkiReview.jpg"}})])],1),e._v(" LinguaCafe comes with built-in Anki support. It can send your "),t("span",{staticClass:"highlighted"},[e._v("highlighted words")]),e._v(" to Anki automatically when you highlight them, or you can send them manually. You can find more information about setting it up on the github page. ")],1)],1),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Theming and customization")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/ThemeDark.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/ThemeDark.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/ThemeLight.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/ThemeLight.jpg"}})]),t(h.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/ThemeEink.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/ThemeEink.jpg"}})])],1),e._v(" LinguaCafe comes with a light, dark and e-ink theme. The e-ink theme was created for Onyx Boox e-book readers, but they probably work okay with other e-ink devices as well."),t("br"),t("br"),e._v(" Mobile view is also supported. You can use LinguaCafe from any device that has a browser and at least 340px wide screen. ")],1)],1),t(c.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Feature roadmap")]),t(u.ZB,[e._v(" LinguaCafe has a lot of features planned, but they have no timeline, or order. Please treat it more like a vision, of what LinguaCafe will be in its more developed form. I will choose what to develop next based on community feedback and my own learning needs. "),t("br"),t("br"),e._v(" Some important features that are on the list: "),t("ul",{attrs:{id:"feature-list"}},[t("li",[e._v(" Making installation and update process easier wherever possible. ")]),t("li",[e._v(" Supporting more users on one LinguaCafe server, to make it possible for the community to host one server for multiple people. ")]),t("li",[e._v(" Option to import and export all data. ")]),t("li",[e._v(" More language support. ")]),t("li",[e._v(" Support for multiple font types for the reader (especially useful for Japanese). ")]),t("li",[e._v(" Text reader sentence mode, where you can read the text one sentence at a time. ")]),t("li",[e._v(" Text reader continuous reading mode, where you can scroll between your "),t("b",[e._v("chapters")]),e._v(", and you don't have to click on a link to go to the next "),t("b",[e._v("chapter")]),e._v(". ")]),t("li",[e._v(" Bookmarks. ")]),t("li",[e._v(" Manga reader. ")]),t("li",[e._v(" Activity timeline, that shows your activities. ")]),t("li",[e._v(" Support for treating word families together. ")]),t("li",[e._v(" Jellyfin playback statistics. I want to add a goal, that tracks your listening time of audiobooks and podcasts on Jellyfin. ")]),t("li",[e._v(" Simplified version of vocabulary box when hovering over words. ")]),t("li",[e._v(" Option to make vocabulary box fixed on the right side of the screen, always visible and taking the full height of the screen. ")]),t("li",[e._v(" Right to left, top to bottom reading mode for Japanese. There is already an option for it, but it does not work yet. ")]),t("li",[e._v(" Customisable flashcards with different decks. ")]),t("li",[e._v(" Saving images for words. ")]),t("li",[e._v(" Support for importing audio for words and texts. Also text to speech. ")]),t("li",[e._v(" Browser plugin that allows you to use any text inside the browser. ")]),t("li",[e._v(" Importing text from all sources: youtube captions, subtitle files, manga files, mpv player and others. ")]),t("li",[e._v(" A page where you can create sheets to practice Japanese writing either on touch devices, or by printing out the sheets on paper. ")])]),t("br"),e._v(" As you can see i have a lot of plans for LinguaCafe, and it will take a long time to finish all of them. It is not something I write only for the purpose to make something useful, it is also my hobby, and i will keep working on it probably forever. "),t("br"),t("br"),e._v(" I will also write a tool that shares my project management tool's tasks in real time, so you can see all the planned features, known bugs and developement progress in real time. ")])],1)],1)},y=[],b={data:function(){return{overlay:{active:!1,img:""}}},methods:{openImage(e){this.overlay.active=!0,this.overlay.img=e}}},w=b,_=a(1),k=(0,_.Z)(w,f,y,!1,null,null,null),Z=k.exports,C={name:"App",components:{Home:Z},data:()=>({})},j=C,x=(0,_.Z)(j,l,g,!1,null,null,null),I=x.exports,L=a(154);r.ZP.use(L.Z);var B=new L.Z({theme:{dark:!0,themes:{dark:{background:"#1C1B20",foreground:"#28272C",primary:"#B59686",secondary:"#C5947D",text:"#c3c3c3",textDark:"#141110",newWord:"#ffdd4b",highlightedWord:"#61df6b"}}}});r.ZP.config.productionTip=!1,new r.ZP({vuetify:B,render:function(e){return e(I)}}).$mount("#app")}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,i,o){if(!r){var n=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],o=e[c][2];for(var s=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(s=!1,o<n&&(n=o));if(s){e.splice(c--,1);var g=i();void 0!==g&&(t=g)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,i,o]}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,n=r[0],s=r[1],l=r[2],g=0;if(n.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(l)var c=l(a)}for(t&&t(r);g<n.length;g++)o=n[g],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},r=self["webpackChunklingua_cafe_home"]=self["webpackChunklingua_cafe_home"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(800)}));r=a.O(r)})();
//# sourceMappingURL=app.2731a8c5.js.map