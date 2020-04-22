<template>
	<div class="tableContainer">
		<form class="search" @submit.prevent=""></form>
		<div>
			<table>
				<tr class="search-row" @click="toggleSearch">
					<div class="search-container">
						<label class="search-label" for="query">Search</label>
						<!-- Search --><i class="fas fa-times-circle"></i>
						<input
							class="searchInput"
							name="query"
							v-model="searchQuery"
							:class="{ show: showSearch }"
						/>
					</div>
					<span class="clearButton">
						<svg
							@click="clearSearch"
							:class="{ show: showSearch && showClearButton }"
							aria-hidden="true"
							focusable="false"
							data-prefix="fas"
							data-icon="times-circle"
							class="svg-inline--fa fa-times-circle fa-w-16 clearButton"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							width="16px"
							viewBox="0 0 512 512"
						>
							<path
								class="clearButton"
								fill="currentColor"
								d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
							></path>
						</svg>
					</span>
				</tr>
				<thead>
					<tr>
						<th
							v-for="key in columns"
							@click="sortBy(key)"
							:key="key"
							:class="{ active: sortKey == key }"
						>
							{{ key | capitalize }}
							<span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"> </span>
						</th>
					</tr>
				</thead>

				<tbody>
					<tr
						v-for="entry in filteredDataSet"
						id="entry.date"
						:key="entry.date"
						@click="selectedRow = entry.date"
						:class="{ hilight: selectedRow == entry.date }"
						@dblclick="rowDoubleClick(entry.date)"
					>
						<td v-for="key in columns" :key="key">
							{{ entry[key] }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		columns: Array,
		dataSet: Array,
		dataReady: Boolean
	},
	data: function() {
		let sortOrders = {};
		this.columns.forEach(function(key) {
			sortOrders[key] = 1;
		});
		return {
			showSearch: false,
			showClearButton: false,
			sortKey: "",
			sortOrders: sortOrders,
			searchQuery: "",
			selectedRow: ""
		};
	},
	watch: {
		dataSet: function(val, oldVal) {
			if (val !== oldVal) {
				this.dataRready = true;
			}
		},
		searchQuery: function(val) {
			if (val.length > 0) {
				this.showClearButton = true;
			} else if (val.length == 0) {
				this.showClearButton = false;
			}
		}
	},
	computed: {
		newData() {
			console.log("inside new data");
			console.log(this.dataSet.confirmed);
			return this.dataSet;
		},
		filteredDataSet: function() {
			let sortKey = this.sortKey;
			let searchQuery = this.searchQuery && this.searchQuery.toLowerCase();
			let order = this.sortOrders[sortKey] || 1;
			let dataSet = this.dataSet;
			if (searchQuery) {
				dataSet = dataSet.filter(function(row) {
					return Object.keys(row).some(function(key) {
						return (
							String(row[key])
								.toLowerCase()
								.indexOf(searchQuery) > -1
						);
					});
				});
			}
			if (sortKey) {
				dataSet = dataSet.slice().sort(function(a, b) {
					a = a[sortKey];
					b = b[sortKey];
					return (a === b ? 0 : a > b ? 1 : -1) * order;
				});
			}
			return dataSet;
		}
	},
	filters: {
		capitalize: function(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	},
	methods: {
		sortBy: function(key) {
			this.sortKey = key;
			this.sortOrders[key] = this.sortOrders[key] * -1;
		},
		rowDoubleClick(rowDate) {
			console.log("dble");
			console.log(rowDate);

			let selectedDate = rowDate.toString();
			this.searchQuery = selectedDate;
		},
		selectText() {
			document.querySelector(".searchInput").selectText();
		},
		toggleSearch(e) {
			console.log(e);

			if (e.target.classList.contains("searchInput")) {
				return;
			} else if (e.target.classList.contains("clearButton")) {
				return;
			} else {
				this.showSearch = !this.showSearch;
			}
		},
		clearSearch() {
			this.searchQuery = "";
		}
	}
};
// export default {
// 	name: "DataTable",
// 	components: {},
// 	props: {
// 		dataSet: Array,
// 		columns: Array
// 	},
// 	data() {
// 		let sortOrders = {};
// 		this.columns.forEach(key => {
// 			sortOrders[key] = 1;
// 		});
// 		return {
// 			sortKey: "",
// 			sortOrders: sortOrders,
// 			searchQuery: ""
// 		};
// 	},
// 	methods: {
// 		sortBy(key) {
// 			this.sortKey = key;
// 			this.sortOrders[key] = this.sortOrders[key] * -1;
// 		}
// 	},
// 	computed: {
// 		flattenData() {
// 			let flatData = this.dataSet.map(([date, details]) => {
// 				details.date = date;
// 				return details;
// 			});
// 			return flatData;
// 		},
// 		filteredDataSet() {
// 			let sortKey = this.sortKey;
// 			let searchQuery = this.searchQuery && this.searchQuery.toLowerCase();
// 			let order = this.sortOrders[sortKey] || 1;
// 			let dataSet = this.dataSet;
// 			if (searchQuery) {
// 				dataSet = dataSet.filter(row => {
// 					return Object.keys(row).some(key => {
// 						return (
// 							String(row[key])
// 								.toLowerCase()
// 								.indexOf(searchQuery) > -1
// 						);
// 					});
// 				});
// 			}
// 			if (sortKey) {
// 				dataSet = dataSet.slice().sort((a, b) => {
// 					a = a[sortKey];
// 					b = b[sortKey];
// 					return (a === b ? 0 : a > b ? 1 : -1) * order;
// 				});
// 			}
// 			return dataSet;
// 		}
// 	},
// 	filters: {
// 		capitalize(str) {
// 			return str.charAt(0).toUpperCase() + str.slice(1);
// 		}
// 	}
// };
</script>
<style scoped>
.fa-times-circle {
	position: absolute;
	opacity: 0;
	color: #88787b;
	z-index: 3;
	bottom: 9px;
	right: 85px;
	transition: 0.1s;
}
.fa-times-circle.show {
	opacity: 0.95;
}
body {
	font-family: Helvetica Neue, Arial, sans-serif;
	font-size: 13px;
	font-family: "Noto Sans JP", sans-serif;

	color: rgb(53, 53, 53);
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.search-container {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 5px 0 5px 0;
	background-color: #2f2a2cd2;
	margin: 0;
	/* border-bottom: 1px solid #63355d; */
	box-shadow: 0 0 60px 1px inset #1e487049;
}
.search-label {
	position: relative;
	margin: 0;
	padding: 0;
}
.search-row {
	/* border-bottom: 1px solid rgba(255, 255, 255, 0); */
	position: relative;
	/* padding: 3px 0; */
}
.search {
	margin-bottom: 5px;
	border-radius: 10px;
	display: flex;
	justify-content: left;
	padding: 5px;
}
.search > input {
	border-radius: 5px;
	padding: 0px 0px 0px 4px;
	margin-left: 10px;
	font-size: 15px;
}
.searchInput {
	position: relative;
	/* display: block; */
	border: 0px solid rgba(255, 255, 255, 0);
	opacity: 0;
	/* box-sizing: border-box; */
	padding: 0;
	margin: 0 0 0 0px;
	width: 200px;
	height: 0px;
	transition: 0.35s;
}
.searchInput.show {
	height: 23px;
	padding: 0 5px;
	opacity: 0.95;
}

th {
	color: rgba(255, 255, 255, 0.66);
	cursor: pointer;
	font-size: 13px;
	-webkit-user-select: none;
	/* font-weight: 500; */
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	/* height: 50px; */
	font-family: "Noto Sans JP", sans-serif;
}

td {
	/* box-sizing: border-box; */
	color: rgb(68, 68, 68);
	background-color: #f9f9f9;
	text-shadow: none;
	/* font-family: 'Ubuntu', sans-serif;
  font-family: 'Montserrat Alternates', sans-serif; */
	font-family: "Noto Sans JP", sans-serif;
	font-size: 14px;
	font-weight: 400;
	padding: 10px 5px;
}

.tableContainer {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly; /**/
	margin: auto;
	padding: 5px 0px;
	/* padding-left: 18px; */
	width: 100%;
	border-radius: 8px;
	max-width: max-content;
	z-index: 1;
}

table {
	/**/
	display: grid;
	grid-template-columns: 1fr repeat(auto-fit, 1fr 1fr 1fr);
	grid-template-rows: repeat(auto, 70px);
	justify-content: center;
	/* border: 1px solid rgb(117, 53, 103); */
	border-radius: 3px;
	background-color: rgba(255, 255, 255, 0);
	box-shadow: 0px 0px 10px 1px rgba(110, 110, 110, 0.308);
	width: fit-content;
	margin: auto;
	background: #772766;
}
thead {
	padding: 5px 5px 0px 5px;
	background-color: #772766;
	width: 340px;
	z-index: 2;
}
tbody {
	max-height: 430px;
	max-width: 350px;
	overflow: auto;
	z-index: 1;
	border-radius: 0px 0px 3px 3px;
	/* padding: 0 5px; */
}

th {
	/*display: flex;
flex-direction: row;
justify-content: center;/**/
	background-color: #772766;
	color: rgba(255, 255, 255, 0.726);
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	padding: 2px 10px 10px 10px;
	text-align: center;
	max-width: 100%;
	min-width: 110px;
}

td {
	background-color: #f9f9f9;
	text-align: center;
	padding: 10px 27px;
	min-width: 110px;
	max-width: 100%;
	/* border: 1px solid rgba(255, 255, 255, 1); */
}
tr {
	width: 100%;
	border: 1px solid rgba(255, 255, 255, 0);
	border-bottom: 1px solid rgba(150, 150, 150, 0.37);
}
tr.hilight {
	border: 1px solid white;
}
tr.hilight > td {
	box-shadow: 0px 0px 85px 1px inset rgba(71, 71, 71, 0.336);
	background: rgb(124, 124, 124);
	color: white;
}

th.active {
	color: #fff;
}
tr:active {
	background: rgba(94, 125, 95, 0.4);
}

th.active .arrow {
	opacity: 1;
}

.arrow {
	display: inline-block;
	vertical-align: middle;
	width: 0;
	height: 0;
	margin-left: 5px;
	opacity: 0.66;
}

.arrow.asc {
	border-left: 4px solid transparent;
	border-right: 4px solid transparent;
	border-bottom: 4px solid #fff;
}

.arrow.dsc {
	border-left: 4px solid transparent;
	border-right: 4px solid transparent;
	border-top: 4px solid #fff;
}

@media screen and (max-width: 500px) {
	table {
		max-width: 95vw;
	}
}
</style>