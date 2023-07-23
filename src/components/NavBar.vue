
<template>
  <nav class="container">
    <h3>GifApp</h3>
    <div class="links">
      <a href="#">Home</a>
      <a href="#">Notes</a>
      <a href="#">About</a>
    </div>
    <div>
      <a href="#">Profile</a>
    </div>
  </nav>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
  background-color: whitesmoke;
  padding: 15px;
}

.links {
  display: flex;
  flex-direction: row;
}

a {
  margin: 5px;
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
}

h3 {
  margin: 0;
}
</style>