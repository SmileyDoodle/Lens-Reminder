<template>
  <div class="information columns is-mobile is-centered">
    <div  class="column is-two-thirds">
      <h1>Days left</h1>
      <CircleAnimation></CircleAnimation>
      <div class="info-wrap">
          <p>Put new: {{date}} </p>
          <p>Change: {{newDate}} </p>
      </div>
      <router-link to="/edit" tag="button" class="info button is-rounded">
        Edit
      </router-link>
    </div>
  </div>
</template>

<script>
import CircleAnimation from '../components/CircleAnimation.vue'
import moment from 'moment';

export default {
  name: 'InformationPage',
  components: {
    CircleAnimation
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    date() {
      if(window) {
        var date = moment(window.localStorage.getItem('date')).format('MMMM Do');
        return date;
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    newDate() {
      if(window) {
          var newDate = moment(this.date, 'MMMM Do').add(window.localStorage.getItem('day'), "days").format('MMMM Do');
          console.log('newDate', newDate);
          return newDate;
      }
    }
  },
}
</script>

<style>
.information {
  display: grid;
  justify-content: center;
  margin: 0;
}
.information h1 {
  font-size: 2rem;
  padding: 1rem 0 1rem; 
}
.info-wrap {
    padding-top: 1.5rem;
}
.info-wrap p {
 text-align: left;
 font-size: 1.2rem;
}
.info {
 background-color: #2f3a4d;
 color: #fff;
 margin-top: 2rem;
 width: 100%;
}
</style>