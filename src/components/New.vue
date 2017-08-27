<template>
  <mu-list>
    <mu-list-item
      v-for="article in articles"
      :title="article.title"
      :describe-text="`${article.author} ${article.time}`"
      :key="article.title">
      <mu-avatar :src="article.cover" slot="leftAvatar"></mu-avatar>
    </mu-list-item>
  </mu-list>
</template>

<script>
export default {
  data () {
    return {
      articles: [
        {
          title: '每天 9 元用 iPhone 7，还有这种操作？',
          author: '腾讯科技',
          time: '7小时前',
          cover: '//zkres3.myzaker.com/201708/aHR0cDovL3prcmVzLm15emFrZXIuY29tL2ltZ191cGxvYWQvZWRpdG9yL2ltZ191cGxvYWQvMjAxNzA4MjcvdXBfMTUwMzc4MjAxMl83NTQzOV9XNjQwSDM2MFM2MTI2NC5qcGc=_1242.jpg'
        },
        {
          title: 'Note 7 最后一次召回：交回旧机 领走 Note 8',
          author: '腾讯科技',
          time: '4小时前',
          cover: '//zkres1.myzaker.com/201708/59a236d47f52e9591300036a_320.jpg'
        },
        {
          title: '每天 9 元用 iPhone 7，还有这种操作？',
          author: '腾讯科技',
          time: '7小时前',
          cover: '//zkres3.myzaker.com/201708/aHR0cDovL3prcmVzLm15emFrZXIuY29tL2ltZ191cGxvYWQvZWRpdG9yL2ltZ191cGxvYWQvMjAxNzA4MjcvdXBfMTUwMzc4MjAxMl83NTQzOV9XNjQwSDM2MFM2MTI2NC5qcGc=_1242.jpg'
        },
        {
          title: 'Note 7 最后一次召回：交回旧机 领走 Note 8',
          author: '腾讯科技',
          time: '4小时前',
          cover: '//zkres1.myzaker.com/201708/59a236d47f52e9591300036a_320.jpg'
        }
      ]
    }
  }
}
</script>
