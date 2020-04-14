<template>
	<div class="queryview">
		<section class="queryview-top">
			<h2>Select a country</h2>
			<div class="form-container">
				<form class="queryForm">
					<div class="formGroup">
						<label for="countryInput" class="inputLabel"></label>
						<select name="countryInput" v-model="countryParam" class="countryInput">
							<option value="USA">Volvo</option>
							<option value="IND">Saab</option>
							<option value="fiat">Fiat</option>
							<option value="audi">Audi</option>
						</select>
						<input type="submit" value="" />
					</div>
					<div class="formGroup">
						<label for="dateInput" class="inputLabel"></label>
						<input type="date" name="dateInput" class="dateIn" />
						<input type="submit" value="Submit" />
					</div>
				</form>
			</div>
		</section>
		<section class="queryview-bottom">
			<transition name="fade">
				<DataTable
					:dataSet="dataSet"
					:columns="gridColumns"
					v-if="dataTableActive"
				/>
			</transition>
		</section>
	</div>
</template>

<script>
// @ is an alias to /src
// import DataTable from "@/components/DataTable";
// import DataCard from "@/components/DataCard";

export default {
	name: "QueryView",
	components: {
		// DataCard,
		// DataTable
	},
	props: {},
	data() {
		return {
			queryFormActive: false,
			dataTableActive: true,
			queryParams: "",
			formViewConent: "",
			countryParam: "",
			gridColumns: [],
			rawData: []
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
	computed: {
		dataSet() {
			let flattenedData = Object.entries(this.rawData.result).map(
				([date, details]) => {
					let [year, month, day] = date.split("-");
					let latestDate = new Date(`${month}/${day}/${year}`).toLocaleDateString();

					details["date"] = latestDate;
					return details;
				}
			);
			return flattenedData;
		}

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
	},
  watch: {
    rawData(newData, oldData) {
      console.log(newData, oldData);
      const sampleData = Object.values(this.rawData)[1];
      sampleData
      // let headers = ['date'].concat(Object.key(newColumns));
      console.log(sampleData);

        // this.gridColumns = headers;
    },
    coutryParam(newVal, oldVal) {
      if (newVal !== oldVal) {
        fetch("https://covidapi.info/api/v1/country/USA")
          .then(res => res.json())
          .then(data => {
            this.rawData = data;
            console.log(data);
          })
          .catch(err => {
            console.log(err);
          });
        }
      },
	created() {
    this.requestData();
    this.buildTable();

  }
  }
}
</script>

<style>
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
</style>