<template>
  <div>
    <p>{{linkTitle}}</p>
</div>
</template>

<script>
  export default{
    name: 'box',
    props: [
      'linkTitle'
    ],
    mounted() {
        console.log(this.linkTitle)
    }
  }
</script>
