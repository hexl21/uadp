webpackJsonp([5],{0:function(e,t,l){e.exports=l(356)},353:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(){a({type:"updateRoleModule",params:{selectedModules:o}})}function l(e){r&&a({type:"checkModules",params:e})}var a=e.dispatch,r=e.isSet,o=e.selectedModules,u=e.visible,d=e.loading,s=e.moduleTree,f=r?"\u8bbe\u7f6e\u529f\u80fd\u6a21\u5757":"\u67e5\u770b\u529f\u80fd\u6a21\u5757",p=function e(t){return t.map(function(t){return t.children&&t.children.length>0?y.default.createElement(v,{title:t.name,key:""+t.key},e(t.children)):y.default.createElement(v,{title:t.name,key:""+t.key,isLeaf:t.isLeaf})})},m=y.default.createElement("div",null,y.default.createElement(i.default,{onClick:function(){return a({type:"closeModuleModal"})}},"\u8fd4\u56de"),r?y.default.createElement(i.default,{type:"primary",loading:d,onClick:function(e){return t()}},"\u4fdd\u5b58"):"");return y.default.createElement(n.default,{title:f,width:400,footer:m,visible:u,onCancel:function(e){return a({type:"closeModuleModal"})}},y.default.createElement("div",{className:"overflow"},y.default.createElement(c.default,{checkable:!0,defaultExpandedKeys:o,checkedKeys:o,onCheck:l},p(s))))}function o(e){return{isSet:e.moduleProps.isSet,selectedModules:e.moduleProps.selectedModules,visible:e.moduleProps.visible,loading:e.moduleProps.loading,moduleTree:e.moduleProps.moduleTree}}Object.defineProperty(t,"__esModule",{value:!0});var u=l(20),n=a(u),d=l(24),i=a(d),s=l(113),c=a(s),f=l(32),p=a(f);l(21),l(26),l(114),l(33);var m=l(1),y=a(m),g=l(11);l(456);var v=(p.default.Item,c.default.TreeNode);t.default=(0,g.connect)(o)(r),e.exports=t.default},354:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){function t(){r.validateFields(function(e,t){e||a({type:"saveRole",params:t})})}function l(){r.resetFields()}var a=e.dispatch,r=e.form,o=e.isNew,u=e.editData,d=e.visible,s=e.loading,f=e.orgType,m=e.currentUserType,g=r.getFieldDecorator,h={labelCol:{span:8},wrapperCol:{span:14},style:{marginBottom:5}},T=o?"\u65b0\u589e\u89d2\u8272":"\u7f16\u8f91\u89d2\u8272";return v.default.createElement(n.default,{title:T,width:620,okText:"\u4fdd\u5b58",cancelText:"\u8fd4\u56de",visible:d,confirmLoading:s,onOk:function(e){return t()},onCancel:function(){return a({type:"closeRoleModal"})},afterClose:l},v.default.createElement(y.default,null,g("id",{initialValue:u.id})(v.default.createElement(p.default,{type:"hidden"})),g("toOrgId",{initialValue:u.toOrgId})(v.default.createElement(p.default,{type:"hidden"})),v.default.createElement(M,(0,c.default)({},h,{label:"\u89d2\u8272\u540d\u79f0"}),g("name",{initialValue:u.name,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u89d2\u8272\u540d\u79f0\uff01"}]})(v.default.createElement(p.default,{autoComplete:"off"}))),v.default.createElement(M,(0,c.default)({},h,{label:"\u89d2\u8272\u4ee3\u7801"}),g("code",{initialValue:u.code})(v.default.createElement(p.default,{autoComplete:"off"}))),v.default.createElement(M,(0,c.default)({},h,{label:"\u89d2\u8272\u63cf\u8ff0"}),g("remark",{initialValue:u.remark})(v.default.createElement(p.default,{type:"textarea",autosize:!0,autoComplete:"off"}))),"1"!=m?"":v.default.createElement(M,(0,c.default)({},h,{label:"\u662f\u5426\u5168\u5c40"}),g("isGlobal",{initialValue:null==u.isGlobal?"0":""+u.isGlobal})(v.default.createElement(i.default,{onChange:function(e){return a({type:"isGlobalChange",scope:"self",params:e})}},v.default.createElement(i.default.Option,{key:"1",value:"1"},"\u662f"),v.default.createElement(i.default.Option,{key:"0",value:"0"},"\u5426")))),"1"==u.isGlobal?v.default.createElement(M,(0,c.default)({},h,{label:"\u9002\u7528\u8303\u56f4"}),g("orgType",{initialValue:u.orgType})(v.default.createElement(i.default,null,f.map(function(e,t){if(e.code)return v.default.createElement(i.default.Option,{key:e.code,value:e.code},e.value)})))):""))}function o(e){return{isNew:e.roleProps.isNew,editData:e.roleProps.editData,visible:e.roleProps.visible,loading:e.roleProps.loading,orgType:e.roleProps.orgType,currentUserType:e.currentUserType}}Object.defineProperty(t,"__esModule",{value:!0});var u=l(20),n=a(u),d=l(61),i=a(d),s=l(2),c=a(s),f=l(23),p=a(f),m=l(32),y=a(m);l(21),l(72),l(19),l(33);var g=l(1),v=a(g),h=l(11),M=y.default.Item;t.default=(0,h.connect)(o)(y.default.create()(r)),e.exports=t.default},355:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.dispatch,l=e.dataSource,a=[{title:"\u7ec4\u7ec7\u673a\u6784",dataIndex:"toOrgName",key:"toOrgName",width:200},{title:"\u89d2\u8272\u540d\u79f0",dataIndex:"name",key:"name",width:200},{title:"\u89d2\u8272\u4ee3\u7801",dataIndex:"code",key:"code",width:200},{title:"\u89d2\u8272\u63cf\u8ff0",dataIndex:"remark",key:"remark",width:200},{title:"\u662f\u5426\u5168\u5c40",dataIndex:"isGlobal",key:"isGlobal",width:100,render:function(e,t,l){return"1"==t.isGlobal?"\u662f":"\u5426"}},{title:"\u64cd\u4f5c",width:200,render:function(e,l,a){var r=l.isFixed||!l.isLocalRole?"disabled":null;return y.default.createElement("span",null,y.default.createElement(i.default,{title:"\u4fee\u6539\u89d2\u8272"},y.default.createElement(c.default,{onClick:function(e){return t({type:"openRoleModal",params:{isNew:!1,editData:l}})},size:"small",type:"ghost",shape:"circle",icon:"edit",disabled:r,style:{marginRight:5}})),y.default.createElement(i.default,{title:"\u5220\u9664\u89d2\u8272"},y.default.createElement(c.default,{onClick:function(e){return t({type:"deleteRole",params:{roleId:l.id}})},size:"small",type:"ghost",shape:"circle",icon:"close",disabled:r,style:{marginRight:5}})),y.default.createElement(i.default,{title:"\u8bbe\u7f6e\u529f\u80fd\u6a21\u5757"},y.default.createElement(c.default,{onClick:function(e){return t({type:"openModuleModal",params:{roleId:l.id,isSet:!0}})},size:"small",type:"ghost",shape:"circle",icon:"setting",disabled:r,style:{marginRight:5}})),y.default.createElement(i.default,{title:"\u67e5\u770b\u529f\u80fd\u6a21\u5757"},y.default.createElement(c.default,{onClick:function(e){return t({type:"openModuleModal",params:{roleId:l.id,isSet:!1}})},size:"small",type:"ghost",shape:"circle",icon:"bars"})))}.bind(this)}];return y.default.createElement(p.default,{style:{height:"100%",background:"#fff"}},y.default.createElement(R,{style:{width:200,height:"100%",background:"#fff",overflow:"auto",borderRight:"1px solid #e9e9e9"}},y.default.createElement(h.default,null)),y.default.createElement(P,null,y.default.createElement(p.default,{style:{height:"100%",background:"#fff"}},y.default.createElement(k,{style:{height:"40px",lineHeight:"40px",background:"#fff",padding:"1px 10px",borderBottom:"1px solid #e9e9e9"}},y.default.createElement(c.default,{type:"primary",icon:"plus",onClick:function(){return t({type:"openRoleModal",params:{isNew:!0,editData:{}}})}},"\u65b0\u589e\u89d2\u8272")),y.default.createElement(P,{style:{overflow:"auto"}},y.default.createElement(n.default,{rowKey:"id",size:"middle",bordered:!0,dataSource:l,columns:a,pagination:!1}),y.default.createElement(T.default,null),y.default.createElement(E.default,null)))))}function o(e){return{dataSource:e.dataSource}}Object.defineProperty(t,"__esModule",{value:!0});var u=l(49),n=a(u),d=l(73),i=a(d),s=l(24),c=a(s),f=l(43),p=a(f);l(50),l(74),l(26),l(44);var m=l(1),y=a(m),g=l(11),v=l(116),h=a(v),M=l(353),T=a(M),b=l(354),E=a(b);l(40);var k=p.default.Header,R=(p.default.Footer,p.default.Sider),P=p.default.Content;t.default=(0,g.connect)(o)(r),e.exports=t.default},356:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=l(357),o=a(r),u=l(11),n=l(355),d=a(n),i=new u.stateContainer;i.model(o.default),i.ready(function(e){e({type:"initTreeData"}),e({type:"initModuleTree"}),e({type:"initOrgType"}),e({type:"getCurrentUserType"})}),i.start(d.default,"root")},357:function(e,t,l){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=l(2),u=r(o),n=l(358),d=a(n);t.default={namespace:"role",state:{roleProps:{isNew:!0,editData:{},visible:!1,loading:!1,orgType:[]},moduleProps:{isSet:!0,selectedModules:[],visible:!1,moduleTree:[]},dataSource:[],orgTreeData:[]},reducers:{initTreeData:function(e){var t=e.put,l=e.dispatch;d.initOrgTree(t,l)},initOrgType:function(e){var t=e.state,l=e.put;d.initOrgType(t,l)},onOrgTreeSelect:function(e){var t=e.params,l=e.put;d.queryRoleList(t.selectTreeKey,l)},refreshRoleList:function(e){var t=e.state,l=e.put;d.queryRoleList(t.selectTreeKey,l)},openRoleModal:function(e){var t=e.state,l=e.params,a=t.roleProps;return(0,u.default)(a,l,{visible:!0}),{roleProps:a}},closeRoleModal:function(e){var t=e.state,l=t.roleProps;return(0,u.default)(l,{visible:!1}),{roleProps:l}},initModuleTree:function(e){var t=e.state,l=e.put;d.queryModuleTree(t,l)},openModuleModal:function(e){var t=e.state,l=e.params,a=e.put;d.queryRoleModuleList(t,l,a)},closeModuleModal:function(e){var t=e.state,l=t.moduleProps;return(0,u.default)(l,{visible:!1}),{moduleProps:l}},saveRole:function(e){var t=e.state,l=e.params,a=e.put,r=e.dispatch;d.saveRole(t,l,a,r)},deleteRole:function(e){var t=e.state,l=e.params,a=e.dispatch;d.deleteRole(t,l,a)},checkModules:function(e){var t=e.state,l=e.params,a=t.moduleProps;return(0,u.default)(a,{selectedModules:d.filterTree(l,a.moduleTree)}),{moduleProps:a}},updateRoleModule:function(e){var t=e.state,l=e.params,a=e.dispatch;d.updateRoleModule(t,l,a)},isGlobalChange:function(e){var t=e.state,l=e.params,a=t.roleProps;return a.editData.isGlobal=l,{roleProps:a}},getCurrentUserType:function(e){var t=e.put;d.getCurrentUserType(t)}}},e.exports=t.default},358:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){b.request.post("../org/queryOrgTree.do",function(l){var a=null;l&&l.length>0&&(a=l[0].id),e({orgTreeData:l,selectTreeKey:a}),t({type:"onOrgTreeSelect",params:{selectTreeKey:a}})})}function o(e,t){b.request.post("../dict/listDictByKey.do",{key:"org_type"},function(l){var a=e.roleProps;(0,h.default)(a,{orgType:l}),t({roleProps:a})})}function u(e,t){b.request.post("queryRoleList.do",{orgId:e},function(l){t({dataSource:l,selectTreeKey:e})})}function n(e,t){b.request.post("../module/queryModuleTree.do",function(l){var a=e.moduleProps;(0,h.default)(a,{moduleTree:l}),t({moduleProps:a})})}function d(e,t,l,a){var r=e.roleProps;r.isNew?((0,h.default)(r,{loading:!0}),l(r),b.request.post("insertRole.do",(0,h.default)(t,{toOrgId:e.selectTreeKey}),function(){(0,h.default)(r,{loading:!1,visible:!1}),l(r),a({type:"refreshRoleList"}),g.default.success("\u65b0\u5efa\u89d2\u8272\u6210\u529f\uff01")},function(e){(0,h.default)(r,{loading:!1}),l(r),g.default.success("\u65b0\u5efa\u89d2\u8272\u5931\u8d25\uff01")})):b.request.post("updateRole.do",t,function(){(0,h.default)(r,{loading:!1,visible:!1}),l(r),a({type:"refreshRoleList"}),g.default.success("\u4fee\u6539\u89d2\u8272\u6210\u529f\uff01")},function(e){(0,h.default)(r,{loading:!1}),l(r),g.default.success("\u4fee\u6539\u89d2\u8272\u5931\u8d25\uff01")})}function i(e,t,l){E({title:"\u786e\u8ba4\u5220\u9664\u8fd9\u6761\u8bb0\u5f55\u5417\uff1f",onOk:function(){b.request.get("deleteRole.do",t,function(t){g.default.success("\u5220\u9664\u89d2\u8272\u6210\u529f\uff01"),l({type:"onOrgTreeSelect",params:{selectTreeKey:e.selectTreeKey}})})}})}function s(e,t,l){var a=e.moduleProps;(0,h.default)(a,{visible:!0,isSet:t.isSet}),b.request.post("queryRoleModuleList.do",t,function(e){(0,h.default)(a,{selectedModules:e}),l({moduleProps:a,setRoleId:t.roleId})})}function c(e,t,l){var a={roleId:e.setRoleId,"modules[]":t.selectedModules};b.request.post("updateRoleModule.do",a,function(e){l({type:"closeModuleModal"}),g.default.success("\u8bbe\u7f6e\u89d2\u8272\u529f\u80fd\u6a21\u5757\u6210\u529f\uff01")})}function f(e,t){for(var l=[],a=0;a<e.length;a++)m(e[a],t)||l.push(e[a]);return l}function p(e){b.request.post("../user/getCurrentUserType.do",function(t){e({currentUserType:t})})}function m(e,t){for(var l=0;l<t.length;l++)if(null!=t[l].children&&t[l].children.length>0)return e==t[l].key||m(e,t[l].children);return!1}Object.defineProperty(t,"__esModule",{value:!0});var y=l(29),g=a(y),v=l(2),h=a(v),M=l(20),T=a(M);t.initOrgTree=r,t.initOrgType=o,t.queryRoleList=u,t.queryModuleTree=n,t.saveRole=d,t.deleteRole=i,t.queryRoleModuleList=s,t.updateRoleModule=c,t.filterTree=f,t.getCurrentUserType=p,l(30),l(21);var b=l(11),E=T.default.confirm},456:16});