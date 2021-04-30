<template>
  <div class="home">
    <a-layout class="mylayout">
      <a-layout-header class="myHeader">
        <NavBar />
      </a-layout-header>
      <a-layout-content class="myContent">
        <div class="home-page">
          <div class="home-page-banner">
            <main>
              <h1>幸运小鲸仔</h1>
              <p>每一个成功的人，都有一段沉默的努力时光，里面有艰辛的汗水，也有无数次失败时的泪水。很多普通人都是在黎明前一刻认输了，只有那些能从黑暗中穿行而过的人，最后才能获得真正的成功。
                <br>
                <b>by:高晓超</b>
              </p>
            </main>
            <img src="@/assets/undraw_send_gift_7o4m.svg" alt="gift" width="60%">
          </div>
        </div>
        <div class="home-page-content">
          <ul>
            <li v-for="item in userlist" :key="item.key">
              <img :src="item.url" :alt="item.name" width="100%">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </a-layout-content>
      <a-layout-footer class="myFooter">
        <section>蓝鲸技术团队荣誉出品@2021 By:Ben Jack Jon</section>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar'
  const userlist=[
    {
      key:1,
      name:'章方清',
      url:require('@/assets/user1.svg')
    },
    {
      key:3,
      name:'池炯翰',
      url:require('@/assets/user3.svg')
    },
    {
      key:12,
      name:'陈俊',
      url:require('@/assets/user12.svg')
    },
    {
      key:2,
      name:'陈佳玨',
      url:require('@/assets/user2.svg')
    },
    {
      key:4,
      name:'张伟',
      url:require('@/assets/user4.svg')
    },
    {
      key:5,
      name:'徐闯',
      url:require('@/assets/user5.svg')
    },
    {
      key:6,
      name:'叶魏君',
      url:require('@/assets/user6.svg')
    },
    {
      key:7,
      name:'Harry',
      url:require('@/assets/user7.svg')
    },
    {
      key:8,
      name:'仇以勒',
      url:require('@/assets/user8.svg')
    },
    {
      key:9,
      name:'郑林飞',
      url:require('@/assets/user9.svg')
    },
    {
      key:10,
      name:'高晓超',
      url:require('@/assets/user10.svg')
    },
    {
      key:11,
      name:'凌林概',
      url:require('@/assets/user11.svg')
    },
  ]
  export default {
    name: 'Home',
    components: {
      NavBar
    },
    data(){
      return {
        userlist
      }
    }
  }
</script>

<style scoped lang="scss">
  .mylayout {
    min-height: 200vh;
  }

  .myHeader {
    width: 100%;
    color: #fff;
    background-color: rgb(0, 53, 84);
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    z-index: 1;
  }

  .myContent {
    margin-top: 64px;
    padding: 0;
  }

  .myFooter {
    padding: 15px 0;

    & section {
      max-width: 1200px;
      text-align: center;
      margin: 0 auto;
    }
  }

  .home-page{
    position: relative;
    background-color: #2585a6;

  }

  .home-page::after{
    content: "";
    display: block;
    position: absolute;
    top: 85%;
    width: 100%;
    height: 350px;
    background: #f0f2f5;
    transform: skewY(-5deg);
  }



  .home-page-banner,
  .home-page-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  

  .home-page-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom:380px;

    h1,p{
      color: #fff;
    }
    h1{
      font-size: 48px;
      font-weight: bold;
    }

    p{
      font-size: 18px;
      line-height: 1.7;
      letter-spacing: 1.3px
    }

    img{
      margin: 100px 0;
    }
  }

  .home-page-content{
    position: relative;
    margin-top: -300px;
    ul{
      list-style: none;
      padding-left:0;
      margin:0;
      display:grid;
      grid-template-columns: repeat(3,1fr);
      grid-gap: 20px;

      li{
        padding: 20px;
        background-color: #FFF;
        border-radius: 15px;
        overflow: hidden;

        p{
          text-align:center;
          font-size:18px;
          font-weight:bold;
          margin:0;
          padding:20px 0;
        }
      }
    }
  }
</style>