<template>
    <a-layout id="components-layout-demo-fixed-sider">
        <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
            <div class="logo">
                <img src="@/assets/user1.svg" alt="" width="50%">
                <p>Ban</p>
            </div>
            <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
                <a-menu-item key="1">
                    <router-link tag="span" to="/admin" style="display: block;">首页</router-link>
                </a-menu-item>
                <a-menu-item key="2">
                    <router-link tag="span" to="/admin/forum" style="display: block;">知识问答</router-link>
                </a-menu-item>
                <a-menu-item key="3">
                    <router-link tag="span" to="/admin/prize" style="display: block;">抽奖</router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout :style="{ marginLeft: '200px' }">
            <a-layout-content :style="{ margin: '0', overflow: 'initial','min-height':'100vh',padding:'15px'}">
                <vue-page-transition>
                    <!-- 不需要缓存!!!!! -->
                    <keep-alive exclude="Fate">
                        <router-view @change="scroolTo"></router-view>
                    </keep-alive>
                </vue-page-transition>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
    export default {
        name: 'Admin',
        methods: {
            scroolTo() {
                this.$emit('change')
            }
        }
    }
</script>

<style scoped lang="scss">
    .Admin {
        height: 100vh;
        overflow: hidden;
    }

    .logo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;

        p {
            color: #fff;
            font-size: 18px;
            margin-top: 10px;
        }
    }
</style>