<template>
	<div class="queryview">
		<section class="queryview-top">
			<h2>Select a country</h2>
			<div class="form-container">
				<form class="queryForm">
					<div class="formGroup">
						<div class="selectContainer">
							<v-select />
						</div>
					</div>
				</form>
			</div>
		</section>
		<section class="queryview-bottom">
			<transition name="fade">
				<DataTable
					v-model="dataReady"
					:heroes="gridData"
					:columns="gridColumns"
					:dataSet="result"
					v-if="dataTableActive"
				/>
			</transition>
		</section>
	</div>
</template>

<script>
// @ is an alias to /src
import DataTable from "@/components/DataTable";
// import DataCard from "@/components/DataCard";
import vSelect from "vue-select";

export default {
	name: "QueryView",
	components: {
		// DataCard,
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
			dataReady: false
		};
	},
	methods: {
		requestData() {
			let params = this.queryParams;
			console.log(params);
			// this.$emit("queryRequested", params);
		},
		fetchTableData() {
			fetch("https://covidapi.info/api/v1/country/USA")
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
		}
	},
	computed: {},
	watch: {
		result: function(value) {
			let flatDates = Object.entries(value).map(([date, details]) => {
				return [["date", new Date(date).toLocaleDateString()]]
					.concat(Object.entries(details))
					.reduce((obj, [prop, val]) => {
						obj[prop] = val;
						return obj;
					}, {});
			});
			this.gridData = flatDates;
			this.dataReady = true;
		}
	},
	created() {}
};

// dataSet() {
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

// 	ca,rdData(data = Array) {
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
.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.temp-display {
	z-index: 5;
}

/* //* This is for formContent component */

.queryview {
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* padding: 50px; */
	height: 100%;
}
.queryview-top {
	display: flex;
	flex-direction: column;
	justify-content: center;
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
	background: rgba(60, 35, 80, 0.6);
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