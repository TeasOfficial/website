<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <q-btn outline style="color: #FF0080" label="返回主页" to="/" />

        <center>
          <div class="pictures">
            <h3 style="text-align: left;">&gt;&gt;&gt; 服务器玩家合影</h3>
            <img width="80%" src="https://s11.ax1x.com/2024/01/02/pijSIH0.jpg" alt="2024年元旦合影1">
            <img width="80%" src="https://s11.ax1x.com/2024/01/02/pijS5Bq.jpg" alt="2024年元旦合影2">
          </div>
          <p>2024元旦拍照留念</p>
        </center>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'NewYear2024',
  data(){
    return{

    }
  }
});
</script>

<style scoped>
.q-btn {
  margin: 1.5rem
}
.q-page{
  margin: 0;
  padding: 0;
  margin-bottom: 32px;
}
.pictures{
  max-width: 80%;
}
</style>
