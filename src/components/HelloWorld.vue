<template>
	<div class="hello">
		<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

			<main
				role="main"
				class="inner cover"
				v-if="!displayData"
			>
				<h1 class="cover-heading">Stalk the 'Rona</h1>
				<p class="lead cover-text">With corona calling the shots on the street, we call the queries.</p>
				<p class="lead">
					<!-- BUTTON -->
					<a
						class="btn btn-lg btn-secondary"
						id="submitButton"
						@click="queryClicked"
						href="#"
					>Corona Query!</a>
				</p>
			</main>
		</div>
	</div>
</template>

<script>
	export default {
		name: "HelloWorld",
		props: {
			msg: String
		},
		data() {
			return {
        displayData:'',
				queryActive: false,
				country: ''
			};
		},
		methods: {
			queryClicked() {
        let selectCountry = this.country = 'USA';
        this.$emit("queryClicked", selectCountry); //this.country is just placeholder for user input

        this.queryActive = true;
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
