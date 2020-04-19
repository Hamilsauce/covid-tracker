<template>
	<div class="queryview">
		<section class="queryview-top">
			<h4>Select a country</h4>
			<div class="form-container">
				<form class="queryForm">
					<div class="formGroup">
						<div class="selectContainer">
							<v-select
								placeholder=""
								v-model="v__selected"
								label="COUNTRY"
								:reduce="COUNTRY => COUNTRY.CODE"
								:options="options"
							/>
						</div>
					</div>
				</form>
			</div>
		</section>
		<section class="queryview-bottom">
			<transition name="fade">
				<DataCard
					class="temp-display"
					v-if="showDataCard === true"
					v-model="dataReady"
					:cardData="cardData"
				/>
			</transition>

			<transition name="fade">
				<DataTable
					v-model="dataReady"
					:columns="gridColumns"
					:dataSet="result"
					v-if="dataReady"
				/>
			</transition>
		</section>
	</div>
</template>

<script>
// @ is an alias to /src
import DataTable from "@/components/DataTable";
import DataCard from "@/components/DataCard";
import vSelect from "vue-select";

export default {
	name: "QueryView",
	components: {
		DataCard,
		DataTable,
		vSelect
	},
	props: {
		dataSet: Array,
		result: undefined
	},
	data() {
		return {
			queryFormActive: false,
			dataTableActive: true,
			queryParams: "",
			formViewConent: "",
			countryParam: "",
			gridColumns: ["date", "confirmed", "deaths"],
			gridData: undefined,
			latestGlobal: "",
			v__selected: "",
			options: [],
			dataReady: false,
			showDataCard: false,
			cardData: undefined
		};
	},
	methods: {
		requestData() {
			let params = this.queryParams;
			console.log(params);
			// this.$emit("queryRequested", params);
		},
		fetchTableData() {
			fetch(`https://covidapi.info/api/v1/country/${this.v__selected}`)
				.then(res => res.json())
				.then(data => {
					this.rawData = data;
					console.log(data);
				})
				.catch(err => {
					console.log(err);
				});
		},
		revealForm() {
			this.queryParams = "global";
			this.requestData();
			setTimeout(() => {
				this.greetingActive = false;
			}, 200);
			this.unhideForm();
		},

		buildTable() {
			this.dataTableActive === true;
			this.fetchTableData();
		},
		getIsoCodes() {
			fetch("https://hamilsauce.github.io/codes.json")
				.then(res => res.json())
				.then(data => {
					this.options = data.codes;
				});
		}
		// newCountryParam() {
		// 	let countryParam = this.vs__selected;
		// 	EventBus.$emit("newCountryParam", countryParam);
		// }
	},
	computed: {
		flattenedDataSet() {
			let flattenedData = Object.entries(this.queryResults).map(
				([date, details]) => {
					let [year, month, day] = date.split("-");
					let latestDate = new Date(`${month}/${day}/${year}`).toLocaleDateString();
					details["date"] = latestDate;
					details.confirmed = Number(details.confirmed).toLocaleString();
					details.deaths = Number(details.deaths).toLocaleString();
					details.recovered = Number(details.recovered).toLocaleString();
					return details;
				}
			);
			return flattenedData;
		}
		// cardData() {
		// 	return this.gridData[this.result.length - 1];
		// }
	},
	watch: {
		v__selected: function(val) {
			this.$emit("newCountryParam", val);
			// this.fetchTableData();
		},

		result: function(value) {
			if (value && this.v__selected) {
				this.dataReady = true;
			}
			// this.gridData = value;
			// this.cardData = value[value.length - 1];
		},
		cardData: function(val) {
			if (val) {
				setTimeout(() => {
					this.showDataCard = true;
				}, 1000);
			}
		}
	},
	created() {},
	mounted() {
		this.getIsoCodes();
	}
};

//dataSet() {
// 	let flattenedData = Object.entries(this.rawData.result).map(
// 		([date, details]) => {
// 			let [year, month, day] = date.split("-");
// 			let latestDate = new Date(`${month}/${day}/${year}`).toLocaleDateString();

// 			details["date"] = latestDate;
// 			return details;
// 		}
// 	);
// 	return flattenedData;
// }

// 	cardData(data = Array) {
// 		console.log(Object.entries(data.result).pop());
// 		let dataOutput = Object.entries(data.result)
// 			.pop()
// 			.map(([date, details]) => {
// 				console.log(date, details);
// 				return [date, details];
// 			})
// 			.reduce((obj, [date, details]) => {
// 				obj.date = date[1];
// 				obj[details[0]] = details[1];

// 				return obj;
// 			}, {});
// 		return dataOutput;
// 	},
// 	cardData2(data = Array) {
// 		let output = data.map(dayObj => {

//         let newObj = Object.entries(dayObj)
//             .reduce((obj, item) => {
//                 obj[item[0]] = item[1];
//                 return obj;
//             }, {});
//         return newObj;
//     });
// return output
</script>

<style scoped>
.fade-enter-active {
	transition: opacity 0.5s;
}
.fade-leave-active {
	transition: opacity 00.25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.temp-display {
	z-index: 5;
}

/* //* This is for formContent component */

.queryview {
	display: grid;
	grid-template-rows: 1fr 7fr;
	/* padding: 50px; */
	height: 100%;
}
.queryview-top {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: fit-content;
}
h4 {
	margin: 0;
	margin-top: 15px;
}
.queryview-bottom {
	height: fit-content;
}
/*
.hideGreeting {
//	 color: white;
//	padding: 0;
	//transform: 1s;
	transition: height 0.5s, opacity 0.5s;
	opacity: 0;
	height: 0px;
}
*/
.appGreeting {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* transform: 1s; */
	/* transition: height 0.8s, opacity 0.65s; */
	opacity: 1;
	/* height: 150px; */
}

.selectContainer {
	color: rgb(54, 54, 54);
	background: rgba(60, 35, 80, 0);
	border-radius: 3px;
	width: 100%;
	max-width: 350px;
	margin: auto;
	padding: 10px;
}

.v-select {
	background: rgb(255, 255, 255);
	border: 1px solid rgba(55, 20, 60, 0.8);
	border-radius: 3px;
	font-size: 1em;
}
</style>