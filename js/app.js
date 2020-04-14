/* formContainer, selectContainer,
contentContainer, app-footer */

Vue.component('v-select', VueSelect.VueSelect)

var study = new Vue({
  el: "#app",
  data() {
   return {
    heading: "COVID QUERY",
    text: "A neat desk is a sign of a cluttered desk drawer.",
    options: []
  }},
  method: {
  },
  mounted() {
    fetch('./data/isocodes.json')
     .then(res => res.json())
     .then(data =>{ 
      let codeList = data.codes;
      this.options = codeList;
     })
   
  }
});
