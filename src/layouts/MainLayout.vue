<template>
  <q-layout view="hHh lpR lfr">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <center>
            <q-btn flat padding="12.5px 24px" label="首页" to="/" />
            <q-btn flat padding="12.5px 24px" label="喷漆文件制作器" href="https://nekogan.com/vtf/" />
            <q-btn flat padding="12.5px 24px" label="服务器帮助文档" href="https://docs.nekogan.com/" />
            <q-btn flat padding="12.5px 24px" label="BHOP查询" to="/bhop" />
            <q-btn flat padding="12.5px 24px" label="MC服官网" @click="alert = true" />
          </center>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="right" overlay behavior="desktop" elevated>
      <q-list>
        <q-item-label header>
          相关链接
        </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />

        <q-item-label header>
          <center>
            <nav>
              Teas Official Website v2.0
            </nav>
            <nav>
              Powered by NekoGan
            </nav>
          </center>
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-scroll-area style="height: 80vh;">
        <router-view />
      </q-scroll-area>
    </q-page-container>

    <q-footer>
      <center class="copyright">
        Eh5の茶会 2020-2024
        <br>
        <a href="https://beian.miit.gov.cn/">辽ICP备2023013547号</a>
        &nbsp;
        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=21052202000156">
          <img width="10" src="https://beian.mps.gov.cn/web/assets/logo01.6189a29f.png">
          辽公网安备21052202000156号
        </a>
      </center>
    </q-footer>
  </q-layout>

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

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const alert = ref(false)

const linksList = [
  {
    title: "GitHub",
    link: "https://github.com/TeasOfficial/website",
    caption: "服务器官网开源地址"
  },
  {
    title: "关于",
    to: 'about',
    caption: "服务器管理人员&制作团队"
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.q-header {
  background-color: rgb(250, 250, 250);
  color: black;
}

.q-list {
  background-color: rgb(250, 250, 250);
  color: black;
}

.q-btn {
  font-size: 16px;
  color: black;
}

.q-footer center {
  padding: 5px;
  background-color: white;
  color: black;
}

.copyright a {
  color: #9b4dca;
  text-decoration: none;
  font-size: 12px;
}

.q-footer {
  font-size: 15px;
  background-color: white;
}

.copyright {
  border-left: 0.3rem solid #d1d1d1;
  border-right: 0.3rem solid #d1d1d1;
  margin: 0 60px 15px 60px;
}
</style>
