<template>
	<div class="app-greeting">
		<transition name="fade">
			<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
				<main role="main" class="inner cover" v-if="!displayData">
					<h1 class="cover-heading">Stalk the 'Rona</h1>
					<p class="lead cover-text">
						With corona calling the shots on the street, we call the queries.
					</p>

					<div class="lead">
						<div
							class="btn btn-lg btn-secondary"
							id="startButton"
							@click="revealQueryForm"
						>
							Corona Query!
						</div>
					</div>
				</main>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: "AppGreeting",
	props: {
		msg: String
	},
	data() {
		return {
			displayData: false,
			country: ''
		};
	},
	methods: {
		revealQueryForm() {
			// let selectCountry = (this.country = "USA");
			this.$emit('revealQueryForm'); //this.country is just placeholder for user input
		}
	}
};
</script>

<style scoped>
.fade-enter-active {
	transition: opacity 1.45s;
}
.fade-leave-active {
	transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
/* h1::before {
		content:attr(data-tooltip);
	} */
h1:hover::before {
	display: inline-block;
}
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
