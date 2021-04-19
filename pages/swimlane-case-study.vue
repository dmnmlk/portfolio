<template>
  <v-container>
    <div class="above-the-fold  d-flex flex-column justify-space-around align-center">
      <div class="text-and-image d-flex align-center justify-space-between flex-column-reverse flex-sm-row">
        <div class="text-h1 mt-10 mt-md-0">
          Swimlane case study
        </div>
        <v-img
          :src="require('~/assets/images/swimlane/swimlane.png')"
          :lazy-src="require('~/assets/images/swimlane/swimlane.png')"
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
            2 weeks
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
                Google Forms
              </li>
              <li>
                Notion
              </li>
              <li>
                Maze
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
                Research findings (Interview insights, Personas, user journey map, value proposition)
              </li>
              <li>
                Wireframes
              </li>
              <li>
                Usability study insights
              </li>
              <li>
                High fidelity designs
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
          <strong>Swimlane</strong> enables customers to buy tickets to the swimming pool. Also, there a possibility to book a spot in the swimming pool without the need to pay for the ticket. App gives the opportunity to use membership cards that are often being used in the real world. Users can search through swimming pools that are located nearby his geolocation and find fresh reviews from other swimmers.
        </div>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          The problem
        </div>
        <div class="text-body-1">
          More and more people want to schedule their swimming pool attendance but at the same time, swimming pools are getting packed too. When the pool is over-crowded there is a lot of people in one swim lane and swimming at a stable pace is impossible so people are getting frustrated. This app comes out to meet this obstacle. It allows customers to reserve and book a spot in crowded hours so they can be sure that there will be a place for everyone. Additionally, Swimlane strives to reduce standing in line for tickets.
        </div>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          The goal
        </div>
        <div class="text-body-1">
          The primary goal is to design a functional and tested solution that can help people schedule their swimming exercises faster and without frustrations.
        </div>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          Case study sections:
        </div>
        <ol>
          <li class="mt-4">
            <a href="#section-1">
              Empathize & define
            </a>
          </li>
          <li class="mt-4">
            <a href="#section-2">
              Ideate & test low fidelity wireframes
            </a>
          </li>
          <li class="mt-4">
            <a href="#section-3">
              High fidelity designs
            </a>
          </li>
          <li class="mt-4">
            <a href="#section-4">
              Conclusions & final thoughts
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div id="section-1">
      <div class="font-weight-bold text-h3 mt-16 mb-8 mx-auto mw720">
        1. Empathize & define
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Interview
      </div>
      <div class="text-body-1 mx-auto mw720">
        I interviewed some people to better understand what problems they encounter with swimming pools. I prepared interview goals, questions, and target participant characteristics.
      </div>
      <div class="text-body-1 font-weight-bold mx-auto mw720 mt-8">
        Interview goal
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          I want to understand what problems swimmer face trying to buy a ticket for a swimming pool online
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          I want to identify common frustrations if they ever used app for buying swimming ticket
        </li>
      </ul>
      <div class="text-body-1 font-weight-bold mx-auto mw720 mt-8">
        Interview questions
      </div>
      <div class="text-body-1 mx-auto mw720 mt-6 mb-3">
        For someone that have experience with similar apps:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720">
          What challenges do you face using app that sells swimming tickets?
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          Is there anything that can be done in current apps to better adress Your needs?
        </li>
      </ul>
      <div class="text-body-1 mx-auto mw720 mt-6 mb-3">
        For someone who didn't use similar apps in past:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720">
          Would You want to try app that enables buying swimming pool tickets online? why?
        </li>
      </ul>
      <div class="text-body-1 mx-auto mw720 mt-6 mb-3">
        For everyone:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720">
          Can You describe Your typical visit to the swimming pool (from the moment when You enter the building to entering the pool itself)?
        </li>
      </ul>
      <div class="text-body-1 font-weight-bold mx-auto mw720 mt-8">
        Target participant characteristics
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          Going to swimming pool systematically
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          Age doesn't matter
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          Include participants with different abilities
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Personas
      </div>
      <div class="text-body-1 mx-auto mw720">
        Based on my interviews I was able to differenciate two different user types
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/personas/1.png')"
          :lazy-src="require('~/assets/images/swimlane/personas/1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '45%' : '508px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/personas/2.png')"
          :lazy-src="require('~/assets/images/swimlane/personas/2.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '45%' : '508px'"
        />
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        User journey map
      </div>
      <div class="text-body-1 mx-auto mw720">
        Persona: Leon
      </div>
      <div class="text-body-1 mx-auto mw720">
        Goal: purchase swimming pool tickets via app and attending swimming pool
      </div>
      <v-img
        class="mt-6"
        :src="require('~/assets/images/swimlane/user_journey_map/1.png')"
        :lazy-src="require('~/assets/images/swimlane/user_journey_map/1.png')"
        contain
      />
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Value proposition
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          users will be able to connect their overall fitness cards to app to use their functions
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          users will be able to book a swimming pool ticket from home with the knowledge that a spot in the swimming pool is reserved
        </li>
      </ul>
    </div>
    <div id="section-2">
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        2. Ideate and test low fidelity wireframes
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        User flow
      </div>
      <v-img
        class="mt-6"
        :src="require('~/assets/images/swimlane/user_flow/1.png')"
        :lazy-src="require('~/assets/images/swimlane/user_flow/1.png')"
        contain
      />
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Paper sketches
      </div>
      <div class="text-body-1 mx-auto mw720">
        First wireframes was sketched on paper, I started with 6 ideas for homepage and narrowed them to two, one for new user, second for returning user.
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/paper_sketches/1.jpg')"
          :lazy-src="require('~/assets/images/swimlane/paper_sketches/1.jpg')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '45%' : '508px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/paper_sketches/2.jpg')"
          :lazy-src="require('~/assets/images/swimlane/paper_sketches/2.jpg')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '45%' : '508px'"
        />
      </div>

      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        DIgital wireframes
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/wireframes/1.png')"
          :lazy-src="require('~/assets/images/swimlane/wireframes/1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '22%' : '250px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/wireframes/2.png')"
          :lazy-src="require('~/assets/images/swimlane/wireframes/2.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '22%' : '250px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/wireframes/3.png')"
          :lazy-src="require('~/assets/images/swimlane/wireframes/3.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '22%' : '250px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/wireframes/4.png')"
          :lazy-src="require('~/assets/images/swimlane/wireframes/4.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '22%' : '250px'"
        />
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Usability study
      </div>
      <div class="text-body-1 mx-auto mw720">
        To validate my ideas I prepared a prototype with few tasks to complete for people that I interviewed earlier in the process that way I can check if their needs are met.
      </div>
      <div class="text-body-1 mx-auto mw720">
        Selected pain points:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          information about number of left tickets was not visible enough
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          schedule menu option was hard to understand for 2 out of 5 participants
        </li>
      </ul>
    </div>
    <div id="section-3">
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        3. High fidelity designs
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Stickersheet
      </div>
      <v-img
        class="mt-6 mx-auto"
        :src="require('~/assets/images/swimlane/stickersheet/1.png')"
        :lazy-src="require('~/assets/images/swimlane/stickersheet/1.png')"
        contain
        :max-width="$vuetify.breakpoint.xsOnly ? '100%' : '422px'"
      />
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Final designs
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/mockups/1.png')"
          :lazy-src="require('~/assets/images/swimlane/mockups/1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/mockups/2.png')"
          :lazy-src="require('~/assets/images/swimlane/mockups/2.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/mockups/3.png')"
          :lazy-src="require('~/assets/images/swimlane/mockups/3.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/mockups/4.png')"
          :lazy-src="require('~/assets/images/swimlane/mockups/4.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/mockups/5.png')"
          :lazy-src="require('~/assets/images/swimlane/mockups/5.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/swimlane/mockups/6.png')"
          :lazy-src="require('~/assets/images/swimlane/mockups/6.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
      </div>
    </div>
    <div id="section-4">
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        4. Conclusions & final thoughts
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Ideas for future designs & tests
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          The next thing that I would do on working with this project is to test a high-fidelity prototype with people.
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Adding possibility to reserve group activities in swimming pool, so one person can reserve whole pool
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Adding more info about swimming pool (description, contact info)
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Key takeaway
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Including user perspective from beginning is the key to the success
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        What I could improve upon my next project
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Now knowing about the basics about iOS app design I can use this knowledge to level up my next project
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
    // background-color:#EEECE8;
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
