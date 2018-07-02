<template>
  <v-container fluid>
    <v-flex id="experience" class="display-3 grey--text text--lighten-2" xs12>
      Experience
    </v-flex>
    <v-layout>
      <v-container>
        <v-layout row wrap>
          <v-container>
            <div class="timeline">
              <div class="timeline-event">
                <v-card class="timeline-content">
                  <v-list three-line>
                      <v-list-tile>
                        <v-list-tile-content>
                          <v-list-tile-title>Mobilus</v-list-tile-title>
                          <v-list-tile-sub-title class="text--primary">Front-end (full-stack) web developer</v-list-tile-sub-title>
                          <v-list-tile-sub-title>June 2017 - Present</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                  </v-list>
                  <v-expansion-panel>
                    <v-expansion-panel-content>
                      <div slot="header"></div>
                      <v-card>
                        <ul class="ma-3">
                            <li>Gathered and refined specifications and requirements based on technical needs.</li>
                            <li>Created a React / React-Redux / Redux-Saga front-end app to display statistical information.</li>
                            <li>Collaborated with a team of 3 to create a React / React-Redux / Redux-Saga front-end app to interface with AI services.</li>
                            <li>Integrated with AI services such as IBM Watson Assistant, IBM Watson NLC, Google Dialogflow.</li>
                        </ul>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-card>
                <div class="timeline-badge blue white-text"><i class="material-icons">work</i></div>
              </div>
              <div class="timeline-event">
                <v-card class="timeline-content">
                  <v-list three-line>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>Fusion Systems Japan</v-list-tile-title>
                        <v-list-tile-sub-title class="text--primary">Front-end (full-stack) web developer</v-list-tile-sub-title>
                        <v-list-tile-sub-title>March 2015 - May 2017</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                  <v-expansion-panel>
                    <v-expansion-panel-content>
                      <div slot="header"></div>
                      <v-card>
                        <ul class="ma-3">
                            <li>Provisioned and maintained an AWS OpsWorks stack for a Redmine instance.</li>
                            <li>Created custom Redmine plugins for consultant time management, billing callint invoicing.</li>
                            <li>Consulted with management on front-end frameworks and technologies.</li>
                            <li>Led a team of 5 developers in the creation of a React / React-Redux / Redux-Saga front-end app for restaurant management.</li>
                        </ul>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-card>
                <div class="timeline-badge blue white-text"><i class="material-icons">work</i></div>
              </div>
              <div class="timeline-event">
                <v-card class="timeline-content">
                  <v-list three-line>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>Various clients</v-list-tile-title>
                        <v-list-tile-sub-title class="text--primary">Freelance web developer</v-list-tile-sub-title>
                        <v-list-tile-sub-title>June 2008 - February 2015</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                  <v-expansion-panel>
                    <v-expansion-panel-content>
                      <div slot="header"></div>
                      <v-card>
                        <ul class="ma-3">
                            <li>Worked remotely with clients developing e-commerce, portfolio, and blog websites with multilingual functionalities.</li>
                            <li>Provisioned AWS EC2 instances for php frameworks and Ruby on Rails installations.</li>
                            <li>Installed, setup, and customized Drupal, Joomla, Magento, Wordpress, and Redmine instances.</li>
                        </ul>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-card>
                <div class="timeline-badge blue white-text"><i class="material-icons">work</i></div>
              </div>
            </div>
          </v-container>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script lang="javascript">
  export default {
    name: 'resume-experience'
  }
</script>

<style lang="stylus">
  .timeline {
    position: relative;
  }

  .timeline .timeline-event {
    position: relative;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .timeline .timeline-event .timeline-content {
    position: relative;
    width: calc(50% - 50px);
  }

  .timeline .timeline-event::before {
    display: block;
    content: "";
    width: 2px;
    height: calc(50% - 30px);
    position: absolute;
    background: #d2d2d2;
    left: calc(50% - 1px);
    top: 0;
  }

  .timeline .timeline-event::after {
    display: block;
    content: "";
    width: 2px;
    height: calc(50% - 30px);
    position: absolute;
    background: #d2d2d2;
    left: calc(50% - 1px);
    top: calc(50% + 30px);
  }

  .timeline .timeline-event:first-child::before {
    display: none;
  }

  .timeline .timeline-event:last-child::after {
    display: none;
  }

  .timeline .timeline-event:nth-child(even) .timeline-content {
    margin-left: calc(50% + 50px);
  }

  .timeline .timeline-event:nth-child(odd) .timeline-content {
    margin-left: 0;
  }

  .timeline .timeline-badge {
    display: block;
    position: absolute;
    width: 40px;
    height: 40px;
    background: #d2d2d2;
    top: calc(50% - 20px);
    right: calc(50% - 20px);
    border-radius: 50%;
    text-align: center;
    cursor: default;
  }

  .timeline .timeline-badge i {
    font-size: 25px;
    line-height: 40px;
  }

  @media (max-width: 600px) {
    .timeline .timeline-event .timeline-content {
      width: calc(100% - 70px);
    }
    .timeline .timeline-event::before {
      left: 19px;
    }
    .timeline .timeline-event::after {
      left: 19px;
    }
    .timeline .timeline-event:nth-child(even) .timeline-content {
      margin-left: 70px;
    }
    .timeline .timeline-event:nth-child(odd) .timeline-content {
      margin-left: 70px;
    }
    .timeline .timeline-badge {
      left: 0;
    }
  }
</style>
