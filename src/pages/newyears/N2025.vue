<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <video autoplay loop>
          <source src="../../assets/video_2025.webm" type="video/webm">
        </video>
        <center>
          <div class="mainblock">
            <h1>
              页面仍在制作中...
            </h1>
            <q-btn outline style="color: #FF0080" label="返回主页" to="/" />
          </div>
        </center>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'NewYear2025',
  data() {
    return {

    }
  }
});
</script>

<style scoped>
.q-btn {
  margin: 1.5rem
}

.q-page {
  margin: 0;
  padding: 0;
}

video {
  position: fixed;
  top: -5px;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  transform: scale(1.1);
}
.mainblock{
  background-color: azure;
  padding: 3rem;
  border-radius: 2rem;
}
</style>
