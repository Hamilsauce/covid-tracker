<template>
	<div class="app-greeting">
		<transition name="fade">
			<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
				<main role="main" class="inner cover" v-if="!displayData">
					<h1 class="cover-heading">Stalk the 'Rona</h1>

					<div class="lead greetingBody" v-if="displayOptions === false">
						<p class="lead cover-text">
							With corona calling the shots on the street, we call the queries.
						</p>
						<router-link to="/QueryView" class="nav-link">
							<div
								class="btn btn-lg btn-secondary"
								id="startButton"
								@click="toggleOptions"
							>
								Corona Query!
							</div>
						</router-link>
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
			displayOptions: false,

			country: ""
		};
	},
	methods: {
		revealQueryForm() {
			// let selectCountry = (this.country = "USA");
			this.$emit("revealQueryForm"); //this.country is just placeholder for user input
		},
		toggleOptions() {
			setTimeout(() => {
				this.displayOptions = !this.displayOptions;
			}, 750);
		},

		enableButtons() {
			this;
		}
	},
	created() {}
};
</script>

<style scoped>
.fade-enter-active {
	transition: opacity 1.1s;
}
.fade-leave-active {
	transition: opacity 0.75s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
/* h1::before {
		content:attr(data-tooltip);
	} */

.greetingBody {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	z-index: 1;
}

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
