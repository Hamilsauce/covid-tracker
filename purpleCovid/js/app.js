/* formContainer, selectContainer,
contentContainer, app-footer */

Vue.component('v-select', VueSelect.VueSelect)

Vue.component('datacard', {
  name: "datacard",
  template: '#datacard-template',
  props: {
    dataset: Object,
    selectedCountry: undefined,
    cardDataReady: Boolean
  },
  data() {
    return {}
  },
  methods: {
    peek(obj) {
      console.log(this.dataset);
    }
  },
  computed: {
    countryName() {
      return this.dataset.countryName;
    },
    date() {
      return this.dataset.date;
    },
    confirmed() {
      return this.dataset.confirmed;
    },
    deaths() {
      return this.dataset.deaths;
    },
    recovered() {
      return this.dataset.recovered;
    },


  },
  filters: {
    capitalize(text) {
      let newText = `${text.slice(0, 1).toUpperCase()}${text.slice(1).toLowerCase()}`
      return newText;
    }
  }

});

var study = new Vue({
  el: "#app",
  data() {
    return {
      heading: "COVID QUERY",
      text: "A neat desk is a sign of a cluttered desk drawer.",
      baseUrl: 'https://covidapi.info/api/v1/',
      options: [],
      v__selected: '',
      // selectedCountry: '',
      queryScope: 'latest',
      cardDataReady: false,
      dataCountryHistorical: undefined,
      dataCountryLatest: undefined
    }
  },
  method: {
    // flattenQueryItems(data) {

    // },
    fetchCountryHistorical(countryCode) {
      fetch(`${baseUrl}country/${countryCode}`)
        .then(res => res.json())
        .then(data => {
          this.dataCountryHistorical = data.result
          console.log(this);
        })
        .catch(err => console.log(err));

    },
    fetchCountryLatest(countryCode) {
      fetch(`${baseUrl}country/${countryCode}/latest`)
        .then(res => res.json())
        .then(data => this.dataCountryLatest = data.result)
        .catch(err => console.log(err));
    }
  },
  computed: {
    flatCountryLatest() {
     let countryName = this.selectedCountry
      if (this.dataCountryLatest) {
        let flatDates = Object.entries(this.dataCountryLatest)
          .map(([date, details]) => {
            return [["date", new Date(date).toLocaleDateString()]]
              .concat(Object.entries(details))
              .reduce((obj, [prop, val]) => {
                obj[prop] = val;
                return obj;
              }, {});
          });
        flatDates[0].countryName = this.selectedCountry;
        return flatDates[0]
      }
    },
  selectedCountry() {
    // let code = this.v__selected;
    let codeArray = Object.values(this.options)
    let match = codeArray
      .find(opt => {
        return opt.CODE == this.v__selected;
      })
    return match.COUNTRY;
  }
},
watch: {
  // v__selected: function(val) {
  //   let code = this.v__selected;
  //   let codeArray = Object.values(this.options)
  //   let match = codeArray
  //     .find(opt => {
  //       return opt.CODE == this.code;
  //     })
  //   this.selectedCountry = match.COUNTRY;
  // },
  v__selected: function (val) {
    this.dataCountryLatest = '';
    if (val && this.queryScope === 'latest') {
      fetch(`${this.baseUrl}country/${val}/latest`)
        .then(res => res.json())
        .then(data => {
          this.dataCountryLatest = data.result
        })
        .catch(err => alert(`No data found for ${this.selectedCountry}`));
    } else if (val && this.queryScope === 'historical') {
      fetch(`${this.baseUrl}country/${val}`)
        .then(res => res.json())
        .then(data => {
          this.dataCountryHistorical = data.result
        })
        .catch(err => alert(`No data found for ${this.selectedCountry}`));
    }
  },
  dataCountryLatest: function(val, oldVal) {
    if (val !== oldVal) {
      this.cardDataReady = false;
      setTimeout(() => {

      console.log(this.selectedCountry);
        this.cardDataReady = true;
      }, 100)
    }
  }
},
async mounted() {
 await fetch('./data/isocodes.json')
    .then(res => res.json())
    .then(data => {
      let codeList = data;
      this.options = codeList;
    });
}
});