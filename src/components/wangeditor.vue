<template>
  <div class="editor">
     <div ref="editorElem"  id="editor">

    </div>
   
  </div>
</template>

<script>
// import Editor from 'wangEditor';
export default {
  name: 'editor',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      content:'',
    }
  },
  methods:{
      initEditor(){ 
        let _this = this;
        let E = wangEditor;
        let editor = new E( this.$refs.editorElem );
        editor.customConfig.menus = [
        'head',  // 标题
        'bold',  // 粗体
        'fontSize',  // 字号
        'fontName',  // 字体
        'underline',  // 下划线
        'foreColor',  // 文字颜色
        'justify',  // 对齐方式  
        'image',  // 插入图片
        'table',  // 表格
        'undo',  // 撤销
        'redo'  // 重复
     ];
     editor.customConfig.onchange = function (html) {
            
            _this.$emit('getVal',html);
           
      }
      editor.customConfig.uploadImgServer = '/upload'
       editor.customConfig.showLinkImg = false
        editor.create()
        
        
      }
  },
  mounted(){
      this.initEditor();
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#editor{
	text-align:left;
}
</style>
