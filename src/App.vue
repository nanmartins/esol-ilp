<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/exercises">Exercises</router-link>
  </nav>
  <router-view/>
</template>

<style>
html {
  background: #2b2c2d;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 5px;
  color: #b9b9ba;
  border: 1px solid #b9b9ba;
}

nav a.router-link-exact-active {
  border: 1px solid #00ff84;
  color: #00ff84;
}
</style>
