<template>
    <div class="Problem">
        <!-- 楼主 -->
        <a-layout style="min-height:calc(100vh - 30px)">
            <a-layout-content
                style="background: #fff;padding: 20px;display: flex;flex-direction: column; justify-content: space-between;">
                <div class="header">
                    <h2>这个就是标题没什么好说的</h2>
                    <span>
                        <a-icon type="history" />&nbsp;2021.4.29
                        <a-divider type="vertical" />鲸币250
                        <a-divider type="vertical" />状态：新发表
                        <a-divider type="vertical" />回复数：4
                    </span>
                    <a-divider />
                    <div class="content" v-html="mycontent"></div>
                </div>
                <div class="footer">
                    <a-divider />
                    <a-input placeholder="我来回答你的疑问" :disabled="true"/>
                    <a-button type="primary" style="margin-top: 15px;" @click="scroolTo">
                        发表
                    </a-button>
                </div>
            </a-layout-content>
            <a-layout-sider :width="250" class="mySlider">
                <img src="@/assets/user1.svg" alt="" width="50%">
                <p>陈俊</p>
                <p>技术部</p>
                <p style="text-align: left;">Email:chenjun@lanjingshuzi.com</p>
                <p style="text-align: left;">手机:13125167015</p>
                <p style="text-align: left;">鲸币:10000</p>
                <p style="text-align: left;">抽奖券:5</p>
                <p style="text-align: left;">注册时间:2021-04-28 14:48:42</p>
            </a-layout-sider>
        </a-layout>
        <!-- 评论 -->
        <a-layout style="margin-top: 20px;" v-for="item in 12" :key="item">
            <a-layout-content
                style="background: #fff;padding: 20px;display: flex;flex-direction: column; justify-content: space-between;">
                <div class="header">
                    <span>1楼</span>&nbsp;
                    <span>发表于:2021.4.29</span>
                    <a-divider />
                    <div class="content" v-html="mycontent"></div>
                </div>
                <div class="footer">
                    <a-divider />
                    <a @click="scroolTo">回复</a>
                    <a-divider type="vertical" /><a>采纳</a>
                </div>

            </a-layout-content>
            <a-layout-sider :width="250" class="mySlider">
                <img src="@/assets/user1.svg" alt="" width="50%">
                <p>陈俊</p>
                <p>技术部</p>
                <p style="text-align: left;">Email:chenjun@lanjingshuzi.com</p>
                <p style="text-align: left;">手机:13125167015</p>
                <p style="text-align: left;">鲸币:10000</p>
                <p style="text-align: left;">抽奖券:5</p>
                <p style="text-align: left;">注册时间:2021-04-28 14:48:42</p>
            </a-layout-sider>
        </a-layout>
        <!-- 回复 -->
        <div class="answer">
            <Editor ref='editor' />
            <a-button type="primary" style="margin-top: 15px;">
                回复主题
            </a-button>
        </div>
    </div>
</template>

<script>
    import Editor from '@/components/Editor'
    export default {
        name: 'Problem',
        components: { Editor },
        data() {
            return {
                visible: false,
                mycontent: `这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试这是测试`
            }
        },
        methods: {
            scroolTo() {
                this.$emit('change')
            }
        }
    }
</script>

<style lang="scss">
    .Problem {
        .mySlider {
            background: #fff;
            text-align: center;
            padding: 15px;
            margin-left: 15px;
        }

        .messagelist {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);

            span {
                word-wrap: break-word;
                word-break: break-all;
            }
        }

        .answer {
            margin-top: 20px;
            background: #fff;
            padding: 15px;
        }
    }
</style>