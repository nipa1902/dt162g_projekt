<template>

<div id="footer">

<span class="credit">   
<p>CRUD-app made by Nils Paulsson (nipa1902) for DT162G project.</p>
<a href="https://icons8.com/icon/VFaz7MkjAiu0/checkmark">Checkmark icon by Icons8</a>
<br>
<a href="https://icons8.com/icon/70yRC8npwT3d/ok">Ok icon by Icons8</a>
<br>
<a href="https://fontawesome.com/license">Edit icon by Font Awesome</a>
</span>

</div>

</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  },
}
</script>

<style scoped>

#footer {
  background: black;
  color: white;
  padding: 1rem;
}

#footer a {
  color: white;
  line-height: 2rem;
}


</style>
