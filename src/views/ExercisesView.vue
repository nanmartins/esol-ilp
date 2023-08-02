<template>
  <div class="exercises">
    <h1>Exercises</h1>

    <div class="exercises-links-container">
      <router-link :to="{ name: 'exercise-one'}" class="exercise-link">Resume 01</router-link>
      <router-link :to="{ name: 'exercise-two'}" class="exercise-link">Resume 02</router-link>
    </div>

    <router-view></router-view>
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
    font-size: 14px;
    color: #b9b9ba;
    border: 2px solid #b9b9ba;
    padding: 7px 12px;
    border-radius: 5px;
    margin: 5px;
  }
  .exercise-link.router-link-active {
    border: 2px solid #00ff84;
    color: #00ff84;
  }
</style>
