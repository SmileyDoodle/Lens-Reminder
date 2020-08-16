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
        />
        <p>Disposable in:</p>
        <!-- select -->
        <div class="select is-rounded">
            <select>
                <option style="display: none">days...</option>
                <option>1 day</option>
                <option>7 days</option>
                <option>14 days</option>
                <option>30 days</option>
            </select>
        </div>

      </form>
        <button class="editButton button is-rounded"> <img src="../assets/images/add.svg" alt=""> </button>
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
        }
    },
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