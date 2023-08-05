<template>
  <div class="exercise-container">
    <h3>Resume 01</h3>
    <h2>UK weather: When will it stop raining and the summer improve?</h2>
    <a href="https://www.bbc.co.uk/news/uk-66362004" target="_blank">View source</a>
    <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/13BD1/production/_130594808_4f1d5c5dbe6237445b026ac8c7fa2e3095089682.jpg.webp">

    <hr>

    <div class="resume-container">
      <h3>My thoughts:</h3>

      <p>The UK is experiencing unsettled weather with cooler temperatues and widespread rain, while southern Europe faces dangerous heatwaves and wildfires.</p>
      <p>The forecast indicates that the unsettled weather will continue through August, with drier and warmer periods possible later in the month.</p>
      <p>This wetter weather are impacting UK farmers, affecting the quality and causing aditional costs to produce the grains.</p>
      <p>The weather this summer is opposite to extreme hot summer from last year.</p>
      <p>In my opinion, this summer has been very weird. It doesn't feel like summer, and if you look to others country in Europe, don't make any sense the weather here in UK. It just make me thing about, how will be the winter? Maybe we get a better weather this winter.</p>
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
    padding: 20px 15px;
    border-radius: 5px;
    background: #262728;
    border: 1px solid #00ff84;
    color: #00ff84;
    display: grid;
    place-content: center;
  }
  img {
    margin: auto;
    border-radius: 5px;
    width: 80vw;
  }
  .exercise-container a {
    background: #2b2c2d;
    color: #b9b9ba;
    border: 1px solid #b9b9ba;
    display: grid;
    place-self: center;
    border-radius: 5px;
    padding: 10px 20px;
    margin-bottom: 40px;
    width: 120px;
    font-display: Arial;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: bolder;
    text-decoration: none;
  }

  .exercise-container a:hover {
    color: #00ff84;
    border: 1px solid #00ff84;
    box-shadow: 2px 2px 2px #313234;
  }

  hr {
    display: flex;
    justify-self: center;
    width: 80vw;
    margin: 40px 0 40px 0;
    border: 1px solid #00ff84a7;
  }

  .resume-container {
    background: #313234;
    padding: 10px 15px;
    border-radius: 5px;
    /* margin-top: 30px; */
    border: 1px solid #b9b9ba;
  }
  .resume-container h3,
  .exercise-container h3 {
    text-decoration-line: underline;
  }
  .resume-container p {
    color: #dcdada;
  }
</style>
