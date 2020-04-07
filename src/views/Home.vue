<template>
	<div class="home">
		<section class="home-top">
			<transition name="fade">
				<AppGreeting
					@revealQueryForm="revealForm"
					v-if="greetingActive === true"
					msg="Welcome to Your Vue.js App"
					class="appGreeting"
				/>
			</transition>
			<DataCard
				class="temp-display"
				v-if="queryFormActive === true"
				:cardData="cardData"
			/>
		</section>

		<section class="home-bottom"></section>

		<DataTable
			:dataSet="queryResults"
			:columns="gridColumns"
			v-if="dataTableActive"
		/>
	</div>
</template>

<script>
// @ is an alias to /src
import AppGreeting from "@/components/AppGreeting.vue";
import DataTable from "@/components/DataTable";
import DataCard from "@/components/DataCard";

export default {
	name: "Home",
	components: {
		AppGreeting,
		DataCard,
		DataTable
	},
	props: {
		queryResults: Array
	},
	data() {
		return {
			greetingActive: false,
			queryFormActive: false,
			dataTableActive: false,
			queryParams: "",
			formViewConent: "",
			country: "",
			gridColumns: ["date", "confirmed", "deaths", "recovered"]
		};
	},
	methods: {
		requestData() {
			let params = this.queryParams;
			this.$emit("queryRequested", params);
		},
		// fixDates(date) {
		// 	let [date, details] = Object.entries(date).pop();
		//     let [year, month, day] = date.split("-");

		//     let latestDate = new Date(`${month}/${day}/${year}`).toLocaleDateString();

		// },
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
		}
	},
	computed: {
		cardData() {
			let newArray = this.queryResults[this.queryResults.length - 1];
			let detailArray = Object.entries(newArray[1]);
			let dateArray = ['date', newArray[0]];
			detailArray.push(dateArray)
			return detailArray;
			// });
			// let final = detailArray.push(date);
			// return final;
		}
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
	},
	mounted() {
		this.unhideGreeting();
	}
};
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
</style>