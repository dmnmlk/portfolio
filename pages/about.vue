<template>
  <v-container>
    <div class="mx-auto mw720">
      <div class="text-h1 hero-text mb-8">
        About me
      </div>
      <div class="text-body-1">
        I'm Damian Malek, product designer with front-end development background. With over 2 years of experience in UX field I was involved in several projects from different industries - from e-commerce website selling spare parts for cars to b2b website for furniture retailer. Prior to design roles, I was working as front-end and occasionally back-end developer for nearly 4 years.
      </div>
      <div class="text-h4 font-weight-bold mb-4 mt-8">
        Timeline
      </div>
      <v-timeline>
        <v-timeline-item>
          <v-row class="pt-1">
            <v-col
              cols="2"
              align-self="center"
            >
              <strong>2016</strong>
            </v-col>
            <v-col
              cols="10"
            >
              Started my professional career as software developer
            </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item>
          <v-row class="pt-1">
            <v-col
              cols="10"
            >
              Graduated from Rzeszow University of Technology with master degree in computer engineering
            </v-col>
            <v-col
              cols="2"
              align-self="center"
            >
              <strong>2018</strong>
            </v-col>
          </v-row>
        </v-timeline-item>
        <v-timeline-item>
          <v-row class="pt-1">
            <v-col
              cols="2"
              align-self="center"
            >
              <strong>2021</strong>
            </v-col>
            <v-col
              cols="10"
            >
              <div>
                Started teaching product design at University of Information Technology and Management in Rzeszów
              </div>
              <div class="mt-4">
                Earned <a href="https://www.credly.com/badges/eb88efda-64f2-4bf7-be08-415f66df2401" target="_blank" rel="noopener noreferrer">Google UX Design Certificate</a>
              </div>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
      <div class="text-h4 font-weight-bold mb-4 mt-8">
        How it started
      </div>
      <div class="text-body-1">
        I started to be interested in human-centered design during my journey as web developer when I realized that testing with the end user should be mandatory and often that was not the case. After almost a year of intesive self-development in improving my UX skills, I was able to design my first research-based project for commercial client. Meanwhile I started conducting usability tests in company to improve our internal products.
      </div>
      <div class="text-h4 font-weight-bold mb-4 mt-8">
        What I value
      </div>
      <div class="text-body-1">
        As a designer I value ability to get in touch with real users and solve their real problems. In addition, I value good communication within the team, because I believe that has a direct impact on the final result of the project. My work is based on understanding the user needs, and while designing I actively use my own design systems that allows fast-paced iterations between versions of my design.
      </div>
      <div class="text-h4 font-weight-bold mb-4 mt-8">
        Sentences I identify with
      </div>
      <div class="text-body-1">
        Fighting with biases everyday
      </div>
      <div class="text-body-1 mt-2">
        Engineer by qualification, designer by choice
      </div>
      <div class="text-h4 font-weight-bold mb-4 mt-16">
        Personal life
      </div>
      <div class="d-flex justify-space-between align-center align-sm-start flex-column flex-sm-row">
        <div class="personal-life text-body-1">
          I live in Rzeszów. In my free time I like to hike with my fiancée in Polish mountains.
          <div
            v-if="$vuetify.breakpoint.xsOnly"
            class="mt-6"
          >
            That's me! ⬇️
          </div>
          <div
            v-else
            class="mt-6"
          >
            That's me! ➡️
          </div>
        </div>
        <v-img
          class="mt-4 mt-sm-0"
          :src="require('~/assets/images/about_me/photo.jpg')"
          :lazy-src="require('~/assets/images/about_me/photo.jpg')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '75%' : '45%'"
        />
      </div>
      <div class="text-body-1 mt-16 mb-4">
        Thanks for visiting my website!
      </div>
      <div class="text-body-1">
        Want to get in touch? Feel free to contact me via mail or linkedin
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
@import '~vuetify/src/styles/styles.sass';
.hero-text {
  margin-top: 200px;
}

.personal-life {
  max-width: 45%;

  @media #{map-get($display-breakpoints, 'xs-only')} {
    max-width: 100%;
  }
}
</style>
