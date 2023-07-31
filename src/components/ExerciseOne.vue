<template>
  <div class="exercise-container">
    <h3>Resume 01</h3>
    <h2><a href="https://www.bbc.co.uk/news/uk-66362004" target="_blank">UK weather: When will it stop raining and the summer improve?</a></h2>
    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/13BD1/production/_130594808_4f1d5c5dbe6237445b026ac8c7fa2e3095089682.jpg.webp">
    <a href="https://www.bbc.co.uk/news/uk-66362004" target="_blank"></a>

    <hr>

    <div class="resume-container">
      <h3>My thoughts:</h3>

      <p>The UK is experiencing unsettled weather with cooler temperatues and widespread rain, while southern Europe faces damgerous heatwaves and wildfires.</p>
      <p>The forecast indicates that the unsettled weather will continue through August, with drier and warmer periods possible later in the month.</p>
      <p>This wetter weather are impacting UK farmers, affecting the quality and causing aditional costs to produce the grains.</p>
      <p>The weather this summer is opposite to extreme hot summer from last year</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExerciseOne'
}
</script>

<style>
  .exercise-container {
    margin: 40px 10px;
    padding: 20px 10px;
    border-radius: 5px;
    border: 2px solid #00ff84;
    color: #00ff84;
    display: grid;
    place-content: center;
  }
  img {
    margin: 10px auto;
    border-radius: 5px;
    width: 80vw;
  }
  a {
    color: #00ff84;
    cursor: pointer;
  }
  a:hover {
    color: #b9b9ba;
  }

  hr {
    width: 100%;
    margin-top: 20px;
  }

  .resume-container {
    background: #4b4b4b;
    padding: 0 10px;
    border-radius: 5px;
    margin-top: 30px;
    border: 2px solid #b9b9ba;
  }
  .resume-container h3 {
    text-decoration-line: underline;
  }
</style>
