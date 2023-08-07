<template>
  <!-- <div class="home"> -->
    <h1>Home</h1>

    <div class="home-container">
      <h2>Hello, welcome!</h2>
      <p>Here you will find my work for the English course ESOL Entry 3.</p>
      <br>
      <p>The exercises consist of creating brief summaries about news articles.</p>
      <p>On the "Exercises" page, you will find my summaries and also links to the materials used.</p>
      <p>I recommend that you read the material first to have your own understanding of the subject.</p>
      <br>
      <p>I hope you enjoy it.</p>
      <p>Happy reading!.</p>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
  .home-container {
    border: 2px solid #00ff84;
    border-radius: 5px;
    padding: 20px 10px;
    margin: 30px 10px 20px 10px;
    background: #262728;
  }

  h2 {
    color: #00ff84;
    font-size: 28px;
    text-decoration-line: underline;
  }

  p {
    color: #dcdada;
    font-size: 20px;
  }
</style>
