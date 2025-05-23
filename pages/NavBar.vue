<template>
  
  <header>
    <h1 class="siteTitle">Welcome to the Fun Site!</h1>
    <nav>
      <ul>
        <li><NuxtLink to="/">Welcome!</NuxtLink></li>
        <li><NuxtLink to="/farm">On the Farm!</NuxtLink></li>
      </ul>
    </nav>
  </header>

</template>

<style scoped>
  header {
    width: 100%;
    height: 6em;
    position: fixed;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: orangered;
    border-radius: 25px;
  }

  li {
    display: inline-block;
    padding-right: 20px;
  }

  .siteTitle {
    text-shadow: 2px 2px #000000;
    color: white;
    font-size: 2em;
    font-weight: 900;
    text-align: center;
  }
</style>