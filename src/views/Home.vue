<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" v-if="!queryActive" @queryClicked="handleQuery" />
    <DataTable
        :heroes="queriedDates"
        :columns="gridColumns"
        :filter-key="searchQuery"
        v-if="queryActive"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DataTable from '@/components/DataTable'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    DataTable
  },
  props: {
    queriedDates: Array
  },
  data() {
			return {
        displayData:'',
        country: '',
        searchQuery: "",
        queryActive: false,
				gridColumns: ['date', 'confirmed', 'deaths', 'recovered'],
				gridData: [
					{ name: "Chuck Norris", power: Infinity },
					{ name: "Bruce Lee", power: 9000 },
					{ name: "Jackie Chan", power: 7000 },
					{ name: "Jet Li", power: 8000 }
				],

			};
    },
    methods: {
      handleQuery(data) {
        if (data.length != 0) {
          this.country = data;
          this.queryActive = true;
          this.$emit("queryClicked"); //this.country is just placeholder for user input

        }
			},
			covidFetch() {
				// this.displayData = true;

			}
    },
    computed: {
      cleanedData() {
        return this.queriedDates;
      }
    }

}
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 50px; */

}
</style>