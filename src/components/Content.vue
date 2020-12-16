<template>
  <div id="content">
    <div class="eachOne" v-for="item in list" :key='item.id'>
      <div class="title">{{ item.title }}</div>
      <div class="name">
        <span>{{ item.name }}</span>
        <span>{{item.date}}</span>
      </div>
      <div class='text'>
        {{item.text}}
      </div>
      <div>
        <div class="left">
          <span>公司注冊</span>
          <span>繳納</span>
        </div>
        <div class="right">
          <span>+</span>
          <span>-</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style lang="scss">
#content{
  width: 100%;
  >.eachOne{
    width: 100%;
    background: #fff;
  }
}
</style>
