<template>
  <v-container>
    <div class="mx-auto mw720">
      <div class="text-h1 hero-text mb-8">
        About me
      </div>
      <div class="d-flex flex-column flex-md-row">
        <div class="text-body-1 mr-md-12">
          I'm Damian Małek, UX designer and Business Analyst. While being in UX field since 2019 I was involved in several projects involving different industries from Automotive and Constuction to Information, Advertising and Education industry. Prior to design roles, I was working as web developer for 3 years. From time to time I write articles at <a href="https://damianmalek.medium.com/" target="_blank" rel="noopener noreferrer">Medium</a> and contribute to the Figma community by sharing <a href="https://www.figma.com/@damianmalek" target="_blank" rel="noopener noreferrer">my design files.</a>
        </div>
        <v-img
          class="mt-4 mt-sm-0"
          :src="require('~/assets/images/about_me/photo.jpg')"
          :lazy-src="require('~/assets/images/about_me/photo.jpg')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : '33%'"
        />
      </div>
      <div class="text-h4 font-weight-bold mb-4 mt-8">
        Timeline
      </div>
      <v-timeline
        :dense="$vuetify.breakpoint.mdAndDown"
      >
        <v-timeline-item small>
          <div
            class="d-flex align-center"
          >
            <div
              class="mr-8"
            >
              <strong>2021</strong>
            </div>
            <div>
              <div
                :class="$vuetify.breakpoint.mdAndDown ? 'mt-4' : ''"
              >
                Started teaching product design at UITM in Rzeszow
              </div>
              <div
                class="mt-4"
              >
                Earned <a href="https://www.credly.com/badges/eb88efda-64f2-4bf7-be08-415f66df2401" target="_blank" rel="noopener noreferrer">Google UX Design Certificate</a>
              </div>
            </div>
          </div>
        </v-timeline-item>
        <v-timeline-item small>
          <div
            class="d-flex align-center"
            :class="$vuetify.breakpoint.mdAndDown ? 'flex-row' : 'flex-row-reverse'"
          >
            <div
              :class="$vuetify.breakpoint.mdAndDown ? 'mr-8' : 'ml-8'"
            >
              <strong>2019</strong>
            </div>
            <div>
              Started my career as UX Designer
            </div>
          </div>
        </v-timeline-item>
        <v-timeline-item small>
          <div
            class="d-flex align-center"
          >
            <div
              class="mr-8"
            >
              <strong>2018</strong>
            </div>
            <div>
              Graduated from Rzeszow UoT with Master of Science (MSc) in computer science
            </div>
          </div>
        </v-timeline-item>
        <v-timeline-item small>
          <div
            class="d-flex align-center"
            :class="$vuetify.breakpoint.mdAndDown ? 'flex-row' : 'flex-row-reverse'"
          >
            <div
              :class="$vuetify.breakpoint.mdAndDown ? 'mr-8' : 'ml-8'"
            >
              <strong>2016</strong>
            </div>
            <div>
              Started my professional career as software developer
            </div>
          </div>
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
      <div class="text-body-1 quote">
        Fighting with biases everyday
      </div>
      <div class="text-body-1 mt-2 quote">
        Engineer by qualification, designer by choice
      </div>
      <div class="text-h4 font-weight-bold mb-4 mt-16">
        Personal life
      </div>
      <div class="text-body-1">
        I live in Rzeszów. In my free time I like to hike with my wife and dog in Polish mountains.
      </div>
      <div class="text-body-1 mt-16 mb-4">
        Thanks for visiting my website! Want to get in touch? Feel free to contact me via mail or linkedin
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
</style>
