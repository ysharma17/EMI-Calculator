﻿
/************************************
* Developed by Illimar Pihlamäe		*
* e-mail: illimar@idra.pri.ee		*
* Euroland Estonia © 2012			*
* e-mail: illimar@euroland.com		*
*************************************/

var Graphics={_fps:null,_msf:null,frameCall:null,_frame:function(){if(typeof Graphics.frameCall=='function')Graphics.frameCall();var	temp=Page.HintText;if(typeof temp=='object'&&temp!=null){Page.HintText.frameCall();}setTimeout(Graphics._frame,Graphics._msf);},fps:function(frameRate){Graphics._fps=frameRate;Graphics._msf=Math.round(1000/Graphics._fps);},Obj:{xy:function(obj){var ret=new Object();ret.x=0;ret.y=0;ret.scrollLeft=0;ret.scrollTop=0;if(obj.offsetParent){do{ret.x+=parseInt(obj.offsetLeft);ret.y+=parseInt(obj.offsetTop);ret.scrollLeft+=parseInt(obj.scrollLeft);ret.scrollTop+=parseInt(obj.scrollTop);}while(obj=obj.offsetParent);}ret.x-=ret.scrollLeft;ret.y-=ret.scrollTop;var temp=parseInt(document.body.scrollLeft);ret.x+=temp;ret.scrollLeft-=temp;temp=parseInt(document.body.scrollTop);ret.y+=temp;ret.scrollTop-=temp;return ret;},xyID:function(strID){var obj=document.getElementById(strID);return Graphics.Obj.xy(obj);},pos:function(obj){var ret=Graphics.Obj.xy(obj);ret.width=parseFloat(obj.offsetWidth);ret.height=parseFloat(obj.offsetHeight);return ret;},posID:function(strID){var obj=document.getElementById(strID);return Graphics.Obj.pos(obj);},widthHeight:function(dom){var ret=new Object();ret.width=parseFloat(dom.offsetWidth);ret.height=parseFloat(dom.offsetHeight);return ret;},widthHeightID:function(ID){var dom=document.getElementById(ID);return Graphics.Obj.widthHeight(dom);}},Canvas:{drawScaledImage:function(scaleW,scaleH,img,ctx){var minScale=0.75;switch(Page.browser){case 'iPad':case 'iPhone':minScale=0;break;}if(scaleW >=minScale&&scaleH >=minScale){ctx.save();ctx.scale(scaleW,scaleH);ctx.drawImage(img,0,0);ctx.restore();return;}var dom1=document.createElement('canvas'),dom2=document.createElement('canvas'),ctx1=dom1.getContext('2d'),ctx2=dom2.getContext('2d'),targetWidth=Math.floor(img.width*scaleW),targetHeight=Math.floor(img.height*scaleH),count=0,oldDom,newDom,oldCtx,newCtx;dom1.width=img.width;dom1.height=img.height;ctx1.drawImage(img,0,0);do{count++;if(count % 2){oldDom=dom1;oldCtx=ctx1;newDom=dom2;newCtx=ctx2;}else{oldDom=dom2;oldCtx=ctx2;newDom=dom1;newCtx=ctx1;}scaleW=oldDom.width*minScale;if(scaleW < targetWidth)scaleW=targetWidth;scaleW=scaleW/oldDom.width;newDom.width=Math.floor(oldDom.width*scaleW);scaleH=oldDom.width*minScale;if(scaleH < targetHeight)scaleH=targetHeight;scaleH=scaleH/oldDom.height;newDom.height=Math.floor(oldDom.height*scaleH);newCtx.save();newCtx.scale(scaleW,scaleH);newCtx.drawImage(oldDom,0,0);newCtx.restore();}while(newDom.width > targetWidth);ctx.drawImage(newDom,0,0);}}};