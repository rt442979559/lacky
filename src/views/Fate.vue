<template>
  <div class="Fate">
    <!-- <a-button @click="test">测试按钮</a-button> -->
    <div class="turntable">
      <a-radio-group v-model="selectValue" @change="onChange">
        <a-radio :value="1" class="content">
          <img src="@/assets/angel.png" alt="" />
        </a-radio>
        <a-radio :value="0" class="content">
          <img src="@/assets/demon.png" alt="" />
        </a-radio>
      </a-radio-group>
      <LuckyWheel
        ref="LuckyWheel"
        width="700px"
        height="700px"
        :prizes="prizes"
        :default-style="defaultStyle"
        :blocks="blocks"
        :buttons="buttons"
        @start="startCallBack"
        @end="endCallBack"
      />
    </div>

    <div class="Winning_list">
      <vue-seamless-scroll
        :class-option="{ step: 0.2 }"
        :data="winningList"
        class="warp"
      >
        <ul class="item">
          <li v-for="(item, index) in winningList" :key="index">
            <span class="title" v-text="item.profiteer_name"></span>
            <span class="title" v-text="item.details"></span>
            <span class="date" v-text="item.created_at"></span>
          </li>
        </ul>
      </vue-seamless-scroll>
    </div>
  </div>
</template>

<script>
import vueSeamlessScroll from "vue-seamless-scroll";
import { myDraw, getDrawList } from "@/assets/api/draw";
export default {
  name: "Fate",
  data() {
    return {
      winningList: [],
      selectValue: 1, //选择天使:1 or 恶魔:0
      prizes: [], //奖品池
      message: {
        /**
         * @param {Number} profiteer_id当前抽奖人的id
         * @param {Number => 0:恶魔,1:天使} luck
         */
        profiteer_id: this.$route.query.id,
        luck: 1,
      },
      result: "", //抽奖结果

      defaultStyle: {
        fontColor: "#fff",
        fontSize: "15px",
      },
      activeStyle: {
        fontColor: "#ff4a4c",
        background: "pink",
        shadow: "0 5 1 #ebf1f4",
      },
      blocks: [
        { padding: "9px", background: "#134f72" },
        { padding: "6px", background: "#fff" },
        { padding: "9px", background: "#134f72" },
        
      ],
      buttons: [
        { radius: "50px", background: "#003554" },
        { radius: "45px", background: "#fff" },
        { radius: "41px", background: "#003554", pointer: true },
        {
          radius: "35px",
          background: "#fd6e75",
          fonts: [
            {
              text: `Go`,
              fontColor: "#fff",
              top: "-70%",
              fontSize: "40px",
            },
          ],
          //   imgs: [{ src: require('./img/button.png'), width: '65%', top: '-50%' }]
        },
      ],
    };
  },
  mounted() {
    this.initPrizesList();
    this.initWinningList({ luck: 1 });
  },
  methods: {
    test() {
      console.log(this.message);
    },
    // *选择天使 or 恶魔
    onChange(e) {
      if (e.target.value === 1) {
        this.message.luck = 1;
        this.blocks[0].background = "#134f72";
        this.initWinningList({ luck: 1 });
        this.initPrizesList();
      } else {
        this.message.luck = 0;
        this.blocks[0].background = "#666";
        let list = [
          {
            name: "50个俯卧撑（女生50个深蹲）",
            img: require("@/assets/暂无优惠券.svg"),
            color: "#333333",
          },
          {
            name: "有深度的提出公司管理的提升点",
            img: require("@/assets/暂无优惠券.svg"),
            color: "#414141",
          },
          {
            name: "来场个人分享秀",
            img: require("@/assets/红包.svg"),
            color: "#333333",
          },
          {
            name: "做个好榜样一周内早到20分钟",
            img: require("@/assets/玩.svg"),
            color: "#414141",
          },
          {
            name: "给大家讲个笑话，必须使所有人都要笑",
            img: require("@/assets/冰镇饮料.svg"),
            color: "#333333",
          },
          {
            name: "50元学习基金赞助",
            img: require("@/assets/玩.svg"),
            color: "#414141",
          },
          {
            name: "值日一周",
            img: require("@/assets/玩.svg"),
            color: "#333333",
          },
          {
            name: "夸一夸公司里你最想夸的人",
            img: require("@/assets/拥抱大海.svg"),
            color: "#414141",
          },
          {
            name: "周六加班一次",
            img: require("@/assets/红包.svg"),
            color: "#333333",
          },
          {
            name: "周六加班两次",
            img: require("@/assets/可乐.svg"),
            color: "#414141",
          },
        ];
        this.initWinningList({ luck: 0 });
        this.initPrizesList(list);
      }
    },

    // *获取奖品列表
    initPrizesList(list) {
      const prizes = [];
      let data = [
        {
          name: "早退半小时一次",
          img: require("@/assets/玩.svg"),
          color: "#fd6e75",
        },
        {
          name: "早退半小时一次2张",
          img: require("@/assets/暂无优惠券.svg"),
          color: "#134f72",
        },
        {
          name: "外出带薪学习一次",
          img: require("@/assets/红包.svg"),
          color: "#fd6e75",
        },
        {
          name: "和老板的一次午餐会",
          img: require("@/assets/玩.svg"),
          color: "#134f72",
        },
        {
          name: "白花蛇草水",
          img: require("@/assets/冰镇饮料.svg"),
          color: "#fd6e75",
        },
        {
          name: "带薪休假一天",
          img: require("@/assets/玩.svg"),
          color: "#134f72",
        },
        {
          name: "带薪休假两天",
          img: require("@/assets/玩.svg"),
          color: "#fd6e75",
        },
        {
          name: "来次爱的抱抱（可指定想要的人）",
          img: require("@/assets/拥抱大海.svg"),
          color: "#134f72",
        },
        {
          name: "20元零食券2张",
          img: require("@/assets/红包.svg"),
          color: "#fd6e75",
        },
        {
          name: "崂山可乐一瓶",
          img: require("@/assets/可乐.svg"),
          color: "#134f72",
        },
        {
          name: "200元礼品1张",
          img: require("@/assets/红包.svg"),
          color: "#fd6e75",
        },
        {
          name: "500元礼品卡1张",
          img: require("@/assets/红包.svg"),
          color: "#134f72",
        },
        {
          name: "150元元助学补贴",
          img: require("@/assets/红包.svg"),
          color: "#fd6e75",
        },
        {
          name: "300元助学补贴",
          img: require("@/assets/红包.svg"),
          color: "#134f72",
        },
      ];
      if (list) {
        list.forEach((item) => {
          prizes.push({
            name: item.name,
            background: item.color,
            fonts: [{ text: item.name, top: "12%" }],
            imgs: [{ src: item.img, width: "30%", top: "35%" }],
          });
        });
      } else {
        data.forEach((item) => {
          prizes.push({
            name: item.name,
            background: item.color,
            fonts: [{ text: item.name, top: "12%" }],
            imgs: [{ src: item.img, width: "45%", top: "35%" }],
          });
        });
      }
      this.prizes = prizes;
    },
    // *转盘启动
    startCallBack() {
      this.getResult();
      this.$refs.LuckyWheel.play();
      setTimeout(() => {
        this.$refs.LuckyWheel.stop(this.result);
      }, 3000);
    },
    // *弹出结果
    endCallBack(prize) {
      alert(`恭喜你获得 ${prize.name}`);
    },
    // *获取抽奖结果
    async getResult() {
      const {
        data: { data: res },
      } = await myDraw(this.message);
      let arr = [];
      this.prizes.forEach((item) => {
        arr.push(item.name);
      });
      this.result = arr.indexOf(res);
      console.log(this.result);
    },

    // *获取获奖列表
    async initWinningList(params) {
      const {
        data: { data: res },
      } = await getDrawList(params);
      this.winningList = res;
    },
  },
  components: { vueSeamlessScroll },
};
</script>

<style lang="scss" scoped>
.turntable {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;
  .ant-radio-group {
    display: flex;
    width: 800px;
    justify-content: space-between;
    img {
      transition: 0.3s all;
      width: 120px;
      &:hover {
        transition: 0.3s all;
        transform: scale(1.5);
      }
    }
  }
  &::v-deep .ant-radio-wrapper {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
  }
}
.warp {
  height: 270px;
  width: 50%;
  margin: 0 auto;
  overflow: hidden;
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    li,
    a {
      display: block;
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
    }
  }
}
</style>
