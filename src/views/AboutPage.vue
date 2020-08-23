<template>
  <div class="about">
     <h1>About</h1>
     <div class="about-wrap">
        <p class="description">It's important to change lens on time. However, sometimes it's difficult to keep track on when to do it. Therefore, this web app was created.</p>
        <p class="description">If you like the application, have some ideas how to improve it, or want to collaborate, let's get in touch:</p>
        <p><a href="mailto:anya.sk.rus@gmail.com" class="contact">contact me</a></p>
     </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style>
.about {
  position: flex;
}
.about h1 {
  font-size: 2rem;
  padding: 2rem; 
}
.description {
  width: 80%;
  margin: 0 auto;
  padding-bottom: 1rem;
}
.contact {
  color: #2f3a4d;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity ease 0.5s;
}
.contact:hover {
  opacity: 1;
  transition: opacity ease 0.5s;
}

@media only screen and (min-width: 1024px) {
.about-wrap {
  width: 40%;
  margin: 0 auto;
}
}
</style>