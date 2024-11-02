<template>
  <q-page>
    <!-- <div class="bhead">
      <h1>Teas Official | Bunny Hop</h1>
      <div>数据查询系统</div>
    </div> -->
    <q-item>
      <q-item-section>
        <q-item-label>
          <h1>Teas Official | Bunny Hop</h1>
        </q-item-label>
        <q-item-label>
          <div>地图通关次数查询（记录查询敬请期待）</div>
        </q-item-label>
      </q-item-section>
      <q-item-section side>
        <q-btn @click="refresh()">刷新</q-btn>
      </q-item-section>
    </q-item>
    <center style="color: red;">
      警告：半成品，操作不当会导致严重卡顿，离开该页面后请确保手动刷新一次网页。
    </center>
    <hr>

    <!-- <q-pull-to-refresh @refresh="refresh">

    </q-pull-to-refresh> -->
    <q-item v-if="totalMap == -1" style="height: 250px;">
      <q-item-section>
        <q-item-label>
          <center>地图载入失败，请尝试刷新（按住我下拉即可）</center>
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item clickable v-ripple @click="alert = true" v-else v-for="keys in maplist" :key="keys">
      <q-item-section>
        <q-item-label>{{ keys.map }}</q-item-label>
        <q-item-label caption>
          总游玩次数：<q-badge color="teal" :label="keys.totalCompletions" />
        </q-item-label>
      </q-item-section>
      <q-item-section side>
        Tier {{ keys.tier }}
      </q-item-section>
    </q-item>

  </q-page>
  <q-dialog v-model="alert" transition-show="flip-down" transition-hide="flip-up">
    <q-card>
      <q-card-section>
        <div class="text-h6">提示</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        该页面仍在制作中，请耐心等待！
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="关闭" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { Loading } from 'quasar'

export default defineComponent({
  name: "BhopIndex",
  data() {
    return {
      alert: ref(false),
      totalMap: ref(0),
      maplist: [],
      pages: ref(1)
    }
  },
  methods: {
    refresh() {
      this.maplist = []
      this.totalMap = 0
      Loading.show({
        message: "正在与服务器通信……"
      })
      this.getMaplist()
    },
    getMaplist() {
      this.$api.get("/map").then(
        (res) => {
          res = res.data
          if (res.code == 200) {
            console.log(res.data)
            this.totalMap = res.data.length
            this.maplist = res.data
          } else {
            this.totalMap = -1
          }

          Loading.hide()
        }
      )
    },
    onLoadRef() {
      // console.log("REF")
      this.pages++
      this.getMaplist(this.pages);
    }
  },
  mounted() {
    Loading.show({
      message: "正在与服务器通信……"
    })
    this.getMaplist()
  }
});
</script>
<style lang="scss" scoped>
h1 {
  margin: 0;
  font-size: 32px;
}

.q-page {
  padding: 35px;
}

hr {
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10;
}
</style>
