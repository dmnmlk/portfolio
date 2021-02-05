<template>
  <v-container>
    <div class="above-the-fold  d-flex flex-column justify-space-around align-center">
      <div class="text-and-image d-flex align-center justify-space-between flex-column-reverse flex-sm-row">
        <div class="text-h1 mt-10 mt-md-0">
          Hiking mApp case study
        </div>
        <v-img
          class="mt-10 mt-sm-0"
          :src="require('~/assets/images/homepage/hiking_app.png')"
          :lazy-src="require('~/assets/images/homepage/hiking_app.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '150px' : '291px'"
        />
      </div>
    </div>
    <div class="cs-project-scope mx-auto mw720">
      <div class="text-h3 mt-16 mb-8 font-weight-bold">
        Project scope
      </div>
      <div class="details">
        <div class="detail d-flex flex-column flex-md-row justify-space-between mb-4">
          <div class="detail-prop text-body-1 font-weight-bold">
            Project name:
          </div>
          <div class="detail-val text-body-1">
            Hiking mApp
          </div>
        </div>
        <div class="detail d-flex flex-column flex-md-row justify-space-between mb-4">
          <div class="detail-prop text-body-1 font-weight-bold">
            Project type:
          </div>
          <div class="detail-val text-body-1">
            Concept project
          </div>
        </div>
        <div class="detail d-flex flex-column flex-md-row justify-space-between mb-4">
          <div class="detail-prop text-body-1 font-weight-bold">
            Timeline:
          </div>
          <div class="detail-val text-body-1">
            4 weeks
          </div>
        </div>
        <div class="detail d-flex flex-column flex-md-row justify-space-between mb-4">
          <div class="detail-prop text-body-1 font-weight-bold">
            Team:
          </div>
          <div class="detail-val text-body-1">
            only me as UX Researcher, UX/UI Designer
          </div>
        </div>
        <div class="detail d-flex flex-column flex-md-row justify-space-between mb-4">
          <div class="detail-prop text-body-1 font-weight-bold">
            Tools:
          </div>
          <div class="detail-val text-body-1">
            <ul>
              <li>
                Figma
              </li>
              <li>
                Maze
              </li>
              <li>
                Google Forms
              </li>
            </ul>
          </div>
        </div>
        <div class="detail d-flex flex-column flex-md-row justify-space-between mb-4">
          <div class="detail-prop text-body-1 font-weight-bold">
            Deliverables:
          </div>
          <div class="detail-val text-body-1">
            <ul>
              <li>
                Survey results
              </li>
              <li>
                Personas
              </li>
              <li>
                Competitor analysis
              </li>
              <li>
                Low & high fi designs
              </li>
              <li>
                Prototypes
              </li>
              <li>
                Usability test resports with insights
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          Overview
        </div>
        <div class="text-body-1">
          Hiking mApp is an application for people who loves to hike outdoor. You can create new routes to find information about trail distance, estimated time etc. However, this application is different from competition because it introduces "Goals & Achievements" panel in user menu which is targeted for users that are collecting badges. Badges are rewards eg. for reaching all the peaks in given mountain region. All this information can be added to user profile so it can be collected over the years to give sense of achievement. App is encouraging people to hike more often and be more healthy!
        </div>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          Challenges
        </div>
        <div class="mb-8">
          <div class="text-body-1 font-weight-bold">
            How might we use maps to display relevant data?
          </div>
          <div class="text-body-1">
            Currently, it's possible to create user maps in Google Maps but they have significant downsides such as no marked hiking trails on the map.
          </div>
        </div>
        <div class="mb-8">
          <div class="text-body-1 font-weight-bold">
            How might we create application for people to store information about collected badges from hiking?
          </div>
          <div class="text-body-1">
            Right now, people collecting hiking badges must browse internet for specifical information. Most often these informations are stored in outdate pages that are not intuitive at all and are unusable on mobile devices.
          </div>
        </div>
        <div class="mb-8">
          <div class="text-body-1 font-weight-bold">
            How might we encourage users to fill in information about their acquired badges?
          </div>
          <div class="text-body-1">
            Ease of use and intuitive design should lead to convenient filling of their badge information. This should be based on gamification principles which are inseparable from the application.
          </div>
        </div>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          Goals
        </div>
        <ul>
          <li class="mt-4">
            Creating app that can be used alone on hiking trips without help from other similiar apps. It should have possibility to create routes, mark point of interests, gather data of different badge types and show statistics on completed routes in the past.
          </li>
          <li class="mt-4">
            Designs that includes all application states(success, error, info etc)
          </li>
          <li class="mt-4">
            Fully working prototype that will be used for usability tests and could be handed over to developers.
          </li>
        </ul>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          Case study sections:
        </div>
        <ol>
          <li class="mt-4">
            Initial idea & context
          </li>
          <li class="mt-4">
            Discover & define
          </li>
          <li class="mt-4">
            Design
          </li>
          <li class="mt-4">
            Test
          </li>
          <li class="mt-4">
            Final designs
          </li>
          <li class="mt-4">
            Conslusion & final thoughts
          </li>
        </ol>
      </div>
    </div>
    <div>
      <div class="font-weight-bold text-h3 mt-16 mb-8 mx-auto mw720">
        1. Initial idea & context
      </div>
      <div class="text-body-1 mx-auto mw720">
        During the summer holidays in 2020, I started hiking regularly in the Polish mountains. I discovered the possibility of collecting badges as achievements eg. after conquering all peeks in given mountain region. I started looking for information about badges, how they work and what is needed to earn them. I saw dozens of sites that weren't adapted to mobile phones and looked like this:
      </div>
      <div class="d-flex justify-space-around justify-lg-space-between mt-6 mb-6">
        <v-img
          :src="require('~/assets/images/hiking_app/browser/browser_1.png')"
          :lazy-src="require('~/assets/images/hiking_app/browser/browser_1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '45%' : '250px'"
        />
        <v-img
          :src="require('~/assets/images/hiking_app/browser/browser_2.png')"
          :lazy-src="require('~/assets/images/hiking_app/browser/browser_2.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '45%' : '250px'"
        />
        <v-img
          class="d-none d-md-block"
          :src="require('~/assets/images/hiking_app/browser/browser_3.png')"
          :lazy-src="require('~/assets/images/hiking_app/browser/browser_3.png')"
          contain
          max-width="250px"
        />
        <v-img
          class="d-none d-lg-block"
          :src="require('~/assets/images/hiking_app/browser/browser_4.png')"
          :lazy-src="require('~/assets/images/hiking_app/browser/browser_4.png')"
          contain
          max-width="250px"
        />
      </div>
      <div class="text-body-1 mx-auto mw720">
        Those kind of websited provide information about the regulations, summit list, and other important information during earning badges. After a few days visiting websited of this type, I was starting to wonder if there was any application that was collecting all this information in one place. It turned out that I couldn't find such an application, so I took up the challenge of trying to design an application that would help users to find information about badges in one place.
      </div>
    </div>
    <div>
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        2. Discover & define
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Survey
      </div>
      <div class="text-body-1 mx-auto mw720">
        Conducting the survey was the first step in understanding how many people might be interested in this app. <strong>261 people</strong> participated in the survey, It contained 10 single and multiple choice questions. Additionally, in some questions, users had the option of adding their own answer.
      </div>
      <v-tabs
        class="mx-auto mw720 mt-6"
        background-color="transparent"
        grow
      >
        <v-tab class="text-caption text-sm-body-1 font-weight-bold">
          Diagram 1
        </v-tab>
        <v-tab class="text-caption text-sm-body-1 font-weight-bold">
          Diagram 2
        </v-tab>
        <v-tab class="text-caption text-sm-body-1 font-weight-bold">
          Diagram 3
        </v-tab>
        <v-tab-item>
          <div
            class="survey-item"
          >
            <v-img
              :src="require('~/assets/images/hiking_app/survey/1.png')"
              :lazy-src="require('~/assets/images/hiking_app/survey/1.png')"
              contain
              width="100%"
              height="auto"
            />
          </div>
        </v-tab-item>
        <v-tab-item>
          <div
            class="survey-item"
          >
            <v-img
              :src="require('~/assets/images/hiking_app/survey/2.png')"
              :lazy-src="require('~/assets/images/hiking_app/survey/2.png')"
              contain
              width="100%"
              height="auto"
            />
          </div>
        </v-tab-item>
        <v-tab-item>
          <div
            class="survey-item"
          >
            <v-img
              :src="require('~/assets/images/hiking_app/survey/3.png')"
              :lazy-src="require('~/assets/images/hiking_app/survey/3.png')"
              contain
              width="100%"
              height="auto"
            />
          </div>
        </v-tab-item>
      </v-tabs>
      <div class="text-body-1 mx-auto mw720 mt-sm-12">
        Selected insights:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          Almost one out of four people (22,6%) out there hiking in Polish mountains are collecting badges. This means that there is a <strong>potential for market share</strong> in this app segment.
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          There is a lot missing things in current apps available on market right now.
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Personas
      </div>
      <div class="text-body-1 mx-auto mw720">
        Personas was based on surveys. They have been categorized upon whether someone collects badges or not. Personas was helpful later when I was designing app to remind myself who will ultimately use the app.
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/hiking_app/personas/1.png')"
          :lazy-src="require('~/assets/images/hiking_app/personas/1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '45%' : '508px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/hiking_app/personas/2.png')"
          :lazy-src="require('~/assets/images/hiking_app/personas/2.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '45%' : '508px'"
        />
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Information Architecture
      </div>
      <div class="text-body-1 mx-auto mw720">
        IA was based on surverys and competitor analysis. Modules such as "Badges", "Mountain Crowns" or "Long-distance trails" will be defined later.
      </div>
      <v-img
        class="mt-6"
        :src="require('~/assets/images/hiking_app/ia/ia.png')"
        :lazy-src="require('~/assets/images/hiking_app/ia/ia.png')"
        contain
      />
    </div>
    <div>
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        3. Design
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Whiteboarding
      </div>
      <div class="text-body-1 mx-auto mw720">
        After the discovery / research phase, I started sketching the first views on the whiteboard. It quickly turned out that for some views I have more questions that answers.
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/hiking_app/whiteboard/1.png')"
          :lazy-src="require('~/assets/images/hiking_app/whiteboard/1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '45%' : '508px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/hiking_app/whiteboard/1.png')"
          :lazy-src="require('~/assets/images/hiking_app/whiteboard/1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '45%' : '508px'"
        />
      </div>
      <div class="text-body-1 mx-auto mw720 mt-6">
        Selected design challenges that I encountered during initial sketches are explored in next chapter.
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Exploring ideas on low-fi mockups
      </div>
      <div class="text-above-h4 green-color font-weight-bold mx-auto mw720 mt-10">
        Design challenge #1
      </div>
      <div class="text-body-1 font-weight-bold mx-auto mw720 mb-2">
        How to show list of badges?
      </div>
      <div class="text-body-1 mx-auto mw720">
        I had few ideas on how to create a badge list so that user immediately knew what was going on and what to expect.
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/hiking_app/exploring-ideas/idea_1_concept_1.png')"
          :lazy-src="require('~/assets/images/hiking_app/exploring-ideas/idea_1_concept_1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/hiking_app/exploring-ideas/idea_1_concept_2.png')"
          :lazy-src="require('~/assets/images/hiking_app/exploring-ideas/idea_1_concept_2.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/hiking_app/exploring-ideas/idea_1_concept_3.png')"
          :lazy-src="require('~/assets/images/hiking_app/exploring-ideas/idea_1_concept_3.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
      </div>
      <div class="text-body-1 mx-auto mw720 mt-6">
        Badge grouping was idea that conviced me that I was going in the right direction because I imagine situations where there may be a lot of badges there. In addition, the progress bar, which looks like one to which users are used to, meant that I chose the version on the right for the next stage of design.
      </div>
      <div class="text-above-h4 green-color font-weight-bold mx-auto mw720 mt-10">
        Design challenge #2
      </div>
      <div class="text-body-1 font-weight-bold mx-auto mw720 mb-2">
        How to distinguish POIs on the map at the same time?
      </div>
      <div class="text-body-1 mx-auto mw720">
        POI (Point of interest) - is a point in space that may be useful or worth attention. In my application, these are mainly mountain peaks and observation towers.
      </div>
      <div class="d-flex justify-space-between align-center flex-column flex-sm-row">
        <v-img
          class="mt-6 mb-md-6"
          :src="require('~/assets/images/hiking_app/exploring-ideas/idea_2_concept_1.png')"
          :lazy-src="require('~/assets/images/hiking_app/exploring-ideas/idea_2_concept_1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '33%' : '333px'"
        />
        <v-img
          class="mt-6 mb-6 d-none d-sm-block"
          :src="require('~/assets/images/hiking_app/exploring-ideas/idea_2_concept_2.png')"
          :lazy-src="require('~/assets/images/hiking_app/exploring-ideas/idea_2_concept_2.png')"
          contain
          :max-width="$vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly ? '63%' : '666px'"
        />
        <v-img
          class="mt-6 mb-6 d-block d-sm-none"
          :src="require('~/assets/images/hiking_app/exploring-ideas/idea_2_concept_2_mobile.png')"
          :lazy-src="require('~/assets/images/hiking_app/exploring-ideas/idea_2_concept_2_mobile.png')"
          contain
          max-width="100%"
        />
      </div>
      <div class="text-body-1 mx-auto mw720">
        As the clickable area of the map should be as large as possible, I decided to use the map legend from the second version. When it comes to the presentation of several POIs in one place, I chose the version from the second idea for design transparency. However, I left the idea of grouping pins for future testing because at this stage it was hard to say what would be better.
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Design system
      </div>
      <div class="text-body-1 mx-auto mw720">
        The design system (like the design) was created in Figma.I used variants to make it easier to work with multiple versions of one components.
      </div>
      <div class="d-flex justify-space-between align-center flex-column flex-sm-row">
        <v-img
          class="mt-6 mb-md-6"
          :src="require('~/assets/images/hiking_app/design-system/1.png')"
          :lazy-src="require('~/assets/images/hiking_app/design-system/1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '38%' : '400px'"
        />
        <v-img
          class="mt-6 mb-6"
          :src="require('~/assets/images/hiking_app/design-system/2.png')"
          :lazy-src="require('~/assets/images/hiking_app/design-system/2.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '58%' : '600px'"
        />
      </div>
      <div class="text-body-1 mx-auto mw720">
        The design system itself significantly accelerated my work as a source of truth.
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        8px grid
      </div>
      <div class="text-body-1 mx-auto mw720">
        Additionally I made whole application using 8pt grid.
      </div>
      <div class="d-flex justify-space-around justify-sm-center mt-6 mb-6">
        <v-img
          class="mt-6 mb-6 mr-sm-10"
          :src="require('~/assets/images/hiking_app/8pxgrid/1.png')"
          :lazy-src="require('~/assets/images/hiking_app/8pxgrid/1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '45%' : '250px'"
        />
        <v-img
          class="mt-6 mb-6"
          :src="require('~/assets/images/hiking_app/8pxgrid/2.png')"
          :lazy-src="require('~/assets/images/hiking_app/8pxgrid/2.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '45%' : '250px'"
        />
      </div>
      <div class="text-body-1 mx-auto mw720">
        It made my design more consistent across different views.
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        High fidelity designs
      </div>
      <div class="d-flex justify-space-between">
        <v-img
          class="mt-6 mb-6"
          :src="require('~/assets/images/hiking_app/high-fi-designs/1.png')"
          :lazy-src="require('~/assets/images/hiking_app/high-fi-designs/1.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '30%' : '14%'"
        />
        <v-img
          class="mt-6 mb-6"
          :src="require('~/assets/images/hiking_app/high-fi-designs/2.png')"
          :lazy-src="require('~/assets/images/hiking_app/high-fi-designs/2.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '30%' : '14%'"
        />
        <v-img
          class="mt-6 mb-6"
          :src="require('~/assets/images/hiking_app/high-fi-designs/3.png')"
          :lazy-src="require('~/assets/images/hiking_app/high-fi-designs/3.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '30%' : '14%'"
        />
        <v-img
          class="mt-6 mb-6 d-none d-md-block"
          :src="require('~/assets/images/hiking_app/high-fi-designs/4.png')"
          :lazy-src="require('~/assets/images/hiking_app/high-fi-designs/4.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '30%' : '14%'"
        />
        <v-img
          class="mt-6 mb-6 d-none d-md-block"
          :src="require('~/assets/images/hiking_app/high-fi-designs/5.png')"
          :lazy-src="require('~/assets/images/hiking_app/high-fi-designs/5.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '30%' : '14%'"
        />
        <v-img
          class="mt-6 mb-6 d-none d-md-block"
          :src="require('~/assets/images/hiking_app/high-fi-designs/6.png')"
          :lazy-src="require('~/assets/images/hiking_app/high-fi-designs/6.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '30%' : '14%'"
        />
      </div>
      <div class="d-flex justify-space-between">
        <v-img
          class="mt-6 mb-6"
          :src="require('~/assets/images/hiking_app/high-fi-designs/7.png')"
          :lazy-src="require('~/assets/images/hiking_app/high-fi-designs/7.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '30%' : '14%'"
        />
        <v-img
          class="mt-6 mb-6"
          :src="require('~/assets/images/hiking_app/high-fi-designs/8.png')"
          :lazy-src="require('~/assets/images/hiking_app/high-fi-designs/8.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '30%' : '14%'"
        />
        <v-img
          class="mt-6 mb-6"
          :src="require('~/assets/images/hiking_app/high-fi-designs/9.png')"
          :lazy-src="require('~/assets/images/hiking_app/high-fi-designs/9.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '30%' : '14%'"
        />
        <v-img
          class="mt-6 mb-6 d-none d-md-block"
          :src="require('~/assets/images/hiking_app/high-fi-designs/10.png')"
          :lazy-src="require('~/assets/images/hiking_app/high-fi-designs/10.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '30%' : '14%'"
        />
        <v-img
          class="mt-6 mb-6 d-none d-md-block"
          :src="require('~/assets/images/hiking_app/high-fi-designs/11.png')"
          :lazy-src="require('~/assets/images/hiking_app/high-fi-designs/11.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '30%' : '14%'"
        />
        <v-img
          class="mt-6 mb-6 d-none d-md-block"
          :src="require('~/assets/images/hiking_app/high-fi-designs/12.png')"
          :lazy-src="require('~/assets/images/hiking_app/high-fi-designs/12.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '30%' : '14%'"
        />
      </div>
    </div>
    <div>
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        4. Test
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Unmoderated usability tests
      </div>
      <div class="text-body-1 mx-auto mw720">
        I conduceted 15 unmoderated usability tests with users who had experience with using this type of application. I ran the tests using the Maze tool (https://maze.design). The tests consisted of 4 tasks:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Add a route
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Add a Long-distance trail
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Add two Mountain Crowns
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Show all points for two different Mountain Crowns on the map
        </li>
      </ul>
      <div class="text-body-1 mx-auto mw720 mt-10">
        Selected results and insights:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          The bounce rate was 0% so no task was abadoned
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          The average misclick rate was just 4.2% which means the touchpointa were well designed
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Moderated usability tests
      </div>
      <v-img
        class="mt-6"
        :src="require('~/assets/images/hiking_app/test/1.jpg')"
        :lazy-src="require('~/assets/images/hiking_app/test/1.jpg')"
        max-height="550px"
      />
      <div class="text-body-1 mx-auto mw720 mt-10">
        Additionally, I conducted 5 moderated usability tests with similar tasks so that I could see the user's reactions to the application in the real time.
      </div>
      <div class="text-body-1 mx-auto mw720">
        User quotes:
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4 quote">
        “l It's not for me since I don’t collect badges, but maybe one day I will start”
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4 quote">
        “So you can add several points on one map? Interesting”
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4 quote">
        “l It's really easy to add new goals and everything is intuitive”
      </div>
      <div class="text-body-1 mx-auto mw720 mt-10">
        After analizysing usability tests I found few pain points that was immediately fixed:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          No proposed results in search
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Lack of restictions when selecting badge tiers
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Lack of "show all summits on map" button in summit list view
        </li>
      </ul>
    </div>
    <div>
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        5. Final designs
      </div>
      <div class="text-and-image d-flex align-center justify-space-between flex-column flex-sm-row mx-auto mw720 mt-8 mt-md-16">
        <div>
          <div class="text-h4 mt-12 mb-4 font-weight-bold">
            Routes
          </div>
          <div class="text-body-1">
            With a few simple steps, the user can save his route in account.
          </div>
        </div>
        <video
          class="mt-8 mt-md-0"
          :width="$vuetify.breakpoint.smAndDown ? '194px' : '291px'"
          :height="$vuetify.breakpoint.smAndDown ? '412px' : '618px'"
          autoplay
          loop
          muted
          playsinline
        >
          <source src="~/assets/images/hiking_app/mp4/1.webm" type="video/webm">
          <source src="~/assets/images/hiking_app/mp4/1.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="text-and-image d-flex align-center justify-space-between flex-column-reverse flex-sm-row mx-auto mw720 mt-8 mt-md-16">
        <video
          class="mt-8 mt-md-0"
          :width="$vuetify.breakpoint.smAndDown ? '194px' : '291px'"
          :height="$vuetify.breakpoint.smAndDown ? '412px' : '618px'"
          autoplay
          loop
          muted
          playsinline
        >
          <source src="~/assets/images/hiking_app/mp4/2.webm" type="video/webm">
          <source src="~/assets/images/hiking_app/mp4/2.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div>
          <div class="text-h4 mt-12 mb-4 font-weight-bold">
            Mountain Crowns
          </div>
          <div class="text-body-1">
            User can see information about several Mountain Crowns at the same time.
          </div>
        </div>
      </div>
      <div class="text-and-image d-flex align-center justify-space-between flex-column flex-sm-row mx-auto mw720 mt-8 mt-md-16">
        <div>
          <div class="text-h4 mt-12 mb-4 font-weight-bold">
            Long-distance trails
          </div>
          <div class="text-body-1">
            User can add trail that can later use for trip planning.
          </div>
        </div>
        <video
          class="mt-8 mt-md-0"
          :width="$vuetify.breakpoint.smAndDown ? '194px' : '291px'"
          :height="$vuetify.breakpoint.smAndDown ? '412px' : '618px'"
          autoplay
          loop
          muted
          playsinline
        >
          <source src="~/assets/images/hiking_app/mp4/3.webm" type="video/webm">
          <source src="~/assets/images/hiking_app/mp4/3.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div>
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        6. Conclusions & final thoughts
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Ideas for future designs & tests
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Possibility to filter badges, Mountain Crowns and long-distance trails after organizer
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Ability to inform user about intersting places along the route he's actually in
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Possibility of dividing the long-distance trails into shorter routes. It might be useful for someone who is planning to begin the route and want divide one long-distance trail into few days.
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Inform people that it is possible to collect badges (e.g. while user is setting his route)
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Key takeaways
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Gamification was big part in this for sure, I was able to understand what drive people to fill their trip information in app.
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Idea from scratch allowed me to fully understand design process from different perspectives.
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        What could I improve on my next project
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          I should have created a design system much earlier, to iterate quicker between different ideas in low and high fidelity designs.
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          I should pay more attention while creating questions for the survey, in later design stages it would be useful to know about e.g. phone that respondents use (android or ios)
        </li>
      </ul>
    </div>
  </v-container>
</template>
<script>
export default {
  layout: ctx => ctx.isTablet ? 'tablet' : (ctx.isDesktop ? 'desktop' : 'default')
}
</script>

<style lang="scss" scoped>
  @import '~vuetify/src/styles/styles.sass';

  .text-and-image {
    width: 720px;

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      width: initial;
    }

    & .text-h1,
    & .text-h4,
    & .text-body-1 {
      max-width: 340px;

      @media #{map-get($display-breakpoints, 'xs-only')} {
        max-width: initial;
      }
    }

  }

  .cs-project-scope {
    & .detail-prop {
      width: 150px;

      @media #{map-get($display-breakpoints, 'sm-and-down')} {
        width: 100%;
      }

    }

    & .detail-val {
      width: 500px;
      @media #{map-get($display-breakpoints, 'sm-and-down')} {
        width: 100%;
      }
    }
  }

  // fixing problem with vuetify tabs
  .survey-item {
    background-color:#EEECE8;
    height: 371px;
    @media (max-width: 700px) {
      height: 350px;
    }
    @media (max-width: 600px) {
      height: 313px;
    }
    @media (max-width: 500px) {
      height: 260px;
    }
    @media (max-width: 400px) {
      height: 205px;
    }
  }
</style>
