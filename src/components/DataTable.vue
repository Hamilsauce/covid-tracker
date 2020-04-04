<template>
	<div class="table-container">
		<form class="search" @submit.prevent="">
			Search <input
				name="query"

				v-model="searchQuery"
			>
		</form>
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
			// searchQuery: String
		},
		data() {
			let sortOrders = {};
			this.columns.forEach(key => {
				sortOrders[key] = 1;
			});
			return {
				sortKey: "",
				sortOrders: sortOrders,
				searchQuery: ""
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
				let searchQuery = this.searchQuery && this.searchQuery.toLowerCase();
				let order = this.sortOrders[sortKey] || 1;
				let heroes = this.heroes;
				if (searchQuery) {
					heroes = heroes.filter(row => {
						return Object.keys(row).some(key => {
							return (
								String(row[key])
									.toLowerCase()
									.indexOf(searchQuery) > -1
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
		font-family: 'Noto Sans JP', sans-serif;

		color: rgb(53, 53, 53);
    }

	.table-container {
        position: relative;
        height: 100%;
        min-height: 100vw;
        padding-top: 0;
		/* display: flex; */
        /* flex-direction: column; */
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
    .search>input {
        border-radius: 5px;
		padding: 0px 0px 0px 4px;
		margin-left: 10px;
		font-size: 15px;
    }

	table {
		border: 2px solid #40487a ;
		border-radius: 6px;
		background: #fff;
		/* padding: 5px; */

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
		font-family: 'Noto Sans JP', sans-serif;
		border-bottom: 2px solid #363538c7;
	}

	td {
		box-sizing: border-box;
		color: rgb(129, 127, 127);
		background-color: #f9f9f9;
		text-shadow: none;
		/* font-family: 'Ubuntu', sans-serif;
		font-family: 'Montserrat Alternates', sans-serif; */
		font-family: 'Noto Sans JP', sans-serif;
		font-size: 14px;
		font-weight: 500;
		padding: 10px 5px;



	}

	th {
		max-width: 110px;
		/* width: fit-content; */
		padding: 15px 7px;
		min-width: fit-content;
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

@media screen and (max-width: 500px) {
	table {
		max-width: 98vw;
	}

}


</style>