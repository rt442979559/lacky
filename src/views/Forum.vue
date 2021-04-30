<template>
    <div class="Forum">
        <a-tabs>
            <a-tab-pane key="1" tab="管理置顶">
                <a-table :columns="columns" :data-source="foatAdminData" :pagination="false">
                    <a slot="l-title" slot-scope="text" @click="$router.push('/admin/problem')">{{ text }}</a>
                </a-table>
            </a-tab-pane>
            <a-tab-pane key="2" tab="内部悬赏">
                <a-table :columns="columns" :data-source="foatData">
                    <a slot="l-title" slot-scope="text" @click="$router.push('/admin/problem')">{{ text }}</a>
                </a-table>
            </a-tab-pane>
            <a-button type="primary" slot="tabBarExtraContent" @click="showModal">
                发表新帖
            </a-button>
        </a-tabs>
        <!-- 发表帖子 -->
        <a-modal centered v-model="visible" title="发表新主题" :width="800" :footer="null" :closable="false" @ok="handleOk">
            <a-form-model ref="ruleForm" :model="formData" :rules="rules" layou="vertical" v-bind="{}">
                <div class="left_box">
                    <a-row type="flex" justify="space-between">
                        <a-col :span="20">
                            <a-form-model-item ref="title" prop="title">
                                <a-input placeholder="帖子标题" :maxLength="250" v-model="formData.title"
                                    @blur="() => {$refs.title.onFieldBlur();}" />
                            </a-form-model-item>
                        </a-col>
                        <a-col :span="3" >
                            <a-form-model-item ref="reward" prop="reward">
                                <a-input-number v-model="formData.reward" :min="50"
                                    :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                    :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                                    @blur="() => {$refs.reward.onFieldBlur();}" />
                            </a-form-model-item>
                        </a-col>
                      </a-row>
                    <a-form-model-item prop="content">
                        <Editor ref='editor' />
                    </a-form-model-item>
                    <a-form-model-item>
                        <a-button type="primary">
                            发表新帖
                        </a-button>
                    </a-form-model-item>
                </div>
            </a-form-model>
        </a-modal>
    </div>
</template>

<script>
    const columns = [
        {
            title: '标题',
            dataIndex: 'l-title',
            key: 'l-title',
            ellipsis: true,
            scopedSlots: { customRender: 'l-title' },
        },
        {
            title: '发帖人',
            dataIndex: 'user',
            key: 'user',
            ellipsis: true,
            width: 150
        },
        {
            title: '悬赏额度',
            dataIndex: 'reward',
            key: 'reward',
            ellipsis: true,
            width: 150
        },
        {
            title: '发布时间',
            dataIndex: 'created_at',
            key: 'created_at',
            ellipsis: true,
            width: 150
        },
        {
            title: '截止时间',
            dataIndex: 'time',
            key: 'time',
            ellipsis: true,
            width: 150
        }
    ];

    const adminData = [
        {
            id: 1,
            title: "这是帖子的标题",
            content: "这是帖子的内容",
            handle: 0,
            reward: 250,
            time: "2021-05-05",
            top: 0,
            publishable_id: 1,
            created_at: "2021-04-28 15:51:47",
            updated_at: "2021-04-28 15:51:47",
            user: '陈俊'
        }
    ];

    const data = [
        {
            id: 1,
            title: "这是帖子的标题",
            content: "这是帖子的内容",
            handle: 0,
            reward: 250,
            time: "2021-05-05",
            top: 0,
            publishable_id: 1,
            created_at: "2021-04-28 15:51:47",
            updated_at: "2021-04-28 15:51:47",
            user: '陈俊'
        },
        {
            id: 1,
            title: "这是帖子的标题",
            content: "这是帖子的内容",
            handle: 0,
            reward: 250,
            time: "2021-05-05",
            top: 0,
            publishable_id: 1,
            created_at: "2021-04-28 15:51:47",
            updated_at: "2021-04-28 15:51:47",
            user: '陈俊'
        },
        {
            id: 1,
            title: "这是帖子的标题",
            content: "这是帖子的内容",
            handle: 0,
            reward: 250,
            time: "2021-05-05",
            top: 0,
            publishable_id: 1,
            created_at: "2021-04-28 15:51:47",
            updated_at: "2021-04-28 15:51:47",
            user: '陈俊'
        }
    ];

    const formData = {
        title: "",
        content: "",
        reward: 50
    }

    const rules = {
        title: [{ required: true, message: '请输入新帖标题', trigger: 'blur' }],
        content: [{ required: true, message: '新帖内容不能为空', trigger: ['change', 'blur'] }],
        reward: [{ required: true, message: '悬赏最低50鲸币', trigger: ['change', 'blur'] }]
    }

    import Editor from '@/components/Editor'
    export default {
        name: 'Forum',
        components: { Editor },
        computed: {
            foatAdminData() {
                const newData = this.adminData.map(item => {
                    const newItem = {
                        key: item.id,
                        'l-title': item.title,
                        handle: item.handle,
                        reward: `${item.reward}鲸币`,
                        time: item.time,
                        publishable_id: item.publishable_id,
                        created_at: `${item.created_at.split(' ')[0]}`,
                        updated_at: `${item.updated_at.split(' ')[0]}`,
                        user: item.user
                    }
                    return newItem
                })
                return newData
            },
            foatData() {
                const newData = this.data.map(item => {
                    const newItem = {
                        key: item.id,
                        'l-title': item.title,
                        handle: item.handle,
                        reward: `${item.reward}鲸币`,
                        time: item.time,
                        publishable_id: item.publishable_id,
                        created_at: `${item.created_at.split(' ')[0]}`,
                        updated_at: `${item.updated_at.split(' ')[0]}`,
                        user: item.user
                    }
                    return newItem
                })
                return newData
            }
        },
        data() {
            return {
                visible: false,
                adminData,
                data,
                columns,
                formData,
                rules
            };
        },
        methods: {
            //Modal方法
            showModal() {
                this.visible = true;
            },
            handleOk(e) {
                console.log(e);
                this.visible = false;
            },
            //表单方法
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
            handleSelectChange(value) {
                console.log(value);
                this.form.setFieldsValue({
                    note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
                });
            },
        }
    };
</script>

<style scoped lang="scss">
    .Forum {}
</style>