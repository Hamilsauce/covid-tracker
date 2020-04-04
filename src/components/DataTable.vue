<template>
	<div class="table-container">
		<table>
			<thead>
				<tr>
					<th
						v-for="key in columns"
						:key="key"
						@click="sortBy(key)"
						:class="{ active: sortKey == key }"
					>
						{{ key | capitalize }}
						<span
							class="arrow"
							:class="sortOrders[key] > 0 ? 'asc' : 'dsc'"
						>
						</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="entry in filteredHeroes"
					:key="entry.name"
				>
					<td
						v-for="key in columns"
						:key="key"
					>
						{{entry[key]}}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: "DataTable",
		components: {},
		props: {
			heroes: Array,
			columns: Array,
			filterKey: String
		},
		data() {
			let sortOrders = {};
			this.columns.forEach(key => {
				sortOrders[key] = 1;
			});
			return {
				sortKey: "",
				sortOrders: sortOrders
			};
		},
		methods: {
			sortBy(key) {
				this.sortKey = key;
				this.sortOrders[key] = this.sortOrders[key] * -1;
			}
		},
		computed: {
			filteredHeroes() {
				let sortKey = this.sortKey;
				let filterKey = this.filterKey && this.filterKey.toLowerCase();
				let order = this.sortOrders[sortKey] || 1;
				let heroes = this.heroes;
				if (filterKey) {
					heroes = heroes.filter(row => {
						return Object.keys(row).some(key => {
							return (
								String(row[key])
									.toLowerCase()
									.indexOf(filterKey) > -1
							);
						});
					});
				}
				if (sortKey) {
					heroes = heroes.slice().sort((a, b) => {
						a = a[sortKey];
						b = b[sortKey];
						return (a === b ? 0 : a > b ? 1 : -1) * order;
					});
				}
				return heroes;
			}
		},
		filters: {
			capitalize(str) {
				return str.charAt(0).toUpperCase() + str.slice(1);
			}
		}
	};
</script>

<style scoped>
	body {
		font-family: Helvetica Neue, Arial, sans-serif;
		font-size: 13px;
		color: rgb(53, 53, 53);
    }
    .table-container {
        position: relative;
        display: flex;

    }

	table {
		border: 2px solid #42b983;
		border-radius: 3px;
		background-color: #fff;
		max-height: 400px;
	}

	th {
		background-color: #353535;
		color: rgba(255, 255, 255, 0.66);
        cursor: pointer;
        font-size: 12px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	td {
		color: rgb(114, 114, 114);
		background-color: #f9f9f9;
		text-shadow: none;
	}

	th,
	td {
		min-width: 75px;
		max-width: 100px;
		padding: 10px 9px;
	}

	th.active {
		color: #fff;
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
</style>