<template>
  <div class="exercises">
    <h1>Exercises</h1>

    <div class="exercises-links-container">
      <router-link :to="{ name: 'exercise-one'}" class="exercise-link">Resume 01</router-link>
      <router-link :to="{ name: 'exercise-two'}" class="exercise-link">Resume 02</router-link>
    </div>

    <div class="component-border">
      <router-view v-slot="{ Component }">
        <transition mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ExercisesView',
}
</script>

<style scoped>
  .exercises-links-container {
    margin: 40px 0;
  }

  .exercise-link {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    color: #b9b9ba;
    border: 1px solid #b9b9ba;
    padding: 7px 12px;
    border-radius: 5px;
    margin: 5px;
  }
  .exercise-link.router-link-active {
    border: 2px solid #00ff84;
    color: #00ff84;
  }
  .component-border {
    border: 2px solid #00ff84;
    border-radius: 5px;
    background: #262728;
    min-height: 500px;
    margin: 40px 10px;
    padding: 20px 15px;
  }


  /* Need to improve the transition effect */
  /* check the pink bg as reference */
  .v-enter-from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    /* background: blue; */
  }

  /* .v-enter-to {
    background: pink;
  } */
  .v-enter-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all 0.4s;
    /* background: green; */
  }
  /* .v-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  } */
  .v-leave-to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .v-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    transition: all 0.4s;
  }

</style>
