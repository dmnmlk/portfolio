<template>
  <v-container>
    <div
      v-if="$vuetify.breakpoint.mdAndUp"
      class="above-the-fold d-flex flex-column justify-space-around"
    >
      <div class="d-flex align-center justify-space-between flex-column">
        <v-img
          :src="require('~/assets/images/efurniture/efurniture_desktop.png')"
          :lazy-src="require('~/assets/images/efurniture/efurniture_desktop.png')"
          contain
        />
        <div class="text-h1 mt-10 mt-md-0">
          eFurniture case study
        </div>
      </div>
    </div>
    <div
      v-if="$vuetify.breakpoint.smAndDown"
      class="above-the-fold d-flex flex-column justify-space-around align-center"
    >
      <div class="text-and-image d-flex align-center justify-space-between flex-column-reverse flex-sm-row">
        <div class="text-h1 mt-10 mt-md-0">
          eFurniture case study
        </div>
        <v-img
          :src="require('~/assets/images/efurniture/efurniture_mobile.png')"
          :lazy-src="require('~/assets/images/efurniture/efurniture_mobile.png')"
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
            Commercial project
          </div>
        </div>
        <div class="detail d-flex flex-column flex-md-row justify-space-between mb-4">
          <div class="detail-prop text-body-1 font-weight-bold">
            Timeline:
          </div>
          <div class="detail-val text-body-1">
            approx. 120h
          </div>
        </div>
        <div class="detail d-flex flex-column flex-md-row justify-space-between mb-4">
          <div class="detail-prop text-body-1 font-weight-bold">
            Team:
          </div>
          <div class="detail-val text-body-1">
            <ul>
              <li>
                UX Designer / Analyst (me)
              </li>
              <li>
                Project Manager
              </li>
              <li>
                Marketing Specialist
              </li>
              <li>
                SEO Specialist
              </li>
            </ul>
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
                MS Teams
              </li>
              <li>
                Notion
              </li>
            </ul>
          </div>
        </div>
        <div class="detail d-flex flex-column flex-md-row justify-space-between">
          <div class="detail-prop text-body-1 font-weight-bold">
            Deliverables:
          </div>
          <div class="detail-val text-body-1">
            <ul>
              <li>
                Competitive audit
              </li>
              <li>
                Functional Specification that includes Personas, Information Architecture, User Flows and User Stories.
              </li>
              <li>
                Low-fidelity wireframes for desktop and mobile
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <v-alert
          type="info"
          outlined
          color="#424242"
          class="mt-8"
        >
          Note: this case study is based on a commercial project that has NDA limitations. Several changes had to be made to this case study for it to be published.
        </v-alert>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          Overview
        </div>
        <div class="text-body-1">
          <strong>eFurniture</strong> is a e-commerce store for people who are looking for stylish and affordable furniture. The store offers furniture and accessories for the kitchen, bedroom, and other rooms. Users can search through countless inspirations and collections to better fit products to their style. eFurniture wants to expand it's services to offer furniture customization services on website for all kinds of products to suit the user's needs.
        </div>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          Challenges
        </div>
        <div class="d-flex flex-column flex-md-row">
          <div class="text-bignumber mr-8">
            #1
          </div>
          <div class="mb-8">
            <div class="text-body-1 font-weight-bold">
              How to introduce customization of furniture on new shop so it can be an automated process for eFurniture employees?
            </div>
            <div class="text-body-1">
              Until analysis, eFurniture employees were collecting customized orders by phone, but they were not able to answer immediately how much would it cost. Since customers were interested in such informations, web solution must present individual price of element that is part of customized product.
            </div>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row">
          <div class="text-bignumber mr-8">
            #2
          </div>
          <div class="mb-8">
            <div class="text-body-1 font-weight-bold">
              How to integrate systems (CMS, Baselinker and ERP) with each other so that data exchange is as smooth as possible and all changes in prices and product availability are always up-to-date on website?
            </div>
            <div class="text-body-1">
              Since there was no integration with Baselinker in the old store, the way of communication between systems should be thought out so that 25,000 products are up-to-date.
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          Goals
        </div>
        <div class="d-flex flex-column flex-md-row">
          <div class="text-bignumber mr-8">
            #1
          </div>
          <div class="mb-8 text-body-1">
            Build a new e-commerce website for the eFurniture company to improve online sales.
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row">
          <div class="text-bignumber mr-8">
            #2
          </div>
          <div class="mb-8 text-body-1">
            Enable a service for configuring custom-made furniture to offer tailored products to user needs. It can be used as a unique selling point to improve revenue.
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row">
          <div class="text-bignumber mr-8">
            #3
          </div>
          <div class="mb-8 text-body-1">
            Build full-text search engine that helps people find what they're looking.
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row">
          <div class="text-bignumber mr-8">
            #4
          </div>
          <div class="mb-8 text-body-1">
            Ensure that Google Page Speed score is high across different website pages.
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row">
          <div class="text-bignumber mr-8">
            #5
          </div>
          <div class="mb-8 text-body-1">
            Create a website that will be inclusive and should meet WCAG2.1 guidelines.
          </div>
        </div>
      </div>
      <div>
        <div class="text-h4 mt-12 mb-6 font-weight-bold">
          Case study sections:
        </div>
        <ol>
          <li class="mt-4">
            <a href="#section-1">
              Context
            </a>
          </li>
          <li class="mt-4">
            <a href="#section-2">
              Discover & define
            </a>
          </li>
          <li class="mt-4">
            <a href="#section-3">
              Low-fi Design
            </a>
          </li>
          <li class="mt-4">
            <a href="#section-4">
              Functional specification
            </a>
          </li>
          <li class="mt-4">
            <a href="#section-5">
              Usability tests
            </a>
          </li>
          <li class="mt-4">
            <a href="#section-6">
              Conclusions & final thoughts
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div id="section-1">
      <div class="font-weight-bold text-h3 mt-16 mb-8 mx-auto mw720">
        1. Context
      </div>
      <div class="text-body-1 mx-auto mw720">
        eFurniture came to our company with request to completely rebuild their website. They've got e-commerce site that was not updated since 2013. Things have changed in the company in the meantime since Baselinker (e-commerce sales management platform) was introduced as a new source of products and categories. Additionally they wanted to start offering furniture customization services on website for different kinds of products to meet the expectations of the user.
      </div>
    </div>
    <div id="section-2">
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        2. Discover & define
      </div>
      <div class="text-body-1 mx-auto mw720">
        As a UX Designer and Analyst I've attended and participated in many online meetings/workshops to better understand client problems and challenges. The meetings were divided by topic so for example, one day we were discussing their current structure and at the next meeting we've covered what integrations will be needed.
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4">
        On one of the first meetings I asked them to prepare all resources and files (that was related with this site) for me so I can analyze them afterwards. It turns out that they had few resources to share: access to Google Analytics, access to Baselinker and database with phone calls from users that they were recording during handling requests on the hotline. Based on the analysis I was able to create some deliverables: competitive audit, personas and Information Architecture.
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4">
        <strong>Competitive audit</strong> was prepared to inform eFurniture stakeholders what trends are popular within other companies from furniture industry. Also it was informative for me to better understand what kind of features are commonly used.
      </div>
      <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="5"
        disable-filtering
        disable-pagination
        disable-sort
        hide-default-footer
        class="elevation-8 mt-6"
      />
      <div class="text-body-1 mx-auto mw720 mt-6">
        It turns out that custom-made furniture configurator was popular service among competitors.
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4">
        <strong>Personas</strong> was based on four things: expert opinions I collected at meetings, Google Analytics data, phone calls from users and empathy map that I prepared to better categorise users.
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4">
        To create <strong>Information Architecture</strong> I audited current shop and competition and looked for some common patterns in content. Then during meetings I asked what categories and products are most important for them from business side. Finally I proposed Information Architecture and used Card Sorting method to test if category tree is free of misunderstandings. The result of building an information architecture in this way was that users could find one product using three different paths:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          Types of furniture (e.g. Tables, Sofas, Beds)
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          Rooms (e.g. Kitchen, Living room, Dining room, Bathroom)
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          Custom-made furniture (e.g. Tables, Chairs, Beds)
        </li>
      </ul>
    </div>
    <div id="section-3">
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        3. Low-fi designs
      </div>
      <div class="text-body-1 mx-auto mw720">
        Based on everything I gathered to this point I started to design first versions of wireframes. I focused on mobile and desktop resolutions because it turns out from Google Analytics that only 1.5% of users of their current site were using site from tablets. Wireframes were designed based on <a href="https://www.figma.com/community/file/1043653629602094206/Lo-fi-Wireframe-Design-System" target="_blank" rel="noopener noreferrer">Design System</a> that I made for myself to optimize my work and to be consistent across designs.
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4">
        During meetings with the client, I showed wireframes that were discussed from business point of view one more time to ensure everything looks and behaves as expected. Here are some wireframes:
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/efurniture/wireframes/1.png')"
          :lazy-src="require('~/assets/images/efurniture/wireframes/1.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/efurniture/wireframes/2.png')"
          :lazy-src="require('~/assets/images/efurniture/wireframes/2.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/efurniture/wireframes/3.png')"
          :lazy-src="require('~/assets/images/efurniture/wireframes/3.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
      </div>
      <div class="d-flex justify-space-between flex-column flex-sm-row">
        <v-img
          class="mt-6"
          :src="require('~/assets/images/efurniture/wireframes/4.png')"
          :lazy-src="require('~/assets/images/efurniture/wireframes/4.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/efurniture/wireframes/5.png')"
          :lazy-src="require('~/assets/images/efurniture/wireframes/5.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
        <v-img
          class="mt-6"
          :src="require('~/assets/images/efurniture/wireframes/6.png')"
          :lazy-src="require('~/assets/images/efurniture/wireframes/6.png')"
          contain
          :max-width="$vuetify.breakpoint.xsOnly ? '100%' : ($vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly) ? '30%' : '333px'"
        />
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4">
        Most challenging wireframes were custom-made furniture. During workshops, it turned out that not all custom furniture orders could be handled by eFurniture employees.  They had their own internal processes which they had to follow, so during the analysis we had to adapt to their way of working.
      </div>
    </div>
    <div id="section-4">
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        4. Functional specification
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4">
        In parallel with wireframes, I was creating Functional Specification document. Since not everything can be presented on wireframes this document can cointain technical information, for example descriptions of integrations with external systems or more complicated business processes.
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4">
        Here is example how document looks like: <a href="/efurniture_functional_specification.pdf" target="_blank" class="link text-body-1">Functional specification</a>
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4">
        Most important parts of this file are functional requirements that contains user stories and integrations where connections between systems are explained.
      </div>
    </div>
    <div id="section-5">
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        5. Usability tests
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4">
        When conducting usability tests, I focused on the most complex and extensive wireframes. I tested 10 people and each one of them had 4 tasks to complete. Below is a video showing the prototype used during usability tests where user was asked to add a custom-sized product to the basket.
      </div>
      <video
        class="mt-8 mt-md-0"
        :width="$vuetify.breakpoint.smAndDown ? '100%' : '1080px'"
        autoplay
        loop
        muted
        playsinline
      >
        <source src="~/assets/images/efurniture/prototype/1.webm" type="video/webm">
        <source src="~/assets/images/efurniture/prototype/1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="text-body-1 mx-auto mw720 mt-4">
        Selected conclusions after tests:
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          Some users had hard time finding  information about table dimensions in product card. After testing, I added a link to the product details at the top of the product card.
        </li>
        <li class="text-body-1 mx-auto mw720 mt-sm-4">
          Every fourth user had a problem with finding the inspiration section. The problem was the arrangement of elements on the home page.
        </li>
      </ul>
    </div>
    <div id="section-6">
      <div class="text-h3 font-weight-bold mt-16 mb-8 mx-auto mw720">
        6. Conclusions & final thoughts
      </div>
      <div class="text-body-1 mx-auto mw720 mt-4">
        When wireframes and functional specification was accepted by the client everything was set and ready to estimate project and mark first stage of the project as completed.
      </div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Ideas for future designs & tests
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          After project launch I would suggest A/B tests and other activities leading to the continuous improvement of the conversion rate and customer satisfaction.
        </li>
        <li class="text-body-1 mx-auto mw720 mt-4">
          Adding module within website where furniture producers could be listed. That would help in terms of SEO and website visibility on the web.
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        Key takeaway
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          The opportunity to meet a company from the furniture industry. Understanding their structure, method of operation, approach to the end customer and competition.
        </li>
      </ul>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720">
        What I could improve upon in my next project
      </div>
      <ul>
        <li class="text-body-1 mx-auto mw720 mt-4">
          In the next project, during the workshop, I will pay even more attention to individual functionalities and ask if they are to be part of the MVP or whether they can be transferred to the next stages.
        </li>
      </ul>
    </div>
    <div>
      <div class="text-h4 mt-12 mb-6 font-weight-bold mx-auto mw720 d-flex flex-column">
        <div class="mb-8">
          Next case study
        </div>
        <div>
          <NuxtLink to="/hiking-app-case-study" class="hikingapp-color d-flex justify-center animate-text font-weight-bold text-decoration-none text-h1">
            Hiking app
          </NuxtLink>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  layout: ctx => ctx.isTablet ? 'tablet' : (ctx.isDesktop ? 'desktop' : 'default'),
  data () {
    return {
      headers: [
        { text: 'Competitor', value: 'competitor', class: 'text-body-1 font-weight-bold' },
        { text: 'Type', value: 'type', class: 'text-body-1 font-weight-bold' },
        { text: 'Custom-made furniture', value: 'custom', class: 'text-body-1 font-weight-bold' },
        { text: 'Pick up at physical store', value: 'pickup', class: 'text-body-1 font-weight-bold' },
        { text: 'Mobile app', value: 'mobile', class: 'text-body-1 font-weight-bold' },
        { text: 'Order without registration', value: 'noreg', class: 'text-body-1 font-weight-bold' }
      ],
      items: [
        {
          competitor: 'meble.pl',
          type: 'direct',
          custom: 'yes',
          pickup: 'no',
          mobile: 'no',
          noreg: 'yes'
        },
        {
          competitor: 'brw.pl',
          type: 'direct',
          custom: 'no',
          pickup: 'no',
          mobile: 'no',
          noreg: 'yes'
        },
        {
          competitor: 'agatameble.pl',
          type: 'direct',
          custom: 'partly',
          pickup: 'yes',
          mobile: 'yes',
          noreg: 'yes'
        },
        {
          competitor: 'twojemeble.pl',
          type: 'direct',
          custom: 'no',
          pickup: 'no',
          mobile: 'no',
          noreg: 'yes'
        },
        {
          competitor: 'drewnianymarket.pl',
          type: 'indirect',
          custom: 'yes',
          pickup: 'no',
          mobile: 'no',
          noreg: 'no'
        },
        {
          competitor: 'stolarz24.pl',
          type: 'indirect',
          custom: 'yes',
          pickup: 'no',
          mobile: 'no',
          noreg: 'yes'
        }
      ]
    }
  },
  head: {
    title: 'eFurniture case study'
  }
}
</script>

<style lang="scss" scoped>
  @import '~vuetify/src/styles/styles.sass';

  .text-and-image {
    width: 1080px;

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
</style>
