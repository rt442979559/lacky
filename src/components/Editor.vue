<!-- 
自定义方法：
initialize  初始化文本数据   Function    this.$refs.editor.initialize() 
-->

<template>
    <div class="TinyEditor">
        <Editor v-model="value" :init="init"></Editor>
    </div>
</template>
<script>
    // 引入组件
    import tinymce from 'tinymce/tinymce';
    import Editor from '@tinymce/tinymce-vue';
    import 'tinymce/icons/default/icons';
    import 'tinymce/themes/silver';
    // 引入富文本编辑器主题的js和css
    import 'tinymce/themes/silver/theme.min';
    import 'tinymce/skins/ui/oxide/skin.min.css';
    // 扩展插件
    import 'tinymce/plugins/image';
    import 'tinymce/plugins/link';
    import 'tinymce/plugins/code';
    import 'tinymce/plugins/table';
    import 'tinymce/plugins/lists';
    import 'tinymce/plugins/wordcount'; // 字数统计插件
    import 'tinymce/plugins/media';// 插入视频插件
    import 'tinymce/plugins/template';// 模板插件
    import 'tinymce/plugins/fullscreen';
    import 'tinymce/plugins/paste';
    import 'tinymce/plugins/preview';
    import 'tinymce/plugins/contextmenu';
    import 'tinymce/plugins/textcolor';



    export default {
        name: 'TinyEditor',
        components: { Editor },
        data() {

            return {
                value: '',
                init: {
                    language_url: '/tinymce/langs/zh_CN.js',// 语言包的路径
                    language: 'zh_CN',//语言
                    external_plugins: { 'powerpaste': '/tinymce/powerpaste/plugin.min.js' },
                    powerpaste_word_import: 'propmt',// 参数可以是propmt, merge, clear，效果自行切换对比
                    powerpaste_html_import: 'propmt',// propmt, merge, clear
                    powerpaste_allow_local_images: true,
                    paste_data_images: true,
                    //配置
                    skin_url: '/tinymce/skins/ui/oxide',// skin路径
                    height: 300,//编辑器高度
                    branding: false,//是否禁用“Powered by TinyMCE”
                    menubar: '',//顶部菜单栏显示,
                    elementpath: false,//隐藏底栏的元素路径
                    fontsize_formats: '11px 12px 14px 16px 18px 24px 36px 48px',
                    plugins: 'lists image media table wordcount link',
                    toolbar: 'fontsizeselect bold italic forecolor backcolor alignleft aligncenter alignright table image link'
                }
            }
        },
        mounted() {
            tinymce.init({})
        },
        methods: {

        }
    }
</script>
<style scoped lang="scss">
</style>