<template>
  <v-container>
    <div class="above-the-fold  d-flex flex-column justify-space-around align-center">
      <div class="text-and-image d-flex align-center justify-space-between flex-column-reverse flex-sm-row">
        <div class="text-h1 mt-10 mt-md-0">
          Hiking mApp case study
        </div>
        <v-img
          :src="require('~/assets/images/homepage/hiking_app.png')"
          :lazy-src="require('~/assets/images/homepage/hiking_app.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '118px' : '291px'"
        />
      </div>
      <div class="arrow-container">
        <v-icon
          class="arrow-down"
          x-large
        >
          mdi-chevron-down
        </v-icon>
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
            Figma, Maze, Notion, Google Forms
          </div>
        </div>
        <div class="detail d-flex flex-column flex-md-row justify-space-between mb-4">
          <div class="detail-prop text-body-1 font-weight-bold">
            Deliverables:
          </div>
          <div class="detail-val text-body-1">
            Survey results, personas, competitor analysis, low & high fi designs, prototypes, usability test reports with insights
          </div>
        </div>
      </div>
      <div>
        <div class="text-h4 mt-8 mb-4 font-weight-bold">
          Overview
        </div>
        <div class="text-body-1">
          Hiking mApp is an application for people who loves to hike outdoor. You can create new routes to find information about trail distance, estimated time etc. However, this application is different from competition because it introduces "Goals & Achievements" panel in user menu which is targeted for users that are collecting badges. Badges are rewards eg. for reaching all the peaks in given mountain region. All this information can be added to user profile so it can be collected over the years to give sense of achievement. App is encouraging people to hike more often and be more healthy!
        </div>
      </div>
      <div>
        <div class="text-h4 mt-8 mb-4 font-weight-bold">
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
        <div class="text-h4 mt-8 mb-4 font-weight-bold">
          Goals
        </div>
        <div class="text-body-1">
          1. Creating app that can be used alone on hiking trips without help from other similiar apps. It should have possibility to create routes, mark point of interests, gather data of different badge types and show statistics on completed routes in the past.
        </div>
        <div class="text-body-1">
          2. Designs that includes all application states(success, error, info etc)
        </div>
        <div class="text-body-1">
          3. Fully working prototype that will be used for usability tests and could be handed over to developers.
        </div>
      </div>
      <div>
        <div class="text-h4 mt-8 mb-4 font-weight-bold">
          Case study sections
        </div>
        <div class="text-body-1">
          1. Initial idea & context
        </div>
        <div class="text-body-1">
          2. Discover & define
        </div>
        <div class="text-body-1">
          3. Design
        </div>
        <div class="text-body-1">
          4. Test
        </div>
        <div class="text-body-1">
          5. Final designs
        </div>
        <div class="text-body-1">
          6. Conslusion & final thoughts
        </div>
      </div>
    </div>
    <div>
      <div class="font-weight-bold text-h3 mt-16 mb-8 mx-auto mw720">
        1. Initial idea & context
      </div>
      <div class="text-body-1 mx-auto mw720">
        During the summer holidays in 2020, I started hiking regularly in the Polish mountains. I discovered the possibility of collecting badges as achievements eg. after conquering all peeks in given mountain region. I started looking for information about badges, how they work and what is needed to earn them. I saw dozens of sites that weren't adapted to mobile phones and looked like this:
      </div>
      <div class="d-flex justify-space-between mt-16 mb-16">
        <v-img
          :src="require('~/assets/images/hiking_app/browser/browser_1.png')"
          :lazy-src="require('~/assets/images/hiking_app/browser/browser_1.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '45%' : '258px'"
        />
        <v-img
          :src="require('~/assets/images/hiking_app/browser/browser_2.png')"
          :lazy-src="require('~/assets/images/hiking_app/browser/browser_2.png')"
          contain
          :max-width="$vuetify.breakpoint.smAndDown ? '45%' : '258px'"
        />
        <v-img
          class="d-none d-md-block"
          :src="require('~/assets/images/hiking_app/browser/browser_3.png')"
          :lazy-src="require('~/assets/images/hiking_app/browser/browser_3.png')"
          contain
          max-width="258px"
        />
        <v-img
          class="d-none d-md-block"
          :src="require('~/assets/images/hiking_app/browser/browser_4.png')"
          :lazy-src="require('~/assets/images/hiking_app/browser/browser_4.png')"
          contain
          max-width="258px"
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
      <div class="text-h4 mt-8 mb-4 font-weight-bold mx-auto mw720">
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
    </div>
    <div class="text-body-1 mx-auto mw720 mt-sm-12">
      - Almost one out of four people (22,6%) out there hiking in Polish mountains are collecting badges. This means that there is a potential for market share in this app segment.
    </div>
    <div class="text-body-1 mx-auto mw720 mt-4">
      - There is a lot missing things in current apps available on market right now.
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

    & .text-h1 {
      max-width: 340px;
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
