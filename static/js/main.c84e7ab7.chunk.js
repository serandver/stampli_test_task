(this.webpackJsonpstampli_test=this.webpackJsonpstampli_test||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),a=n(5),c=n.n(a),o=n(6),i=n(7),l=n(9),u=n(8),p=n(4),m=n(2),j=n.n(m),f=n(0);function _(e){var t=e.label,n=e.message;return Object(s.useEffect)((function(){return console.log("Component TextInput was created "),function(){console.log("Component TextInput was destroyed ")}}),[]),Object(f.jsxs)("div",{className:j.a.item,children:[Object(f.jsx)("p",{className:j.a.text,children:t}),Object(f.jsx)("input",{className:j.a.text__input,type:"text",value:n})]})}function d(e){var t=e.label,n=e.options;Object(s.useEffect)((function(){return console.log("Component SelectInput was created with label"),function(){console.log("Component SelectInput was destroyed ")}}),[]);var r=n.split(",");return Object(f.jsxs)("div",{className:j.a.item,children:[Object(f.jsx)("p",{className:j.a.text,children:t}),Object(f.jsx)("select",{className:j.a.text__select,children:r&&r.map((function(e){return Object(f.jsx)("option",{children:e},e)}))})]})}function b(e){var t=e.inputStrings;Object(s.useEffect)((function(){return console.log("Component Form was created "),function(){console.log("Component Form was destroyed ")}}),[]);return Object(f.jsx)("form",{className:j.a.form,children:t&&t.map((function(e){var t,n=e.split(";"),s=n[3],r=(t=n[2])[0].toUpperCase()+t.slice(1);if("TEXT_INPUT"===s){var a=n[4];return Object(f.jsx)(_,{label:r,message:a},r)}if("SELECT"===s){var c=e.split(s+";")[1];return Object(f.jsx)(d,{label:r,options:c},r)}}))})}var x=["2;1;gender;SELECT;Male,Female","1;1;First Name;TEXT_INPUT;Enter your first name","2;2;marital status;SELECT;Single,Maried,Divorced","1;2;Last Name;TEXT_INPUT;Enter your last name"],O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),a=0;a<s;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={input:x.sort()},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"wrapper",children:Object(f.jsx)(b,{inputStrings:this.state.input})})}}]),n}(p.Component),h=O;n(14),n(15);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(h,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={form:"Form_form__2yY7s",item:"Form_item__3gUp0",text:"Form_text__3Rdps",text__select:"Form_text__select__ScmfI",text__input:"Form_text__input__2wdTh"}}},[[16,1,2]]]);
//# sourceMappingURL=main.c84e7ab7.chunk.js.map