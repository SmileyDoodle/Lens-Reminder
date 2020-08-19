<template>
  <div class="edit columns is-mobile is-centered">
    <div  class="column is-two-thirds">
      <h1>Hello</h1>
      <form>
        <p>Put new lens on:</p>
        <input
          class="button is-rounded column"
          name="date"
          type="date"
          v-model="queryDate"
        />
        <p>Disposable in:</p>
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
          <!-- <router-link
            tag="button" 
            class="editButton button is-rounded"
            @click="fetchData()"
            to="/information"
          >
            <img src="../assets/images/add.svg" alt=""> 
          </router-link> -->

        <button class="editButton button is-rounded" type="button" @click="fetchData()"> <img src="../assets/images/add.svg" alt=""> </button>
        <button class="editButton button is-rounded"> <img src="../assets/images/clear.svg" alt=""> </button>
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
    }
}
</script>

<style>
.edit {
  display: grid;
  justify-content: center;
  margin: 0;
}
.edit h1 {
  font-size: 2rem;
  padding: 1rem 0 1rem; 
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
.select {
  width: 100%;
}
select {
  width: 100%;
}
</style>