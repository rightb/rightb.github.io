webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a=i("mvHQ"),n=i.n(a),r=i("mtWM"),o=i.n(r),c={data:function(){return{apiLink:"https://api.openweathermap.org/data/2.5/weather?units=metric",apiKey:"&APPID=16f86fb95d29de5b39a40af937274cbe",cities:[],newCity:null,placeName:"",country:"",currentTemp:"",minTemp:"",maxTemp:"",sunrise:"",sunset:"",pressure:"",humidity:"",wind:"",overcast:"",icon:"",error:""}},methods:{getWeather:function(t){var e=this;o.a.get(t).then(function(t){e.error="",e.placeName=t.data.name,e.country=t.data.sys.country,e.currentTemp=t.data.main.temp,e.minTemp=t.data.main.temp_min,e.maxTemp=t.data.main.temp_max,e.pressure=t.data.main.pressure,e.humidity=t.data.main.humidity+"%",e.wind=t.data.wind.speed+"m/s",e.overcast=t.data.weather[0].description,e.icon="https://openweathermap.org/img/w/"+t.data.weather[0].icon+".png",e.sunrise=new Date(1e3*t.data.sys.sunrise).toLocaleTimeString("uk-UA").slice(0,5),e.sunset=new Date(1e3*t.data.sys.sunset).toLocaleTimeString("uk-UA").slice(0,5)}).catch(function(t){e.error=t.response.data.message})},search:function(){var t=this.apiLink+"&q="+this.newCity+this.apiKey;this.getWeather(t)},seeWeather:function(t){console.log();var e=this.apiLink+"&q="+this.cities[t]+this.apiKey;this.getWeather(e)},geolocation:function(){navigator.geolocation.getCurrentPosition(this.buildUrl,this.geoError)},buildUrl:function(t){var e=t.coords.latitude,i=t.coords.longitude;this.getWeather(this.apiLink+"&lat="+e+"&lon="+i+this.apiKey)},geoError:function(t){this.getWeather(this.apiLink+"&lat=0&lon=0"+this.apiKey)},addCity:function(){this.newCity&&(this.cities.push(this.newCity),this.newCity="",this.savecities())},removeCity:function(t){this.cities.splice(t,1),this.savecities()},savecities:function(){var t=n()(this.cities);localStorage.setItem("cities",t)}},beforeMount:function(){this.geolocation()},mounted:function(){if(localStorage.getItem("cities"))try{this.cities=JSON.parse(localStorage.getItem("cities"))}catch(t){localStorage.removeItem("cities")}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"search"},[i("div",{staticClass:"input-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.newCity,expression:"newCity"}],staticClass:"default",attrs:{placeholder:"Enter city name"},domProps:{value:t.newCity},on:{input:function(e){e.target.composing||(t.newCity=e.target.value)}}}),t._v(" "),i("div",{staticClass:"error"},[t._v(t._s(t.error))])]),t._v(" "),i("button",{staticClass:"btn btn-search",attrs:{disabled:!t.newCity},on:{click:t.search}},[t._v("Search")]),t._v(" "),i("button",{staticClass:"btn add-city",attrs:{disabled:!t.newCity},on:{click:t.addCity}},[t._v("Add to favorite")])]),t._v(" "),i("div",{staticClass:"weather"},[i("h3",[t._v(t._s(t.placeName)+", "+t._s(t.country))]),t._v(" "),i("div",{staticClass:"temperature"},[t._v(t._s(t.currentTemp)+"°")]),t._v(" "),i("div",[t._v(t._s(t.overcast))]),t._v(" "),i("div",[i("img",{attrs:{src:t.icon}})]),t._v(" "),i("div",[t._v("L "+t._s(t.minTemp)+"° / H "+t._s(t.maxTemp)+"°")]),t._v(" "),i("div",[t._v(" sunrise "+t._s(t.sunrise)+" / sunset "+t._s(t.sunset))]),t._v(" "),i("div",[t._v(" humidity "+t._s(t.humidity))]),t._v(" "),i("div",[t._v(" pressure "+t._s(t.pressure))]),t._v(" "),i("div",[t._v(" Wind "+t._s(t.wind))])]),t._v(" "),i("div",{staticClass:"favorite-cities"},t._l(t.cities,function(e,s){return i("div",{staticClass:"favorite-city"},[i("div",[i("span",{staticClass:"my-city",on:{click:function(e){t.seeWeather(s)}}},[t._v(t._s(e))]),t._v(" "),i("button",{staticClass:"btn remove-city",on:{click:function(e){t.removeCity(s)}}},[t._v("Remove")])])])}),0)])},staticRenderFns:[]};var d={name:"App",components:{MyWeather:i("VU/8")(c,u,!1,function(t){i("nF0s")},null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("MyWeather")],1)},staticRenderFns:[]};var v=i("VU/8")(d,l,!1,function(t){i("eblm")},null,null).exports;s.a.prototype.$axios=o.a,s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:v},template:"<App/>"})},eblm:function(t,e){},nF0s:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.441a19e5b14efce1bdd3.js.map