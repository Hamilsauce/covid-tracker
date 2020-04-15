<template>
	<div class="home">
		<section class="home-top">
			<div class="selectContainer">
				<v-select
					v-model="vs__selected"
					label="COUNTRY"
					:reduce="COUNTRY => COUNTRY.CODE"
					:options="options"
				/>>
			</div>
			<transition name="fade">
				<AppGreeting
					@displayDataTable="this.dataTableActive = true"
					@displayDataCar="this.toggleDataCard"
					v-if="greetingActive === true"
					msg="Welcome to Your Vue.js App"
					class="appGreeting"
				/>
			</transition>
			<section class="button-container">
				<form action="">
					<input
						@click="toggleDataCard"
						type="button"
						class="toggleButtons showLatestDay"
						value="Show the latest"
					/>
					<input
						type="button"
						class="toggleButtons showTableButton"
						value="Let's get Tabular"
					/>
				</form>
			</section>
			<DataCard
				class="temp-display"
				v-if="showDataCard === true"
				:cardData="cardData"
			/>
		</section>

		<!-- <label for="countryInput" class="inputLabel"></label>
              <select name="countryInput" v-model="countryParam" class="countryInput">
                <option value="USA">Volvo</option>
                <option value="IND">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
              </select> -->
	</div>
</template>

<script>
// @ is an alias to /src
import AppGreeting from "@/components/AppGreeting.vue";
import DataCard from "@/components/DataCard";
import vSelect from "vue-select";
export default {
	name: "Home",
	components: {
		AppGreeting,
		DataCard,
		vSelect
	},
	props: {
		queryResults: Array
	},
	data() {
		return {
			showDataCard: false,
			greetingActive: false,
			queryFormActive: false,
			dataTableActive: false,
			queryParams: "",
			formViewConent: "",
			country: "",
			gridColumns: ["date", "confirmed", "deaths", "recovered"],
			countryParam: "",
			latestGlobal: "",
			vs__selected: "",
			options: []
		};
	},
	methods: {
		requestData() {
			let params = this.queryParams;
			this.$emit("queryRequested", params);
		},
		revealForm() {
			this.queryParams = "global";
			this.requestData();
			setTimeout(() => {
				this.greetingActive = false;
			}, 200);
			this.unhideForm();
		},
		unhideGreeting() {
			setTimeout(() => {
				this.greetingActive = true;
			}, 500);
		},
		unhideForm() {
			setTimeout(() => {
				this.queryFormActive = true;
			}, 1500);
		},
		toggleDataCard() {
			this.showDataCard = !this.showDataCard;
		},
		toggleTableState() {
			this.dataTableActive = !this.dataTableActive;
		},
		getIsoCodes() {
			fetch("https://hamilsauce.github.io/codes.json")
				.then(res => res.json())
				.then(data => {
					this.options = data.codes;
				});
		}
	},
	computed: {
		cardData() {
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

		// console.log(Object.entries(data.result).pop());
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
	mounted() {
		this.unhideGreeting();
		this.getIsoCodes();
	}
};
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

button {
	font-size: 14px;
}

.button-container {
	/* /* position: absolute; */
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	/* transition: 1s; */
}
.toggleButtons {
	border-radius: 12px;
	padding: 10px;
	background: #4b3669;
	color: white;
	border: 0.05rem solid rgba(255, 255, 255, 0.671);
	font-size: 1.25rem;
	line-height: 1.5;
}

/* //* This is for formContent component */

.home {
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* padding: 50px; */
	height: 100%;
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
	max-width: 300px;
	margin: auto;
	padding: 10px;
}

.v-select {
	background: rgb(255, 255, 255);
	border-radius: 3px;
	font-size: 1em;
}
</style>