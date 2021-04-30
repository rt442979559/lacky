<template>
  <div class="Prize">
    <div class="home-page-content">
      <ul>
        <li v-for="item in userList" :key="item.id" @click="handleSelect(item)">
          <a-popover placement="bottom">
            <template slot="content">
              <div>
                {{
                  item.frequency > 0
                    ? `剩余抽取次数:${item.frequency}`
                    : "无抽奖次数"
                }}
              </div>
              <div>持有金币:{{ item.gold_coin }}</div>
            </template>
            <template slot="title">
              <span>{{item.role}}</span>
            </template>
            <img :src="item.main_img_url" :alt="item.name" width="100%" />
            <p>{{ item.name }}</p>
          </a-popover>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getUserList } from "@/assets/api/draw";
export default {
  name: "Prize",
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    this.initUser();
  },
  methods: {
    // *初始化用户数据
    async initUser() {
      const {
        data: { data: res },
      } = await getUserList();
      this.userList = res;
    },
    // *选择用户
    handleSelect(item) {
      if (item.frequency <= 0) {
        this.$notification.open({
          message: `Error !`,
          description: `剩余抽奖次数不足`,
          placement: "topRight",
          icon: <a-icon type="bug" style="color: #eb2f96" />,
          duration: 0,
        });
        return;
      } else {
        this.$router.push({
          path: "/admin/fate",
          query: { id: item.id },
        });
      }
    },
  },
};
</script>

<style lang="scss">
.Prize {
  .home-page-content {
    padding: 0 1%;
    position: relative;
    ul {
      // color: #;
      list-style: none;
      padding-left: 0;
      margin: 0;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      column-gap: 1%;
      row-gap: 17.5%;
      li {
        padding: 20px;
        background-color: #fff;
        border-radius: 15px;
        overflow: hidden;
        transition: 0.3s all;
        img {
          transition: 0.3s all;
        }
        &:hover {
          cursor: pointer;
          transition: 0.3s all;
          color: #fff;
          background-color: #003554;
          img {
            transition: 0.3s all;
            transform: scale(1.2);
          }
        }
        p {
          text-align: center;
          font-size: 18px;
          font-weight: bold;
          margin: 0;
          padding: 20px 0;
        }
      }
    }
  }
}
</style>
