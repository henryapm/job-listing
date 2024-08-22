<template>
  <section class="jobs">
    <div class="filter__container">
      <div v-if="filters.length" class="filter">
        <span v-for="(toolOrSkill, index) in filters" :key="index"> {{ toolOrSkill }} <button @click="removeFilter(index)">&times;</button></span>
      </div>
    </div>
    <ul class="jobs__list">
      <li class="job__item" v-for="(job, index) in filteredJobs" :key="index" :class="{featured: job.featured}">
        <div class="job__description">
          <div class="job__image">
            <img :src="job.logo" alt="Job logo">
          </div>
          <div class="job__info">
            <div class="company__wrapper">
              <h2 class="company">{{ job.company }}</h2>
              <div class="labels">
                <h2 v-if="job.new" class="new label">new!</h2>
                <h2 v-if="job.featured" class="featured__label label">featured</h2>
              </div>
            </div>
            <h1 class="position">{{ job.position }}</h1>
            <div class="job__type"><span>{{ job.postedAt }}</span><span>{{ job.contract }}</span><span>{{ job.location }}</span></div>
          </div>
        </div>
        <div class="job__skills">
          <span class="job__element" @click="filterBy(job.role)">{{ job.role }}</span><span class="job__element" @click="filterBy(job.level)">{{ job.level }}</span>
          <span class="job__element" v-for="(language, index) in job.languages" :key="index" @click="filterBy(language)">{{ language }}</span>
          <span class="job__element" v-for="(tool, index) in job.tools" :key="index" @click="filterBy(tool)">{{ tool }}</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
  import data from '../data.json';

  export default {
    data() {
      return {
        jobs: data,
        filters: [],        
      }
    },
    methods: {
      filterBy(skill){
        this.filters.includes(skill) ? console.log("yes") : this.filters.push(skill)
      },
      removeFilter(index){
        this.filters.splice(index,1)
      }
    },
    computed: {
      filteredJobs(){
        let filteredJobsArray = []
        if (this.filters.length > 0) {
          filteredJobsArray = this.jobs.filter(job => {
            return this.filters.every(prop => {
              return Object.values(job).includes(prop) || job.languages.includes(prop) || job.tools.includes(prop)
            });
          });
          // filteredJobsArray = this.jobs.forEach(job => {
            
          // })
          return filteredJobsArray;
        } else {
          return this.jobs
        }
      }
    }
  }
</script>