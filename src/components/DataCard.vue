<template>
	<div class="card-container" v-if="dataReady === true">
		<transition name="fade">
			<h3 class="detail-date">
				{{ displayData.date }}
				<!-- {{ this.formattedDate() }} -->
			</h3>
		</transition>
		<transition name="fade">
			<ul class="formContentDisplay detail-list">
				<li class="" v-for="item in displayData" :key="item.date">
					{{ item[0] | capitalize }}: {{ Number(item[1]).toLocaleString() }}
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
//TODO Filters: {{ this.cleanedData.date | capitalize }}

export default {
	name: "DataCard",
	components: {},
	props: {
    cardData: Object,
    dataReady: Boolean
	},
	data() {
		return {};
	},

	methods: {},
	computed: {
		// displayDate () {
		// 	let filtered = this.cardData.filter(item => {
		// 		return item[0] == 'date';
		// 	})
		// let [year, month, day] =  filtered[0][1].split("-");
		// return `${month}/${day}/${year}`;
		// },

		displayData() {
			// let filtered = this.cardData.filter(item => {
			// 	return item[0] !== "date";
			// });
      // return filtered;
      return Object.entries(this.cardData);
		}

		// formattedDate() {
		// 	let [year, month, day] = this.rawDataObj.date.split("-");
		// 	return new Date(`${month}/${day}/${year}`).toLocaleDateString();
		// }
	},
	filters: {
		capitalize(str) {
			return str.charAt(0).toUpperCase() + str.slice(1);
		}
	},
	watch: {
		cardData: function() {}
	},

	/* Vue lifecycle hooks (Ref: https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks) */
	created() {},
	mounted() {},
	updated() {},
	destroyed() {}
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
</style>