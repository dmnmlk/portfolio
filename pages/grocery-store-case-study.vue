<template>
  <v-container>
    <div class="above-the-fold  d-flex flex-column justify-space-around align-center">
      <div class="text-and-image d-flex align-center justify-space-between flex-column-reverse flex-sm-row">
        <div class="text-h1 mt-10 mt-md-0">
          Grocery Store case study
        </div>
        <v-img
          :src="require('~/assets/images/grocery_store/grocery_store.png')"
          :lazy-src="require('~/assets/images/grocery_store/grocery_store.png')"
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
              </li>>
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
                Research findings (survey, personas, user stories, problem statements, storyboards, pain points)
              </li>
              <li>
                Wireframes
              </li>
              <li>
                High fidelity designs
              </li>
              <li>
                Insights from usability studies
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
          Grocery Store is a responsive website that allows customers to deliver groceries to their doorsteps. The website also allows for a click & collect mechanism where a customer is placing an order on the website and is driving for the groceries to the pickup point. Additionally, the website provides a grocery list option so that customers can save their most frequently bought products so they have them in one place to purchase again.
        </div>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          The problem
        </div>
        <div class="text-body-1">
          People that do grocery shopping increasingly are willing to buy groceries online to their houses or through click & collect. The availability of such solutions on the market is still low so this concept project is addressed to solve this problem.
        </div>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          The goal
        </div>
        <div class="text-body-1">
          The main goal is to design a responsive website where it will be possible to place an order for groceries to deliver them to home or in form of click & collect.
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
        Survey
      </div>
      <div class="text-body-1 mx-auto mw720">
        The first thing that was made to better understand how many people can benefit from this type of product was surveys. 140 people participated in the survey, it contained 9 questions.
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
              :src="require('~/assets/images/grocery_store/survey/1.png')"
              :lazy-src="require('~/assets/images/grocery_store/survey/1.png')"
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
              :src="require('~/assets/images/grocery_store/survey/2.png')"
              :lazy-src="require('~/assets/images/grocery_store/survey/2.png')"
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
              :src="require('~/assets/images/grocery_store/survey/3.png')"
              :lazy-src="require('~/assets/images/grocery_store/survey/3.png')"
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
          Almost half of the people who participated in the survey are getting to the grocery store by car. It shows that there's potential that they
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          2 out of 3 people participated in survey does grocery shopping every other day
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          over 63 percent of participants would try click & collect if it would be available in their region.
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Personas & user stories
      </div>
      <div class="text-body-1 mx-auto mw720">
        Personas were categorized based on data from the survey. There was a trend that someone that is doing grocery shopping every other day is doing it by going to the grocery shop by foot. On the contrary, people that are doing groceries every week or even every two weeks are using cars to get to the grocery store. Both personas could have different expectations from a website but both of them would benefit from using it.
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/grocery_store/personas/1.png')"
          :lazy-src="require('~/assets/images/grocery_store/personas/1.png')"
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
        Additionally, user stories was made to better understand future customers:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          As someone who often does grocery shopping, I want to buy grocery from home, so that I can save a lot of time
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          As someone who often does grocery shopping, I want to get information about grocery promotions on my phone, so that I can follow all promotions that are currently run.
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          As someone who rarely does grocery shopping, I want to select an exact date when I will be picking up products so that I can organize my day better.
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          As someone who rarely does grocery shopping, I want to have my grocery list inside an online grocery shop, so that I don't have to use other apps just for the grocery lists.
        </li>
      </ul>
    </div>
    <div id="section-2">
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        2. Ideate
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Paper sketches
      </div>
      <div class="text-body-1 mx-auto mw720">
        After determining what the customer types are, paper wireframes were made to quickly iterate between ideas and find solutions that could work for a website.
      </div>
      <v-img
        class="mt-6"
        :src="require('~/assets/images/grocery_store/paper_sketches/1.jpg')"
        :lazy-src="require('~/assets/images/grocery_store/paper_sketches/1.jpg')"
        contain
      />
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Design challenges
      </div>
      <div class="text-body-1 mx-auto mw720">
        While iterating on paper sketches I encounter several challenges that I needed to address to move to the next step:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          how should website behave when customer won't pickup his groceries?
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          what is the best way to inform a customer that his order is ready to be picked up?
        </li>
      </ul>
      <div class="text-body-1 mx-auto mw720 mt-sm-8">
        Those questions were answered by doing crazy 8s. This caused that I have several solutions to choose from and test in an incoming usability study with real users.
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Wireframes
      </div>
      <div class="text-body-1 mx-auto mw720">
        This step was all about transforming paper sketches to Figma. It enables more possibilities to prototype and view this product for the first time in mobile to better understand if it's going in the right direction.
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/grocery_store/wireframes/1m.png')"
          :lazy-src="require('~/assets/images/grocery_store/wireframes/1m.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/grocery_store/wireframes/2m.png')"
          :lazy-src="require('~/assets/images/grocery_store/wireframes/2m.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/grocery_store/wireframes/3m.png')"
          :lazy-src="require('~/assets/images/grocery_store/wireframes/3m.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
      </div>
      <div class="text-body-1 mx-auto mw720 my-6">
        After deciding what the application should look like, a desktop version was created.
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/grocery_store/wireframes/1d.png')"
          :lazy-src="require('~/assets/images/grocery_store/wireframes/1d.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '45%' : '508px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/grocery_store/wireframes/2d.png')"
          :lazy-src="require('~/assets/images/grocery_store/wireframes/2d.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '45%' : '508px'"
        />
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        High fidelity designs
      </div>
      <div class="text-body-1 mx-auto mw720">
        High fidelity designs were made to enable the possibility of add real products to start writing scenarios that usability study participants would have to work on.
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/grocery_store/mockups/1m.png')"
          :lazy-src="require('~/assets/images/grocery_store/mockups/1m.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/grocery_store/mockups/2m.png')"
          :lazy-src="require('~/assets/images/grocery_store/mockups/2m.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/grocery_store/mockups/3m.png')"
          :lazy-src="require('~/assets/images/grocery_store/mockups/3m.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
      </div>
    </div>
    <div id="section-3">
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        3. Prototype & test
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Usability studies
      </div>
      <div class="text-body-1 mx-auto mw720">
        I conducted unmoderated usability studies with several people. After few rounds, I had a lot of great material to synthesize and turn them into insights. The test consisted of 4 tasks:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          place an order for groceries
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          find the QR code that you will beed to pick up groceries
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          add to shopping list selected products
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          add products directly to the cart from the promotional newsletter
        </li>
      </ul>
      <div class="text-body-1 mx-auto mw720">
        On the next iteration on product most prioritized problems were addressed first.
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
          buying without registration and how it affects grocery lists
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          thoughtful tablet design
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Key takeaways
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          making mobile-first responsive web design made it possible for me to focus on the most important elements first.
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          understanding what obstacles can come while designing for grocery industry
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        What could I improve on my next project
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          better understand my biases towards given topic, while conducting usability study
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          high fidelity designs need more polishing in regards of shadows and colour harmony.
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
