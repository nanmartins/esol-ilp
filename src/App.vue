<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/exercises">Exercises</router-link>
  </nav>

  <router-view></router-view>

</template>

<style>
html {
  background: #1e1e1e;
  box-sizing: inherit;
}
body {
  background: #1e1e1e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #1e1e1e;

}

nav {
  padding: 40px 30px;
}

nav a {
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 16px;
  margin: 0 5px;
  border-radius: 5px;
  color: #b9b9ba;
  border: 1px solid #b9b9ba;
}

nav a.router-link-exact-active {
  border: 2px solid #00ff84;
  color: #00ff84;
}


h1 {
  color: #00ff84;
}

</style>
