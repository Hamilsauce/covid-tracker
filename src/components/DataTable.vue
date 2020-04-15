<template>
	<div class="tableContainer">
		<form class="search" @submit.prevent="">
			Search <input name="query" v-model="searchQuery" />
		</form>
		<div>
			<table>
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
						v-for="entry in filteredHeroes"
						id="entry.date"
						:key="entry.date"
						@click="selectedRow = entry.date"
						:class="{ hilight: selectedRow == entry.date }"
						@dblclick="console.log(entry.date)"
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
		heroes: Array,
		columns: Array,
		filterKey: String,
		dataSet: Array,
		dataReady: Boolean
	},
	data: function() {
		let sortOrders = {};
		this.columns.forEach(function(key) {
			sortOrders[key] = 1;
		});
		return {
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
		}
	},
	computed: {
		newData() {
			console.log("inside new data");
			console.log(this.dataSet.confirmed);
			return this.dataSet;
		},
		filteredHeroes: function() {
			let sortKey = this.sortKey;
			let filterKey = this.filterKey && this.filterKey.toLowerCase();
			let order = this.sortOrders[sortKey] || 1;
			let dataSet = this.dataSet;
			if (filterKey) {
				dataSet = dataSet.filter(function(row) {
					return Object.keys(row).some(function(key) {
						return (
							String(row[key])
								.toLowerCase()
								.indexOf(filterKey) > -1
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
body {
	font-family: Helvetica Neue, Arial, sans-serif;
	font-size: 13px;
	font-family: "Noto Sans JP", sans-serif;

	color: rgb(53, 53, 53);
}

.table-container {
	position: relative;
	height: 100%;
	max-height: 500px;
	overflow: auto;
	min-height: 100vw;
	padding-top: 0;
	/* display: flex; */
	margin: auto;

	/* display: grid;

      gap: 5px; */
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

table {
	display: grid;
	border: 2px solid #40487a;
	border-radius: 6px;
	background: #fff;
	/* padding: 5px; */
	max-height: 500px;
	overflow: auto;
}

th {
	background: #40487a;
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
	border-bottom: 2px solid #363538c7;
}

td {
	box-sizing: border-box;
	color: rgb(29, 29, 29);
	background-color: #f9f9f9;
	text-shadow: none;
	/* font-family: 'Ubuntu', sans-serif;
  font-family: 'Montserrat Alternates', sans-serif; */
	font-family: "Noto Sans JP", sans-serif;
	font-size: 14px;
	font-weight: 500;
	padding: 10px 5px;
}

.tableContainer {
	display: flex;
	flex-direction: column;
	justify-content: space-evenly; /**/
	margin: auto;
	padding: 15px 5px;
	width: 100%;
	background: rgba(236, 236, 236, 0);
	border: 1px solid rgba(216, 216, 216, 1);
	border-radius: 8px;
	box-shadow: 0px 0px 15px 1px rgba(96, 96, 96, 0.2);
	max-width: max-content;
}
#search {
	padding: 5px;
}
#search > input {
	border-radius: 6px;
	padding: 4px;
	border: 1px solid rgba(200, 200, 200, 0.8);
}

table {
	/**/
	display: grid;
	grid-template-columns: 1fr repeat(auto-fit, 1fr 1fr 1fr);
	grid-template-rows: repeat(auto, 70px);
	justify-content: center;
	/* gap: 5px;/**/
	border: 1px solid rgba(155, 170, 155, 0.96);
	border-radius: 3px;
	background-color: #fff;
	box-shadow: 0px 0px 10px 1px rgba(110, 110, 110, 0.308);
	width: fit-content;
	margin: auto;
}
thead {
	/* display: flex;
 flex-direction: row;
 justify-content: space-evenly;/**/
	background-color: blue;
	padding: 4px 10px;
	margin: 0;
	background-color: #42b983;
	width: 100%;
	border-bottom: 2px solid rgba(105, 150, 100, 0.7);
	box-shadow: 0px 3px 4px 1px rgba(110, 110, 110, 0.308);
	z-index: 2;
}
tbody {
	max-height: 430px;
	overflow: auto;
	z-index: 1;
	border-radius: 0px 3px 3px 0px;
}

th {
	/*display: flex;
flex-direction: row;
justify-content: center;/**/
	background-color: #42b983;
	color: rgba(255, 255, 255, 0.66);
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	padding: 10px 20px;
	text-align: center;
	max-width: 100%;
	min-width: fit-content;
	min-width: max-content;
}

td {
	background-color: #f9f9f9;
	text-align: center;
	padding: 10px 25px;
	min-width: 110px;
	max-width: 100%;
}
tr {
	width: 100%;
	border-bottom: 1px solid rgba(150, 150, 150, 0.26);
}
tr.hilight > td {
	box-shadow: 0px 0px 85px 1px inset rgba(188, 157, 80, 0.6);

	background: rgba(188, 157, 40, 0.5);
	color: white;
}

th,
td {
	/* min-width: 100px; */
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
		max-width: 98vw;
	}
}
</style>