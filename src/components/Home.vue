<template>
  <div>
    <mu-appbar title="新闻">
      <mu-icon value="home" slot="left"></mu-icon>
    </mu-appbar>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="new" title="最新"></mu-tab>
      <mu-tab value="hot" title="最热"></mu-tab>
    </mu-tabs>
    <new></new>
  </div>
</template>

<script>
import New from '@/components/New'

export default {
  name: 'home',
  components: {
    New
  },
  data () {
    return {
      activeTab: 'new'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>
