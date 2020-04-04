<template>
	<div
		id="app"
		class="body"
	>
		<header class="masthead mb-auto app-header">
			<div class="inner">
				<h3 class="masthead-brand">COVID-19 APP</h3>
				<nav class="nav nav-masthead justify-content-center">
					<a
						class="nav-link active"
						href="#"
					>Home</a>
					<a
						class="nav-link"
						href="#"
					>Features</a>
					<a
						class="nav-link"
						href="#"
					>About</a>
				</nav>

			</div>
			<div id="nav">
				<router-link to="/">Home</router-link> |
				<router-link to="/about">About</router-link>
			</div>
		</header>
		<router-view
			:queriedDates="queriedDates"
			@queryClicked="covidFetch"
		/>

		<footer class="mastfoot mt-auto">
			<div class="inner">
				<p><a href="https://hamilsauce.github.io">SEAHAG</a>2020</p>
			</div>
		</footer>
		<!--
	<div
			class="dataDisplay"
			v-if="displayData"
			:class="{ show: displayData }"
		>
			<form id="search">
				Search <input
					name="query"
					v-model="searchQuery"
				>
			</form>
			<data-table
				:heroes="queriedDates"
				:columns="gridColumns"
				:filter-key="searchQuery"
			>
			</data-table>
		</div>
		</footer> -->

	</div>

</template>

<script>
	// import DataTable from "./components/DataTable";

	export default {
		name: "app",
		components: {
			// DataTable
		},
		data() {
			return {
				displayData: "",
				searchQuery: "",
				gridColumns: ["date", "confirmed", "deaths", "recovered"],
				gridData: [
					{ name: "Chuck Norris", power: Infinity },
					{ name: "Bruce Lee", power: 9000 },
					{ name: "Jackie Chan", power: 7000 },
					{ name: "Jet Li", power: 8000 }
				],
				queriedDates: []
			};
		},
		methods: {
			covidFetch() {
				this.displayData = true;
				fetch("https://covidapi.info/api/v1/country/USA")
					.then(res => res.json())
					.then(data => {
						// let [date, details]
						let cleanedData = Object.entries(data.result).map(
							([date, details]) => {
								let [year, month, day] = date.split("-");
								let latestDate = new Date(
									`${month}/${day}/${year}`
								).toLocaleDateString();
								details["date"] = latestDate;
								return details;
							}
						);
						this.queriedDates = cleanedData;
					})
					.catch(err => {
						console.log(err);
					});
			}
		}
	};
</script>
<style >
	@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:400,500,700|Ubuntu:400,500,700&display=swap");
	@import url("https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,600,700&display=swap");

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
		/* Prevent inheritance from `body` */
		background-color: rgb(75, 54, 105);
		border: 0.05rem solid rgba(255, 255, 255, 0.671);
		font-family: "Ubuntu", sans-serif;
		color: rgb(214, 214, 214);
		font-weight: 400;
	}

	/** Base structure */
	html,
	#app {
		height: 100vh;
		background-color: rgb(42, 42, 42);

	}
	#app {
		padding: 0;
		margin: auto;
		overflow: auto;
		/* display: flex;
		flex-direction: column;
		justify-content: space-between; */
		display: grid;
		gap: 10px;
		margin: auto;
		text-align: center;
	}
	#app {
		color: #fff;
		text-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.548);
		box-shadow: inset 0 0 6em rgba(0, 0, 0, 0.555);
	}

	/* new */
	.cover-container {
		/* max-width: 42em; */
		display: flex;
		justify-content: space-between;
	}
	.app-header {
		margin-bottom: 15px;
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

	.dataDisplay {
		color: white;
		padding: 0;
		transform: 1s;
		transition: height 0.5s, opacity 0.5s;
		opacity: 0;
		height: 0px;
	}

	.dataDisplay.show {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		transform: 1s;
		transition: height 0.8s, opacity 0.65s;
		opacity: 1;
		/* height: 150px; */
	}

	.dataDisplay > h2 {
		letter-spacing: 0.07em;
		/* font-family: 'Ubuntu', sans-serif; */
	}

	.detail-date {
		letter-spacing: 0.1em;
		color: rgb(226, 226, 226);
	}

	.detail-list {
		display: grid;
		gap: 5px;
		padding: 15px 0px;
		margin: auto;
		font-size: 1.1em;
		list-style: none;
		text-align: center;
	}

	.detail-list > li {
		letter-spacing: 0.07em;
	}

	.detail-name {
		margin-right: 4px;
		font-weight: 500;
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
