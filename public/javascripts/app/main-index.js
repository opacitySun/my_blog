define(['jquery','fnbase','./controller/c-index','./model/m-index'],function($,fnbase,controller,model){
    //获取作品列表
    controller.getWorksList();
    //判断是否显示选择精灵弹出窗
    controller.fairyModal();
});