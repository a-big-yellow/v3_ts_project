import{J as h,d as ee,r as p,c as le,G as te,e as d,o as ae,f as oe,g as l,w as t,h as s,C as g,j as f,m as j,F as ne,z as P,K as R,p as re,k as se,_ as ie}from"./index-0a64c145.js";import{u as de}from"./setting-c5e3865e.js";const ue=(o,y,u)=>h.get(`/admin/acl/role/${o}/${y}/?roleName=${u}`),ce=o=>o.id?h.put("/admin/acl/role/update",o):h.post("/admin/acl/role/save",o),pe=o=>h.get("/admin/acl/permission/toAssign/"+o),me=(o,y)=>h.post(`/admin/acl/permission/doAssign/?roleId=${o}&permissionId=${y}`),fe=o=>h.delete("/admin/acl/role/remove/"+o),_e=o=>(re("data-v-4fb3ef5a"),o=o(),se(),o),ve=_e(()=>j("h4",null,"分配菜单与按钮的权限",-1)),ge={style:{flex:"auto"}},ye=ee({__name:"index",setup(o){let y=de(),u=p(1),C=p(10),v=p(""),V=p([]),S=p(0),m=p(!1),x=p(),_=p(!1),i=le({roleName:""}),I=p([]),z=p([]),N=p();te(()=>{b()});const b=async(n=1)=>{u.value=n;let e=await ue(u.value,C.value,v.value);e.code==200&&(S.value=e.data.total,V.value=e.data.records)},E=()=>{b()},O=()=>{b(),v.value=""},T=()=>{y.refsh=!y.refsh},K=()=>{m.value=!0,Object.assign(i,{roleName:"",id:0}),P(()=>{x.value.clearValidate("roleName")})},L=n=>{m.value=!0,Object.assign(i,n),P(()=>{x.value.clearValidate("roleName")})},M={roleName:[{required:!0,trigger:"blur",validator:(n,e,r)=>{e.trim().length>=2?r():r(new Error("职位名称至少两位"))}}]},B=async()=>{await x.value.validate(),(await ce(i)).code==200&&(R({type:"success",message:i.id?"更新成功":"添加成功"}),m.value=!1,b(i.id?u.value:1))},D=async n=>{_.value=!0,Object.assign(i,n);let e=await pe(i.id);e.code==200&&(z.value=e.data,I.value=U(z.value,[]))},F={children:"children",label:"name"},U=(n,e)=>(n.forEach(r=>{r.select&&r.level==4&&e.push(r.id),r.children&&r.children.length>0&&U(r.children,e)}),e),H=async()=>{const n=i.id;let e=N.value.getCheckedKeys(),r=N.value.getHalfCheckedKeys(),w=e.concat(r);(await me(n,w)).code==200&&(_.value=!1,R({type:"success",message:"分配权限成功"}),window.location.reload())},G=async n=>{(await fe(n)).code==200&&(R({type:"success",message:"删除成功"}),b(V.value.length>1?u.value:u.value-1))};return(n,e)=>{const r=d("el-input"),w=d("el-form-item"),c=d("el-button"),q=d("el-form"),$=d("el-card"),k=d("el-table-column"),J=d("el-popconfirm"),Q=d("el-table"),W=d("el-pagination"),X=d("el-dialog"),Y=d("el-tree"),Z=d("el-drawer");return ae(),oe(ne,null,[l($,null,{default:t(()=>[l(q,{inline:!0,class:"form"},{default:t(()=>[l(w,{label:"职位搜索"},{default:t(()=>[l(r,{placeholder:"请你输入搜索职位关键字",modelValue:s(v),"onUpdate:modelValue":e[0]||(e[0]=a=>g(v)?v.value=a:v=a)},null,8,["modelValue"])]),_:1}),l(w,null,{default:t(()=>[l(c,{type:"primary",size:"default",disabled:!s(v),onClick:O},{default:t(()=>[f("搜索")]),_:1},8,["disabled"]),l(c,{type:"primary",size:"default",onClick:T},{default:t(()=>[f("重置")]),_:1})]),_:1})]),_:1})]),_:1}),l($,{style:{margin:"10px 0px"}},{default:t(()=>[l(c,{type:"primary",size:"default",icon:"Plus",onClick:K},{default:t(()=>[f("添加职位")]),_:1}),l(Q,{border:"",style:{margin:"10px 0px"},data:s(V)},{default:t(()=>[l(k,{type:"index",align:"center",label:"#"}),l(k,{label:"ID",align:"center",prop:"id"}),l(k,{label:"职位名称",align:"center",prop:"roleName","show-overflow-tooltip":""}),l(k,{label:"创建世间",align:"center","show-overflow-tooltip":"",prop:"createTime"}),l(k,{label:"更新时间",align:"center","show-overflow-tooltip":"",prop:"updateTime"}),l(k,{label:"操作",width:"280px",align:"center"},{default:t(({row:a,$index:ke})=>[l(c,{type:"primary",size:"small",icon:"User",onClick:A=>D(a)},{default:t(()=>[f("分配权限")]),_:2},1032,["onClick"]),l(c,{type:"primary",size:"small",icon:"Edit",onClick:A=>L(a)},{default:t(()=>[f("编辑")]),_:2},1032,["onClick"]),l(J,{title:`你确定要删除${a.roleName}?`,width:"260px",onConfirm:A=>G(a.id)},{reference:t(()=>[l(c,{type:"primary",size:"small",icon:"Delete"},{default:t(()=>[f("删除")]),_:1})]),_:2},1032,["title","onConfirm"])]),_:1})]),_:1},8,["data"]),l(W,{"current-page":s(u),"onUpdate:currentPage":e[1]||(e[1]=a=>g(u)?u.value=a:u=a),"page-size":s(C),"onUpdate:pageSize":e[2]||(e[2]=a=>g(C)?C.value=a:C=a),"page-sizes":[10,20,30,40],background:!0,layout:"prev, pager, next, jumper,->,sizes,total",total:s(S),onCurrentChange:b,onSizeChange:E},null,8,["current-page","page-size","total"])]),_:1}),l(X,{modelValue:s(m),"onUpdate:modelValue":e[5]||(e[5]=a=>g(m)?m.value=a:m=a),title:s(i).id?"更新职位":"添加职位"},{footer:t(()=>[l(c,{type:"primary",size:"default",onClick:e[4]||(e[4]=a=>g(m)?m.value=!1:m=!1)},{default:t(()=>[f("取消")]),_:1}),l(c,{type:"primary",size:"default",onClick:B},{default:t(()=>[f("确定")]),_:1})]),default:t(()=>[l(q,{model:s(i),rules:M,ref_key:"form",ref:x},{default:t(()=>[l(w,{label:"职位名称",prop:"roleName"},{default:t(()=>[l(r,{placeholder:"请你输入职位名称",modelValue:s(i).roleName,"onUpdate:modelValue":e[3]||(e[3]=a=>s(i).roleName=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"]),l(Z,{modelValue:s(_),"onUpdate:modelValue":e[7]||(e[7]=a=>g(_)?_.value=a:_=a)},{header:t(()=>[ve]),default:t(()=>[l(Y,{ref_key:"tree",ref:N,data:s(z),"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":s(I),props:F},null,8,["data","default-checked-keys"])]),footer:t(()=>[j("div",ge,[l(c,{onClick:e[6]||(e[6]=a=>g(_)?_.value=!1:_=!1)},{default:t(()=>[f("取消")]),_:1}),l(c,{type:"primary",onClick:H},{default:t(()=>[f("确定")]),_:1})])]),_:1},8,["modelValue"])],64)}}});const we=ie(ye,[["__scopeId","data-v-4fb3ef5a"]]);export{we as default};
