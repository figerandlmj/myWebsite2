// 头部导航
export function headerScroll() {
  let header=$(".myHeader"); //得到导航对象
  let win=$(window); //得到窗口对象
  let doc=$(document);//得到document文档对象。
  win.scroll(function(){
      if(doc.scrollTop() >= 100){
          header.addClass("myHeaderActive");
      }else{
          header.removeClass("myHeaderActive");
      }
  })
}
