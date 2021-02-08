<template>
  <v-container>
    <div class="mx-auto mw720">
      <div class="text-h1 hero-text mb-8">
        About me
      </div>
      <div class="text-body-1">
        I'm Damian Malek, a UX designer with front-end development background. With over 1.5 year of experience in UX field I was involved in several projects from different industries - from e-commerce website selling spare parts for cars to b2b website for furniture retailer. Prior to design roles, I was working as front-end and occasionally back-end developer for nearly 4 years. In 2018 I graduated from Rzeszow University of Technology with master degree in computer engineering.
      </div>
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
      <div class="text-body-1">
        In my free time I hike with my fiancée in ⛰️ Polish mountains. A well-known saying in Poland is "How about giving up everything and going to Bieszczady Mountains" and I'm lucky since I have both! I 🏊 swim whenever possible.
      </div>
      <div class="text-body-1 mt-16 mb-4">
        Thanks for visiting my website!
      </div>
      <div class="text-body-1">
        Want to get in touch? Feel free to contact me via mail or linkedin :)
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  layout: ctx => ctx.isTablet ? 'tablet' : (ctx.isDesktop ? 'desktop' : 'default')
}
</script>

<style scoped>
.hero-text {
  margin-top: 200px;
}
</style>
