<template>
  <q-page>
    <center>
      <h1 style="margin-bottom: 20px;">Eh5の茶会</h1>
      <nav>服务器管理人员&开发人员</nav>
      <nav>头像取自于Steam，截止日期 2024/10/22</nav>
      <hr>
      <div style="padding: 0px 30px;">
        <q-card>
          <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify"
            narrow-indicator>
            <q-tab name="bhop" label="BHOP管理员" />
            <q-tab name="cinema" label="电影院管理员" />
            <q-tab name="minecraft" label="Minecraft管理员" />
            <q-tab name="developer" label="开发团队" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated transition-prev="fade" transition-next="fade">
            <q-tab-panel name="bhop">
              <div class="text-h6">Bunny-Hop 服务器管理员</div>
              <hr>
              <q-item clickable v-ripple v-for="p in bhopList" :key="p.name" tag="a" target="_blank"
                :href="'https://steamcommunity.com/profiles/' + p.steamid">
                <q-item-section side>
                  <q-avatar rounded size="48px">
                    <img :src="p.avatar" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ p.name }}</q-item-label>
                  <q-item-label caption>{{ p.desc }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  点击前往Steam主页
                </q-item-section>
              </q-item>
            </q-tab-panel>

            <q-tab-panel name="cinema">
              <div class="text-h6">Cinema 服务器管理员</div>
              <hr>
              <q-item clickable v-ripple v-for="p in cinemaList" :key="p.name" tag="a" target="_blank"
                :href="'https://steamcommunity.com/profiles/' + p.steamid">
                <q-item-section side>
                  <q-avatar rounded size="48px">
                    <img :src="p.avatar" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ p.name }}</q-item-label>
                  <q-item-label caption>{{ p.desc }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  点击前往Steam主页
                </q-item-section>
              </q-item>
            </q-tab-panel>

            <q-tab-panel name="minecraft">
              <div class="text-h6">Minecraft 服务器管理员</div>
              <hr>
              <q-item clickable v-ripple v-for="p in minecraftList" :key="p.name" tag="a" target="_blank"
                :href="'https://steamcommunity.com/profiles/' + p.steamid">
                <q-item-section side>
                  <q-avatar rounded size="48px">
                    <img :src="p.avatar" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ p.name }}</q-item-label>
                  <q-item-label caption>{{ p.desc }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  点击前往Steam主页
                </q-item-section>
              </q-item>
            </q-tab-panel>

            <q-tab-panel name="developer">
              <div class="text-h6">Teas Official 主要开发团队</div>
              <hr>
              <q-item clickable v-ripple v-for="p in developers" :key="p.name" tag="a" target="_blank"
                :href="'https://steamcommunity.com/profiles/' + p.steamid">
                <q-item-section side>
                  <q-avatar rounded size="48px">
                    <img :src="p.avatar" />
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ p.name }}</q-item-label>
                  <q-item-label caption>{{ p.desc }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  点击前往Steam主页
                </q-item-section>
              </q-item>
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
      <hr>
      <div>列表为人工维护，更新不及时请见谅，如需更改个人信息，请联系网站管理员</div>
    </center>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "AboutPage",
  data() {
    return {
      tab: ref('bhop'),
      bhopList: [
        {
          avatar: "https://avatars.cdn.queniuqe.com/df1fbe19a8745ef220811b96bd9c7c1b3b61a256_full.jpg",
          name: "Picrisol45",
          desc: "BunnyHop 总负责人 & 分服服主",
          steamid: "76561198359321556"
        },
        {
          avatar: "https://avatars.cdn.queniuqe.com/a408cefad71e51eb8100cc9cae23468cfa6b49f2_full.jpg",
          name: "NekoGan",
          desc: "Teas Official 创始人",
          steamid: "76561198282905317"
        },
        {
          avatar: "https://avatars.cdn.queniuqe.com/60d2be6957ca12c6a8b36c247a0270b2a7e48022_full.jpg",
          name: "kserival",
          desc: "管理员",
          steamid: "76561198952512139"
        },
        {
          avatar: "https://avatars.cdn.queniuqe.com/74ddb68fc92df5142255f172ef97a270487724d9_full.jpg",
          name: "AYou",
          desc: "管理员",
          steamid: "76561198866536346"
        },
        {
          avatar: "https://avatars.cdn.queniuqe.com/c4e4fcd059c732056c1c68f77255cc36c1a904d6_full.jpg",
          name: "Zom Enea",
          desc: "管理员",
          steamid: "76561198204142041"
        },
        {
          avatar: "https://avatars.cdn.queniuqe.com/11cf8cad00d51c24a04469e4faf406dbe0b2b35a_full.jpg",
          name: "Coq",
          desc: "管理员",
          steamid: "76561198416623769"
        },
        {
          avatar: "https://media.cdn.queniuqe.com/steamcommunity/public/images/items/2861690/0d81afcfee604d3b93b374ac74c2ce2d34a5b63a.gif",
          name: "nia呐",
          desc: "管理员",
          steamid: "76561198843870183"
        },
        {
          avatar: "https://avatars.cdn.queniuqe.com/8006dd5a3baf1b96871aa13fd07dbc02daabf855_full.jpg",
          name: "FrenchA",
          desc: "管理员",
          steamid: "76561198244943052"
        }
      ],
      cinemaList: [
        {
          avatar: "https://avatars.cdn.queniuqe.com/a408cefad71e51eb8100cc9cae23468cfa6b49f2_full.jpg",
          name: "NekoGan",
          desc: "Teas Official 创始人 & 总服服主",
          steamid: "76561198282905317"
        },
        {
          avatar: "https://avatars.cdn.queniuqe.com/ca6eb0297cc5ea11ea6ca7307e535c090c69cf6a_full.jpg",
          name: "库特",
          desc: "超级管理员",
          steamid: "76561199069707140"
        },
        {
          avatar: "https://avatars.cdn.queniuqe.com/7f1065dfa7e144183a9c30e080872565c9eefb58_full.jpg",
          name: "StBn114.",
          desc: "超级管理员",
          steamid: "76561198282843775"
        },
        {
          avatar: "https://avatars.cdn.queniuqe.com/4e029ec4cae2c09b6d7da43fd0328b8e6a3ca8db_full.jpg",
          name: "辉燚阳",
          desc: "超级管理员",
          steamid: "76561199230128995"
        },
        {
          avatar: "https://avatars.cdn.queniuqe.com/4e029ec4cae2c09b6d7da43fd0328b8e6a3ca8db_full.jpg",
          name: "Kliment",
          desc: "管理员",
          steamid: "76561198173758439"
        }
      ],
      minecraftList: [
        {
          avatar: "https://avatars.cdn.queniuqe.com/a408cefad71e51eb8100cc9cae23468cfa6b49f2_full.jpg",
          name: "NekoGan",
          desc: "Teas Official 创始人 & 总服服主",
          steamid: "76561198282905317"
        }
      ],
      developers: [
        {
          avatar: "https://avatars.cdn.queniuqe.com/a408cefad71e51eb8100cc9cae23468cfa6b49f2_full.jpg",
          name: "NekoGan",
          desc: "主要开发者",
          steamid: "76561198282905317"
        }
      ]
    }
  }
});
</script>

<style scoped>
.q-tab-panel hr {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
