<template>
  <v-container>
    <div class="above-the-fold">
      <div class="text-and-image">
        <div class="text-h1">
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
    <div class="cs-project-scope centered-text">
      <div class="text-h3 font-weight-bold">
        Project scope
      </div>
      <div class="details">
        <div class="detail">
          <div class="detail-prop text-body-1 font-weight-bold">
            Project name:
          </div>
          <div class="detail-val text-body-1">
            Hiking mApp
          </div>
        </div>
        <div class="detail">
          <div class="detail-prop text-body-1 font-weight-bold">
            Project type:
          </div>
          <div class="detail-val text-body-1">
            Concept project
          </div>
        </div>
        <div class="detail">
          <div class="detail-prop text-body-1 font-weight-bold">
            Timeline:
          </div>
          <div class="detail-val text-body-1">
            4 weeks
          </div>
        </div>
        <div class="detail">
          <div class="detail-prop text-body-1 font-weight-bold">
            Team:
          </div>
          <div class="detail-val text-body-1">
            only me as UX Researcher, UX/UI Designer
          </div>
        </div>
        <div class="detail">
          <div class="detail-prop text-body-1 font-weight-bold">
            Tools:
          </div>
          <div class="detail-val text-body-1">
            Figma, Maze, Notion, Google Forms
          </div>
        </div>
        <div class="detail">
          <div class="detail-prop text-body-1 font-weight-bold">
            Deliverables:
          </div>
          <div class="detail-val text-body-1">
            Survey results, personas, competitor analysis, low & high fi designs, prototypes, usability test reports with insights
          </div>
        </div>
      </div>
    </div>
    <div class="cs-overview centered-text">
      <div class="text-h3 font-weight-bold">
        Overview
      </div>
      <div class="text-body-1">
        Hiking mApp is an application for people who loves to hike outdoor. You can create new routes to find information about trail distance, estimated time etc. However, this application is different from competition because it introduces "Goals & Achievements" panel in user menu which is targeted for users that are collecting badges. Badges are rewards eg. for reaching all the peaks in given mountain region. All this information can be added to user profile so it can be collected over the years to give sense of achievement. App is encouraging people to hike more often and be more healthy!
      </div>
    </div>
    <div class="cs-challenges centered-text">
      <div class="text-h3 font-weight-bold">
        Challenges
      </div>
      <div class="cs-how-might-we">
        <div class="text-h4">
          How might we use maps to display relevant data?
        </div>
        <div class="text-body-1">
          Currently, it's possible to create user maps in Google Maps but they have significant downsides such as no marked hiking trails on the map.
        </div>
      </div>
      <div class="cs-how-might-we">
        <div class="text-h4">
          How might we create application for people to store information about collected badges from hiking?
        </div>
        <div class="text-body-1">
          Right now, people collecting hiking badges must browse internet for specifical information. Most often these informations are stored in outdate pages that are not intuitive at all and are unusable on mobile devices.
        </div>
      </div>
      <div class="cs-how-might-we">
        <div class="text-h4">
          How might we encourage users to fill in information about their acquired badges?
        </div>
        <div class="text-body-1">
          Ease of use and intuitive design should lead to convenient filling of their badge information. This should be based on gamification principles which are inseparable from the application.
        </div>
      </div>
    </div>
    <div class="cs-goals centered-text">
      <div class="text-h3 font-weight-bold">
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
    <div class="cs-sections centered-text">
      <div class="text-h3 font-weight-bold">
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
  </v-container>
</template>
<script>
export default {
  layout: ctx => ctx.isTablet ? 'tablet' : (ctx.isDesktop ? 'desktop' : 'default')
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1080px;
  }

  .above-the-fold {
    height: calc(100vh - 57px); //57px ma desktop header
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .arrow-container {
    width: 40px;
  }

  .text-and-image {
    width: 720px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media #{map-get($display-breakpoints, 'xs-only')} {
      flex-direction: column-reverse;
    }

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      width: initial;
    }

    & .text-h1 {
      max-width: 340px;
      @media #{map-get($display-breakpoints, 'sm-and-down')} {
        margin-top: 40px;
      }
    }
  }

  .cs-project-scope {
    & .detail {
      display: flex;
      margin-bottom: 16px;
      justify-content: space-between;
    }
    & .detail-prop {
      width: 200px;
    }

    & .detail-val {
      width: 500px;
    }
  }

  .cs-how-might-we {
    margin-bottom: 32px;
    & .text-h4 {
      margin-bottom: 8px;
    }
  }

  @-webkit-keyframes downarrow {
    0% { -webkit-transform: translateY(0); opacity: 0.6 }
    100% { -webkit-transform: translateY(0.4em); opacity: 1 }
  }
  .arrow-down {
    -webkit-animation: downarrow 1.0s infinite alternate ease-in-out;
  }
</style>
