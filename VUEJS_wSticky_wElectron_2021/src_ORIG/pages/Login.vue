<template>
	<div class="login-body">
		<div class="login-panel p-fluid">
			<div class="login-panel-header">
				<img src="layout/images/logo-slim.png" alt="serenity-vue"/>
			</div>
			<div class="login-panel-content">
				<div class="grid">
					<div class="col-12">
						<h1>Sign-in to Serenity Network</h1>
					</div>
					<div class="col-12">
						<span class="p-float-label">
							<InputText id="username" type="text" v-model="username"/>
							<label for="username">Username</label>
						</span>
					</div>
					<div class="col-12">
						<span class="p-float-label">
							<InputText id="password" type="password" v-model="password"/>
							<label for="password">Password</label>
						</span>
					</div>
					<div class="col-12">
						<router-link to="/">
							<Button label="Sign In" style="width:100%"/>
						</router-link>
					</div>
					<div class="col-12">
						Don't have an account? <router-link to="/">Sign Up</router-link> now.
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		}
	}
</script>

<style scoped>

</style>
