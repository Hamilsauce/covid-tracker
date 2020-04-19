<template>
	<div id="app" class="app">
		<main class="app-body">
			<header class="app-header masthead mb-auto">
				<div class="inner">
					<h3 class="masthead-brand">COVIDify</h3>
				</div>
				<nav id="nav" class="nav nav-masthead justify-content-center">
					<router-link to="/" class="nav-link active">Home</router-link>
					<router-link to="/QueryView" class="nav-link active">Data</router-link>
					<a
						href="https://hamilsauce.github.io/covid-tracker/purpleCovid/index.html"
						class="nav-link active"
						>covidPurple</a
					>
				</nav>
			</header>
			<div class="app-content">
				<router-view :result="flattenedDataSet" @newCountryParam="handleNewParam" />
				<!-- <DataTable
					:dataSet="flattenedDataSet"
					:columns="gridColumns"
					v-if="dataTableActive"
				/> -->
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
// import DataTable from "./components/DataTable";
// import eventBus from "./components/eventBus";

export default {
	name: "app",
	components: {
		// eventBus
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
			activeView: "data",
			displayData: "",
			searchQuery: "",
			gridColumns: ["date", "confirmed", "deaths", "recovered"],
			queryResults: [],
			dataTableActive: false,
			countryParam: "USA"
		};
	},
	methods: {
		async bigFetch() {
			await fetch(`https://covidapi.info/api/v1/country/${this.countryParam}`)
				.then(res => res.json())
				.then(data => {
					this.queryResults = data.result;
					console.log(this.queryResults);
				})
				.catch(err => {
					console.log(err);
					alert(`No data for ${this.countryParam}`);
				});
		},
		handleNewParam(param) {
			this.countryParam = param;
			this.bigFetch();
		},
		setActiveView(view) {
			this.activeView === view;
			console.log("running");
		}
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
	},

	mounted() {
		this.bigFetch();
		// this.getCountryParam();
		// eventBus.$on("newCountryParam", data => {
		// 	this.countryParam = data;
		// 	this.bigFetch();
		// });
	},
	created() {}
};
</script>

<style scope>
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:400,500,700|Ubuntu:400,500,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,600,700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP:400,500,700&display=swap");

/** Globals */
* {
	font-family: "Roboto Slab", serif;
	font-family: "Montserrat Alternates", sans-serif;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
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
	max-width: 500px;
	padding: 0;
	margin: auto;
	text-align: center;
	color: #fff;
	text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.548);
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
	margin-bottom: 35px;
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
