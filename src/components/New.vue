<template>
  <mu-list>
    <mu-list-item
      v-for="article in articles"
      :title="article.title"
      :describe-text="article.description"
      :key="article.id"
      @click="$router.push({ name: 'Article', params: { id: article.id } })">
      <mu-avatar icon="assignment" slot="leftAvatar"></mu-avatar>
    </mu-list-item>
  </mu-list>
</template>

<script>
export default {
  data () {
    return {
      articles: [
        {
          id: 0,
          title: '最新文章标题1',
          description: '最新文章描述1'
        },
        {
          id: 1,
          title: '最新文章标题2',
          description: '最新文章描述2'
        }
      ]
    }
  }
}
</script>
