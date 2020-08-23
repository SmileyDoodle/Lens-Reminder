<template>
  <div class="edit columns is-mobile is-centered">
    <div  class="column is-two-thirds">
      <div class="inputs-button-wrap">
        <form>
          <p class="p-wrap">Put new lens on:</p>
          <input
            class="button is-rounded column"
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
          <router-link
            tag="button" 
            class="editButton button is-rounded"
            @click="fetchData()"
            to="/information"
          >
            <img src="../assets/images/add.svg" alt="add"> 
          </router-link>

    </div>
  </div>
</template>

<script>
export default {
    name: 'InformationPage',
    data() {
        return {
            isDroppeddown: false,
            queryDate: "",
            queryDay: "",
            date: "",
            day: ""

        }
    },
    methods: {
        fetchData() {
          if (this.queryDate !== "" && this.queryDay !== "" ) {
            this.date = this.queryDate;
            this.day = this.queryDay;
            console.log("date:", this.date);
            console.log("day:", this.day);
            const myStorage = window.localStorage;
            myStorage.setItem('date', this.date);
            myStorage.setItem('day', this.day);
            
          }
        }
    },
    mounted() {
        this.fetchData();
    },
    updated: function () {
        this.$nextTick(function () {
            this.fetchData();
            // Code that will run only after the
            // entire view has been re-rendered
        })
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
</style>