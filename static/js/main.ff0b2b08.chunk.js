(this["webpackJsonpbmi-converter-react"]=this["webpackJsonpbmi-converter-react"]||[]).push([[0],{31:function(e,t,a){e.exports=a(41)},36:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),l=a.n(r),c=(a(36),a(22)),h=a(23),o=a(28),m=a(29),u=a(61),s=a(60),g=a(59),d=a(58),v=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleHeight=function(t){e.setState({height:t.target.value})},e.handleWeight=function(t){e.setState({weight:t.target.value})},e.getBmi=function(){var t=e.state,a=t.weight,n=t.height;if(0===n)return e.setState({bmi:"Wow! I can't do that!"});e.setState({bmi:(a/(n*n)).toFixed(2)}),console.log(e.state.bmi)},e.state={weight:0,height:0,bmi:0},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.state,t=e.weight,a=e.height,n=e.bmi;return i.a.createElement("div",{className:"App"},i.a.createElement(u.a,{fullWidth:!0},i.a.createElement(s.a,null,"Enter your Weight in kilograms"),i.a.createElement(g.a,{type:"number",value:t,onChange:this.handleWeight})),i.a.createElement("div",{className:"margin-top"},i.a.createElement(u.a,{fullWidth:!0},i.a.createElement(s.a,null,"Enter your height in meters"),i.a.createElement(g.a,{type:"number",value:a,onChange:this.handleHeight}))),i.a.createElement("div",{className:"margin-top"},i.a.createElement(d.a,{onClick:this.getBmi,fullWidth:!0,variant:"contained",color:"primary"},"Get BMI")),i.a.createElement("div",null,i.a.createElement("h1",null,"Your BMI is: ",n," ")))}}]),a}(n.Component);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.ff0b2b08.chunk.js.map