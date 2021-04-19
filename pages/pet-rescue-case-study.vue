<template>
  <v-container>
    <div class="above-the-fold  d-flex flex-column justify-space-around align-center">
      <div class="text-and-image d-flex align-center justify-space-between flex-column-reverse flex-sm-row">
        <div class="text-h1 mt-10 mt-md-0">
          PetRescue case study
        </div>
        <v-img
          :src="require('~/assets/images/pet_rescue/pet_rescue.png')"
          :lazy-src="require('~/assets/images/pet_rescue/pet_rescue.png')"
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
                Secondary research results
              </li>
              <li>
                Personas
              </li>
              <li>
                Wireframes
              </li>
              <li>
                High fidelity designs
              </li>
              <li>
                Usability study insights
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
          <strong>PetRescue</strong> is an application to report lost & found pets. It acts as the main source of information on this subject for owners who have lost their pets and for animal shelters who have rescued pets and want to find owners.        </div>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          The problem
        </div>
        <div class="text-body-1">
          The owner that doesn't have microchipped and registered pet in the international database is at risk when the pet gets lost. The last resort in this situation is to put up posters all over the neighborhood and on social media platforms. The presented non-profit project is aiming to solve that problem so owners can have a more reliable platform to find their pet quicker & safer.
        </div>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          The goal
        </div>
        <div class="text-body-1">
          The primary goal is to design a responsive website that will help owners find their pets and animal shelter workers to faster identify rescued pets.
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
              Ideate
            </a>
          </li>
          <li class="mt-4">
            <a href="#section-3">
              Prototype & Test
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
        Secondary research
      </div>
      <div class="text-body-1 mx-auto mw720">
        First of all, I needed to dig into what standard steps and problems occur while pets get lost. For this, I did secondary research on the internet to gather information about relevant topics so I can focus on personas and user journeys. Questions that I need to answer:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          What are standard steps when pet get's lost?
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          What can be done to prevent or reduce risk of losing a pet?
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          What are typical problems from owner and animal shelter worker perspective?
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          How can web/mobile app help to make it easier to find lost pet?
        </li>
      </ul>
      <div class="text-body-1 mx-auto mw720 mt-sm-8">
        Also I analysed popular forums where owners and animal shelter workers were talking about most frequent problems.
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Personas
      </div>
      <div class="text-body-1 mx-auto mw720">
        Since in rescuing/finding a pet is involved owner and animal shelter worker I tried to focus on them first.
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/pet_rescue/personas/1.png')"
          :lazy-src="require('~/assets/images/pet_rescue/personas/1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '45%' : '508px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/grocery_store/personas/2.png')"
          :lazy-src="require('~/assets/images/grocery_store/personas/2.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '45%' : '508px'"
        />
      </div>
      <div class="text-body-1 mx-auto mw720 mt-sm-12">
        Personas were build based on secondary research where I was looking at different forums to better understand animal shelter workers point of view.
      </div>
    </div>
    <div id="section-2">
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        2. Ideate
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Crazy 8s
      </div>
      <div class="text-body-1 mx-auto mw720">
        First views was drawn on paper to grasp an idea how it might look.
      </div>
      <v-img
        class="mt-6"
        :src="require('~/assets/images/pet_rescue/paper_sketches/1.jpg')"
        :lazy-src="require('~/assets/images/pet_rescue/paper_sketches/1.jpg')"
        contain
      />
      <div class="text-body-1 mx-auto mw720 mt-8">
        I took the best parts from different sketches and reproduce them digitally.
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Wireframes
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/pet_rescue/wireframes/1.png')"
          :lazy-src="require('~/assets/images/pet_rescue/wireframes/1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '22%' : '250px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/pet_rescue/wireframes/2.png')"
          :lazy-src="require('~/assets/images/pet_rescue/wireframes/2.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '22%' : '250px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/pet_rescue/wireframes/3.png')"
          :lazy-src="require('~/assets/images/pet_rescue/wireframes/3.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '22%' : '250px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/pet_rescue/wireframes/4.png')"
          :lazy-src="require('~/assets/images/pet_rescue/wireframes/4.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '22%' : '250px'"
        />
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Stickersheet
      </div>
      <div class="text-body-1 mx-auto mw720">
        Additional stickersheet enabled designing new views quicker.
      </div>
      <v-img
        class="mt-6 mx-auto"
        :src="require('~/assets/images/pet_rescue/stickersheet/1.png')"
        :lazy-src="require('~/assets/images/pet_rescue/stickersheet/1.png')"
        contain
        :max-width="$vuetify.breakpoint.xsOnly ? '100%' : '422px'"
      />
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        High fidelity designs
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/pet_rescue/mockups/1.png')"
          :lazy-src="require('~/assets/images/pet_rescue/mockups/1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '22%' : '250px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/pet_rescue/mockups/2.png')"
          :lazy-src="require('~/assets/images/pet_rescue/mockups/2.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '22%' : '250px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/pet_rescue/mockups/3.png')"
          :lazy-src="require('~/assets/images/pet_rescue/mockups/3.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '22%' : '250px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/pet_rescue/mockups/4.png')"
          :lazy-src="require('~/assets/images/pet_rescue/mockups/4.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '22%' : '250px'"
        />
      </div>
    </div>
    <div id="section-3">
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        3. Prototype & test
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Usability study
      </div>
      <div class="text-body-1 mx-auto mw720">
        I sent links to unmoderated usability study to forums that were mentioned earlier in a case study to check if people not related with designing this project was able to complete simple tasks. It turns out most of the tasks were done correctly without too much troubles.
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
          enabling reporting in map for someone who find stray dog
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Key takeaway
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          since this project was designed for a fictional non-profit organization I was able to understand what values this kind of organizations are focused on
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        What I could improve upon my next project
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          on the next project I could be more empathetic and don't focus just on business goals
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
