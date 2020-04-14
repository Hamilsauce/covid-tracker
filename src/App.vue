<template>
	<div id="app" class="app">
		<main class="app-body">
			<header class="app-header masthead mb-auto">
				<div class="inner">
					<h3 class="masthead-brand">COVID-19 APP</h3>
				</div>
				<nav id="nav" class="nav nav-masthead justify-content-center">
					<router-link to="/" class="nav-link active" :queryResults="queryResults"
						>Home</router-link
					>
					<router-link to="/QueryView" class="nav-link">Data</router-link>
					<router-link to="/about" class="nav-link">About</router-link>
				</nav>
			</header>
			<div class="app-content">
				<router-view />
				<DataTable
					:dataSet="queryResults"
					:columns="gridColumns"
					v-if="dataTableActive"
				/>
			</div>
			<footer class="mastfoot mt-auto">
				<div class="inner">
					<p><a href="https://hamilsauce.github.io">SEAHAG</a>2020</p>
				</div>
			</footer>
		</main>
	</div>
</template>

<script>
import DataTable from "./components/DataTable";
// import EventBus from "./components/eventBus.js";
import axios from "axios";

export default {
	name: "app",
	components: {
		// EventBus
		DataTable
	},
	methods: {
		dataFetch(params) {
			if (params == "latest-date") {
				console.log("latest-date query");
			} else {
				let url = `${this.queryBuilder.baseUrl}/${params}`;
				this.bigFetch(url);
			}
			console.log(params);
		},

		bigFetch() {
			fetch("https://covidapi.info/api/v1/country/USA")
				.then(res => res.json())
				.then(data => {
					this.queryResults = Object.entries(data.result);
					console.log(this.queryResults);
				})
				.catch(err => {
					console.log(err);
				});
		},
		flattenDataSet() {
			let flattenedData = Object.entries(this.queryResults).map(
				([date, details]) => {
					let [year, month, day] = date.split("-");
					let latestDate = new Date(`${month}/${day}/${year}`).toLocaleDateString();

					details["date"] = latestDate;
					return details;
				}
			);
			return flattenedData;
		},
		async axiosQuery() {
			// url = "https://covidapi.info/api/v1/country/USA";
			try {
				const res = await axios.get("https://covidapi.info/api/v1/country/USA");
				let data = res.json();
				console.log(data);
				// this.queryResults = Object.entries(data.result);
				this.queryResults = data.result;
				console.log(data);
			} catch (err) {
				console.log(err);
			}
		},
		fixDates(date) {
			let [year, month, day] = date.split("-");
			let latestDate = new Date(`${month}/${day}/${year}`).toLocaleDateString();
			return latestDate;
    },
	computed: {
		dataSet() {
			let flattenedData = Object.entries(this.rawData).map(
				([date, details]) => {
					let [year, month, day] = date.split("-");
					let latestDate = new Date(`${month}/${day}/${year}`).toLocaleDateString();
					details["date"] = latestDate;
					return details;
				}
			);
			return flattenedData;
		}
	},
		data() {
			return {
				// TODO Movie queryBuilder to future data view
				queryBuilder: {
					baseUrl: "https://covidapi.info/api/v1",
					selectedCountry: "",
					globalTotals: "",
					countryTotal: `country/${this.selectedCountry}/latest`
				},
				displayData: "",
				searchQuery: "",
				gridColumns: ["date", "confirmed", "deaths", "recovered"],
				queryResults: [],
				dataTableActive: false,
				rawData: {
					count: 78,
					result: {
						"2020-01-22": {
							confirmed: 1,
							deaths: 0,
							recovered: 0
						},
						"2020-01-23": {
							confirmed: 1,
							deaths: 0,
							recovered: 0
						},
						"2020-01-24": {
							confirmed: 2,
							deaths: 0,
							recovered: 0
						},
						"2020-01-25": {
							confirmed: 2,
							deaths: 0,
							recovered: 0
						},
						"2020-01-26": {
							confirmed: 5,
							deaths: 0,
							recovered: 0
						},
						"2020-01-27": {
							confirmed: 5,
							deaths: 0,
							recovered: 0
						},
						"2020-01-28": {
							confirmed: 5,
							deaths: 0,
							recovered: 0
						},
						"2020-01-29": {
							confirmed: 5,
							deaths: 0,
							recovered: 0
						},
						"2020-01-30": {
							confirmed: 5,
							deaths: 0,
							recovered: 0
						},
						"2020-01-31": {
							confirmed: 7,
							deaths: 0,
							recovered: 0
						},
						"2020-02-01": {
							confirmed: 8,
							deaths: 0,
							recovered: 0
						},
						"2020-02-02": {
							confirmed: 8,
							deaths: 0,
							recovered: 0
						},
						"2020-02-03": {
							confirmed: 11,
							deaths: 0,
							recovered: 0
						},
						"2020-02-04": {
							confirmed: 11,
							deaths: 0,
							recovered: 0
						},
						"2020-02-05": {
							confirmed: 11,
							deaths: 0,
							recovered: 0
						},
						"2020-02-06": {
							confirmed: 11,
							deaths: 0,
							recovered: 0
						},
						"2020-02-07": {
							confirmed: 11,
							deaths: 0,
							recovered: 0
						},
						"2020-02-08": {
							confirmed: 11,
							deaths: 0,
							recovered: 0
						},
						"2020-02-09": {
							confirmed: 11,
							deaths: 0,
							recovered: 3
						},
						"2020-02-10": {
							confirmed: 11,
							deaths: 0,
							recovered: 3
						},
						"2020-02-11": {
							confirmed: 12,
							deaths: 0,
							recovered: 3
						},
						"2020-02-12": {
							confirmed: 12,
							deaths: 0,
							recovered: 3
						},
						"2020-02-13": {
							confirmed: 13,
							deaths: 0,
							recovered: 3
						},
						"2020-02-14": {
							confirmed: 13,
							deaths: 0,
							recovered: 3
						},
						"2020-02-15": {
							confirmed: 13,
							deaths: 0,
							recovered: 3
						},
						"2020-02-16": {
							confirmed: 13,
							deaths: 0,
							recovered: 3
						},
						"2020-02-17": {
							confirmed: 13,
							deaths: 0,
							recovered: 3
						},
						"2020-02-18": {
							confirmed: 13,
							deaths: 0,
							recovered: 3
						},
						"2020-02-19": {
							confirmed: 13,
							deaths: 0,
							recovered: 3
						},
						"2020-02-20": {
							confirmed: 13,
							deaths: 0,
							recovered: 3
						},
						"2020-02-21": {
							confirmed: 15,
							deaths: 0,
							recovered: 5
						},
						"2020-02-22": {
							confirmed: 15,
							deaths: 0,
							recovered: 5
						},
						"2020-02-23": {
							confirmed: 15,
							deaths: 0,
							recovered: 5
						},
						"2020-02-24": {
							confirmed: 51,
							deaths: 0,
							recovered: 5
						},
						"2020-02-25": {
							confirmed: 51,
							deaths: 0,
							recovered: 6
						},
						"2020-02-26": {
							confirmed: 57,
							deaths: 0,
							recovered: 6
						},
						"2020-02-27": {
							confirmed: 58,
							deaths: 0,
							recovered: 6
						},
						"2020-02-28": {
							confirmed: 60,
							deaths: 0,
							recovered: 7
						},
						"2020-02-29": {
							confirmed: 68,
							deaths: 1,
							recovered: 7
						},
						"2020-03-01": {
							confirmed: 74,
							deaths: 1,
							recovered: 7
						},
						"2020-03-02": {
							confirmed: 98,
							deaths: 6,
							recovered: 7
						},
						"2020-03-03": {
							confirmed: 118,
							deaths: 7,
							recovered: 7
						},
						"2020-03-04": {
							confirmed: 149,
							deaths: 11,
							recovered: 7
						},
						"2020-03-05": {
							confirmed: 217,
							deaths: 12,
							recovered: 7
						},
						"2020-03-06": {
							confirmed: 262,
							deaths: 14,
							recovered: 7
						},
						"2020-03-07": {
							confirmed: 402,
							deaths: 17,
							recovered: 7
						},
						"2020-03-08": {
							confirmed: 518,
							deaths: 21,
							recovered: 7
						},
						"2020-03-09": {
							confirmed: 583,
							deaths: 22,
							recovered: 7
						},
						"2020-03-10": {
							confirmed: 959,
							deaths: 28,
							recovered: 8
						},
						"2020-03-11": {
							confirmed: 1281,
							deaths: 36,
							recovered: 8
						},
						"2020-03-12": {
							confirmed: 1663,
							deaths: 40,
							recovered: 12
						},
						"2020-03-13": {
							confirmed: 2179,
							deaths: 47,
							recovered: 12
						},
						"2020-03-14": {
							confirmed: 2727,
							deaths: 54,
							recovered: 12
						},
						"2020-03-15": {
							confirmed: 3499,
							deaths: 63,
							recovered: 12
						},
						"2020-03-16": {
							confirmed: 4632,
							deaths: 85,
							recovered: 17
						},
						"2020-03-17": {
							confirmed: 6421,
							deaths: 108,
							recovered: 17
						},
						"2020-03-18": {
							confirmed: 7783,
							deaths: 118,
							recovered: 105
						},
						"2020-03-19": {
							confirmed: 13747,
							deaths: 200,
							recovered: 121
						},
						"2020-03-20": {
							confirmed: 19273,
							deaths: 244,
							recovered: 147
						},
						"2020-03-21": {
							confirmed: 25600,
							deaths: 307,
							recovered: 176
						},
						"2020-03-22": {
							confirmed: 33276,
							deaths: 417,
							recovered: 178
						},
						"2020-03-23": {
							confirmed: 43847,
							deaths: 557,
							recovered: 178
						},
						"2020-03-24": {
							confirmed: 53740,
							deaths: 706,
							recovered: 348
						},
						"2020-03-25": {
							confirmed: 65778,
							deaths: 942,
							recovered: 361
						},
						"2020-03-26": {
							confirmed: 83836,
							deaths: 1209,
							recovered: 681
						},
						"2020-03-27": {
							confirmed: 101657,
							deaths: 1581,
							recovered: 869
						},
						"2020-03-28": {
							confirmed: 121478,
							deaths: 2026,
							recovered: 1072
						},
						"2020-03-29": {
							confirmed: 140909,
							deaths: 2467,
							recovered: 2665
						},
						"2020-03-30": {
							confirmed: 161837,
							deaths: 2978,
							recovered: 5644
						},
						"2020-03-31": {
							confirmed: 188172,
							deaths: 3873,
							recovered: 7024
						},
						"2020-04-01": {
							confirmed: 213372,
							deaths: 4757,
							recovered: 8474
						},
						"2020-04-02": {
							confirmed: 243616,
							deaths: 5926,
							recovered: 9001
						},
						"2020-04-03": {
							confirmed: 275586,
							deaths: 7087,
							recovered: 9707
						},
						"2020-04-04": {
							confirmed: 308850,
							deaths: 8407,
							recovered: 14652
						},
						"2020-04-05": {
							confirmed: 337072,
							deaths: 9619,
							recovered: 17448
						},
						"2020-04-06": {
							confirmed: 366667,
							deaths: 10783,
							recovered: 19581
						},
						"2020-04-07": {
							confirmed: 396223,
							deaths: 12722,
							recovered: 21763
						},
						"2020-04-08": {
							confirmed: 429052,
							deaths: 14695,
							recovered: 23559
						}
					}
				}
			};
		}
	},
	created() {
		this.bigFetch();
	}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:400,500,700|Ubuntu:400,500,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,600,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500,700&display=swap");

/** Globals */
* {
	font-family: "Roboto Slab", serif;
	font-family: "Montserrat Alternates", sans-serif;
}

/* Links */
a,
a:focus,
a:hover {
	color: #fff;
}

/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
	text-shadow: none;
	background-color: rgb(75, 54, 105);
	border: 0.05rem solid rgba(255, 255, 255, 0.671);
	font-family: "Ubuntu", sans-serif;
	color: rgb(214, 214, 214);
	font-weight: 400;
}

/** Base structure */
html {
	height: 100vh;
	background-color: rgb(42, 42, 42);
}
.app {
	height: 100vh;
	max-width: auto;
	padding: 0;
	margin: auto;
	padding: 0;
	margin: auto;
	text-align: center;
	color: #fff;
	background-color: rgb(42, 42, 42);
	text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.548);
	box-shadow: inset 0 0 6em rgba(0, 0, 0, 0.555);
	overflow: auto;
}
.app-body {
	display: grid;
	gap: 10px;
	grid-template-rows: 1fr 8fr 1fr;
	height: 100vh;
	max-width: 700px;
	padding: 0;
	margin: auto;
	text-align: center;
	color: #fff;
	text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.548);
	overflow: auto;
}
/* new */
.cover-container {
	display: flex;
	justify-content: space-between;
}
.app-header {
	margin: 5px 0px 15px 0px;
}
nav {
	margin-bottom: 15px;
}

.masthead-brand {
	font-weight: 400;
	font-size: 1.6em;
	color: rgba(221, 221, 221, 0.938);
	font-family: "Ubuntu", sans-serif;
}

.inner.cover {
	/** */
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	/* height: 215px; */
	overflow: hidden;
	transform: 0.75s;
	transition: height 0.75s, opacity 0.75s;
}
.inner.cover.collapsed {
	opacity: 0;
	/* height: 0px; */
	overflow: hidden;
	transform: 0.75s;
	transition: height 1s, opacity 0.8s;
}
.cover-heading {
	margin-bottom: 3px;
	font-weight: 400;
	letter-spacing: 0.05em;
	font-size: 2.3em;
	font-family: "Ubuntu", sans-serif;
}
.cover-text {
	margin-bottom: 10px;
	color: rgb(228, 228, 228);
	font-size: 1.2rem;
}

.bd-placeholder-img {
	font-size: 1.125rem;
	text-anchor: middle;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

@media (min-width: 768px) {
	.bd-placeholder-img-lg {
		font-size: 3.5rem;
	}
}

/* end new */

/* * Header*/
.masthead {
	margin-bottom: 2rem;
	display: block;
}

.masthead-brand {
	margin-bottom: 0;
}

.nav-masthead .nav-link {
	padding: 0.25rem 0;
	font-weight: 700;
	color: rgba(255, 255, 255, 0.5);
	background-color: transparent;
	border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
	border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
	margin-left: 1rem;
}

.nav-masthead .active {
	color: #fff;
	border-bottom-color: #fff;
}

@media (min-width: 48em) {
	.masthead-brand {
		float: left;
	}

	.nav-masthead {
		float: right;
	}
}

/** Cover */
.cover {
	padding: 0 1.5rem;
}

.cover .btn-lg {
	padding: 0.75rem 1.25rem;
	font-weight: 700;
}

.mastfoot {
	color: rgba(255, 255, 255, 0.5);
}
</style>
