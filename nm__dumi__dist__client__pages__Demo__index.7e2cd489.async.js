"use strict";(self.webpackChunkdatabend_profile_ui=self.webpackChunkdatabend_profile_ui||[]).push([[9],{65149:function(L,s,e){e.r(s),e.d(s,{default:function(){return E}});var o=e(53683),n=e(67294),D=e(52289),g=function(){var O=(0,o.UO)(),t=O.id,a=(0,o.FO)(t),R=(0,D.m)({id:t,component:a.component,renderOpts:a.renderOpts}),h=R.canvasRef,v=a||{},m=v.component,d=v.renderOpts,r=(0,o.kw)(t),i=r.node,f=r.setSource,u=r.error,l=r.loading,w=i||(d!=null&&d.renderer?(0,n.createElement)("div",{ref:h}):m&&(0,n.createElement)(m));return(0,n.useEffect)(function(){var c=function(p){p.data.type==="dumi.liveDemo.setSource"&&f(p.data.value)};return window.addEventListener("message",c),function(){return window.removeEventListener("message",c)}},[f]),(0,n.useEffect)(function(){!l&&(u||i)&&window.postMessage({type:"dumi.liveDemo.compileDone",value:{err:u}})},[u,i,l]),w},E=g}}]);