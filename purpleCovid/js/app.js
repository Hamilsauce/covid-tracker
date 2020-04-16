/* formContainer, selectContainer,
contentContainer, app-footer */

Vue.component('v-select', VueSelect.VueSelect)

var study = new Vue({
  el: "#app",
  data() {
    return {
      heading: "COVID QUERY",
      text: "A neat desk is a sign of a cluttered desk drawer.",
      options: [],
      vs__selected: ''
    }
  },
  method: {},
  computed: {
    selectedCountry() {
      if (this.vs__selected) {
        let codeArray = Object.values(this.options)
        let match = codeArray.find(opt => {
          return opt.CODE == this.vs__selected;
        })
          return match.COUNTRY;
      }

    }
  },
  async mounted() {
    await fetch('./data/isocodes.json')
      .then(res => res.json())
      .then(data => {
        let codeList = data;
        this.options = codeList;
        console.log(this.options);

      })
  }
});