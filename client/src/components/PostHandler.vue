<template>
<div class="post-container" v-bind:class="{'fade-in': !tasksDone, 'fade-out': tasksDone}">

    <figure v-bind:class="{'': !tasksDone, 'slide-out': tasksDone}" ref="logo" class="logo">
    <img alt="Boxkat CRUD logo" src="../assets/logo.png">
    </figure>

<!-- Create Post Here -->
  <div class="create-new-post">
    <label for="create-new-post">Write down what you need to get done. <br> Click on a task to finish. <br> When all tasks are finished, the list will disappear.</label>
    <!-- Bind the input in the new post to the text data so we can pass it to API -->
    <input type="text" id="create-new-post" v-model="text" v-on:keyup.enter="createPost">
    <button v-on:click="createPost">Add!</button>
  </div>

<hr>
<!-- If error exists, then print error data here -->
<p class="error" v-if="error"> {{ error }} </p>

<!-- Post div class binding to post and index, its key will be the post ID in mongo db -->
<div class="post-wrapper">
  <div class="post" ref="post" 
  v-for="(post, index) in posts"
  v-bind:index="index"
  v-bind:key="post._id"
  v-on:click="$event.target.classList.toggle('is-done'); taskFinished()">
  
  <!-- Actual post data being printed in loop -->
  <div class="post-date"> {{  `${post.createdAt.getDate()}/${post.createdAt.getMonth() +1}/${post.createdAt.getFullYear()}`  }} </div>
  <span class="post-text"> {{ post.text }}  </span> <br> 

  <!-- Update -->
  <button v-on:click="showUpdate()" class="toggle-update"></button>
  
  <!-- Input field for updating -->
  <input type="text" class="update-post" :id="index" :placeholder=" [[ post.text ]]" 
  v-model="updateText" 
  v-on:keyup.enter="updatePost(post._id, text); $event.target.parentNode.classList.toggle('update-show')">

  <!-- Update Post Button -->
  <button v-on:click="updatePost(post._id, text); $event.target.parentNode.classList.toggle('update-show')"  
  class="update-post"></button>

  <!-- Update Cancel Button -->
  <button v-on:click="$event.target.parentNode.classList.toggle('update-show')" 
  class="cancel-update"></button>

  <!-- Delete -->
  <button v-on:click="deletePost(post._id)" class="delete-post">
    <i class="fas fa-trash-alt"></i>
  </button>

  </div> <!-- End Post -->

</div> <!-- End Post-Wrapper -->


</div> <!-- End Container -->


</template>

<script>
// Import the post service script file from the src folder
import PostService from '../PostService';

// Data associations: 
// Posts empty array that gets filled by API
// Error empty string that gets filled by hopefully zero errors
// Text empty string that gets filled by user input for creating posts
// UpdateText for passing new text to patch requests
export default {
  name: 'PostHandler',
  data() {
    return {
      posts: [],
      error: '',
      text: '',
      updateText: '',
      tasksDone: false
    }
  },

  // This will run when component is initialised
  // Default behaviour is to run the getPosts functions from the post service JS
  // Since we have a static function we don't have to make a new postservice
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err.message;
    }
  },

  mounted() {
    this.slideLogoRight();
  },

  // The CRUD methods for the component
  // They call API requests, then get all posts and push into post array
  methods: {
    async createPost() {
      if (this.text.trim().length == 0) {
        return;
      }
      await PostService.createPost(this.text)
      this.posts = await PostService.getPosts();
      this.text = '';
    },
    async deletePost(id) {
      await PostService.deletePost(id)
      this.posts = await PostService.getPosts();
    },
    async deleteAll() {
      await PostService.deleteAllPosts();
      this.posts = await PostService.getPosts();
    },
    async updatePost(id) {
      if (this.updateText.trim().length == 0) {
        return;
      }
      await PostService.updatePost(id, this.updateText)
      this.posts = await PostService.getPosts();
      this.updateText = '';
    },
    slideLogoRight() {
      setTimeout(() => {
      this.$refs.logo.classList.add('slide-right')}, 500)
      },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    },
    showUpdate() {
      var x = document.getElementsByClassName("post update-show") 
      console.log(x);
        if ( x.length > 0 ) {
          return;
        }
      event.target.parentNode.classList.toggle('update-show');
    },

  // Happy sound for finishing all tasks
    taskFinished() { 
    var x = document.getElementsByClassName("post is-done");
    var y = document.getElementsByClassName("post");

      // VICTORY CHECKER
      // if all tasks done play audio and reset board
      if (x.length >= y.length) {
      // stop any audio, set volume.
        let player = document.createElement("audio");
        player.pause();
        player.volume = 0.25;
        this.scrollToTop();
        player.src = (require('../assets/alltasksdone.mp3'));
        player.play();
        
        // tasksDone true/false correlates to a fade-out/fade-in CSS class
        // When tasksDone is true, the content fades out slowly
        this.tasksDone = true;
        // Set a 3 second timer and then delete all posts
        setTimeout(() => {
        this.deleteAll()}, 3000)
        // Reset the post-container view after 3.5 seconds
        setTimeout(() => {
        this.tasksDone = false}, 3500)
        // Slide the logo image right after 4 seconds
        setTimeout(() => {
        this.slideLogoRight()}, 4000)
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.post-container {
  padding-top: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 1rem;
  padding-bottom: 2rem;
}

div.post {
  transition: 0.5s;
  position: relative;
  border: 6px solid #b8f1ff;
  background-color: #b8f1ff;
  padding: 2rem 2rem 0 2rem;
  margin-bottom: 2rem;
  color: #000000;
  min-height: 100px;
}

div.post.is-done {
  transition: 0.5s ease-in-out;
  border: 6px solid #015f12;
  background: rgba(0, 0, 0, 0.8);
  background-image: url('../assets/checkmark.png'); 
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 90%;
}

div.post.is-done .post-date, div.post.is-done .post-text {
  text-decoration-line: line-through;
}

div.post.is-done > button.toggle-update {
  pointer-events: none;
}

div.post-date {
  position: absolute;
  top: -0.5rem;
  left: -1rem;
  padding: 0.75rem;
  background-color: rgb(2, 1, 70);
  color: white;
}

span.post-text {
  position: relative;
  top: 1rem;
  font-family:'Open Sans', sans-serif;
  max-width: 600px;
  line-height: 2rem;
  font-size: 1.5rem;
  padding: 1rem;
  transition: 0.5s;
}

span.post-text, .post-date, span.post-text p {
  pointer-events: none;
}

/* CSS for Delete */

button.delete-post {
  cursor: pointer;
  background: rgb(196, 9, 9);
  padding: 0.75rem;
  border: 1px solid black;
  position: absolute;
  bottom: 0;
  right: 0;
  color: whitesmoke;
  height: 50px;
  width: 50px;
}

/* CSS for Create */

div.create-new-post input {
  padding: 0.5rem;
}
div.create-new-post button {
  margin-left: 1rem;
  padding: 0.5rem;
  color: rgb(3, 44, 3);
}

div.create-new-post {
  padding-top: 3rem;
  font-size: 1.5rem;
}

div.create-new-post label {
  display: block;
  padding-bottom: 1rem;
}


/* CSS for Update */
button.toggle-update {
  position: absolute;
  left: 0;
  bottom: 0;
  background-image: url(../assets/icon-edit.svg);
  background-size: contain;
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
}

/* CSS to toggle visibility for update field */
input.update-post, button.update-post, button.cancel-update {
  position: absolute; 
  padding: 0.25rem;
  left: 4rem;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.75s linear;
  }

div.post.update-show .post-text {
  opacity: 0.5;
  transition: 0.5s;
}

div.post.update-show .toggle-update {
  display: none;
}

div.post.update-show > input.update-post {
  box-sizing: border-box;
  height: 50px;
  border: 2px solid red;
  bottom: 0;
  visibility: visible;
  opacity: 1;
  width: 15rem;
}

div.post.update-show > .post-text {
  top: -10%;
}


.update-show > button.update-post {
  bottom: 0rem;
  left: 19.5rem;
  visibility: visible;
  opacity: 1;
  background-image: url(../assets/icon-ok.png);
  background-size: contain;
  background-repeat: no-repeat;
  width: 50px; 
  height: 50px;
}

.update-show > button.cancel-update {
  bottom: 0rem;
  left: 0;
  visibility: visible;
  opacity: 1;
  height: 50px; width: 50px;
  background-image: url(../assets/icon-cancel.png);
  background-size: contain;
  background-repeat: no-repeat;
}


div.post-wrapper {overflow: hidden; padding: 2rem;}

.fade-out {
  opacity: 0;
  transition: 3s;
  pointer-events: none;
}

.fade-in {
  opacity: 100;
  transition: 1s;
}

.post-wrapper {
  transition: 3s;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
}

@media screen and (max-width: 960px) {
  .post-wrapper {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 520px) {
  span.post-text {
    font-size: 1.25rem;
    padding: 0;
    line-height: 1.25rem;
}

div.post {
  padding: 2.5rem;
}

  div.post.update-show > input.update-post {
  left: 0;
  top: 4.5rem;
  width: auto; 
}

  .update-show > button.update-post {
    left: 4rem;
}

button.delete-post i {
  padding: 0;
}

}

</style>
