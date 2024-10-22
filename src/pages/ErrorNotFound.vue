<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        非常抱歉，你要找的页面走丢了...
      </div>

      <q-btn class="q-mt-xl" color="white" text-color="blue" unelevated to="/" label="带我回精神病院！！！" no-caps />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ErrorNotFound'
});
</script>
