<template>
  <div class="edit columns is-mobile is-centered">
    <div  class="column is-two-thirds">
      <div class="inputs-button-wrap">
        <form>
          <p class="p-wrap">Put new lens on:</p>
          <input
            class="button is-rounded column dateInput"
            name="date"
            type="date"
            v-model="queryDate"
          />
          <p class="p-wrap">Disposable in:</p>
          <!-- select -->
          <div class="select is-rounded">
              <select v-model="queryDay">
                  <option value="" style="display: none">days...</option>
                  <option value="1">1 days</option>
                  <option value="7">7 days</option>
                  <option value="14">14 days</option>
                  <option value="30">30 days</option>
              </select>
          </div>
        </form>
      </div>
          <button 
            class="editButton button is-rounded"
            @click="fetchData()"
          >
            <img src="../assets/images/add.svg" alt="add"> 
          </button>
          <!-- <router-link
            tag="button" 
            class="editButton button is-rounded"
            @click="fetchData()"
            to="/information"
          >
            <img src="../assets/images/add.svg" alt="add"> 
          </router-link> -->
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'InformationPage',
    data() {
        return {
            isDroppeddown: false,
            queryDate: "",
            queryDay: "",
            date: "",
            day: "",
            today: ""

        }
    },
    methods: {
        fetchData() {
          if (this.queryDate !== "" && this.queryDay !== "") {
            this.date = this.queryDate;
            this.day = this.queryDay;
            // console.log("date:", this.date);
            // console.log("day:", this.day);
            const myStorage = window.localStorage;
            myStorage.setItem('date', this.date);
            myStorage.setItem('day', this.day);
            this.checkFuture()
          }
        },
        checkFuture() {
            this.today = moment().unix();
            const thisDate = moment(this.date).unix();
            if (this.today >= thisDate) {
              console.log("success");
              this.$router.push({ path: 'information' });
            } else {
              console.log('error');
              alert("The date cannot be in the future")
            }
        }
    }
}
</script>

<style>
.edit {
  display: grid;
  justify-content: center;
  margin: 0;
}
.button {
  width: 100%;
}
.editButton {
  background-color: #2f3a4d;
  width: auto;
  padding: 10px !important;
  margin-top: 2rem;
}
.p-wrap {
  font-size: 1.3rem;
  padding-top: 1.5rem;
}
.select {
  width: 100%;
}
select {
  width: 100%;
}
.dateInput {
  line-height: 100%;
}
</style>