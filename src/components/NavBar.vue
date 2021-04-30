<template>
    <div class="NavBar">
        <div class="banner">蓝鲸自嗨娱乐平台</div>
        <div class="navlist">
            <a-menu v-model="current" mode="horizontal" class="mymenu">
                <a-menu-item :key="item.key" v-for="item in navList">
                    <router-link :to="item.path">{{item.title}}</router-link>
                </a-menu-item>
            </a-menu>
        </div>
    </div>
</template>

<script>
    const navList = [
        {
            key: '首页',
            title: '首页',
            path: '/'
        },
        {
            key: '登录',
            title: '登录Blueweir账号',
            path: '/login'
        }
    ]
    export default {
        name: 'NavBar',
        data() {
            return {
                current: ['首页'],
                navList,
            }
        }
    }
</script>

<style scoped lang="scss">
    .NavBar {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .banner{
        font-size: 18px;
        font-weight: bold;
    }

    .mymenu {
        background-color: rgb(0, 53, 84);
        border-bottom: 1px solid rgb(0, 53, 84);

        &::v-deep .ant-menu-item-selected {
            color: #fff;
            border-bottom: 2px solid #fff;
            a{
                color: #fff; 
            }
        }

        &::v-deep .ant-menu-item{
            a{
                color: #fff; 
            }
        }

        &::v-deep .ant-menu-item:hover {
            color: #fff;
            border-bottom: 2px solid #fff;
            a{
                color: #fff; 
            }
        }
    }
</style>