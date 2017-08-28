<template>
  <div>
    <mu-appbar :title="article.title">
      <mu-icon-button icon="close" slot="left" @click="$router.back()"></mu-icon-button>
    </mu-appbar>
    <mu-sub-header>{{ article.title }}</mu-sub-header>
    <mu-content-block>
      <p>{{ article.description }}</p>
      <img :src="article.cover" :alt="article.title" style="max-width: 100%;">
      <p v-html="article.content"></p>
    </mu-content-block>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {
        title: '文章标题',
        description: '文章描述',
        cover: 'https://dummyimage.com/600x400/f44336/fff&text=Article',
        content: '<p>文章内容</p><p>文章内容文章内容</p><p>文章内容文章内容文章内容</p>'
      }
    }
  }
}
</script>

