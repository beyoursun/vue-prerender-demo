<template>
  <div>
    <mu-appbar title="新闻">
      <mu-icon value="home" slot="left"></mu-icon>
    </mu-appbar>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="new" title="最新"></mu-tab>
      <mu-tab value="hot" title="最热"></mu-tab>
    </mu-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      activeTab: 'new'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
      this.$router.push(val)
    }
  }
}
</script>
