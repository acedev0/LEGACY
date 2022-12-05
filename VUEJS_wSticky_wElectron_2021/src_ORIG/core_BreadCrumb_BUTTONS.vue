<template>
	<div class="layout-breadcrumb">
		<ul>
			<li>
				<router-link to="/">
					<button class="p-link"><i class="pi pi-home"></i></button>
				</router-link>
			</li>
			<li v-if="$route.path === '/'">/</li>
			<template v-if="$route.meta.breadcrumb">
				<li>/</li>
				<li>{{$route.meta.breadcrumb[0].parent}}</li>
				<li>/</li>
				<li>{{$route.meta.breadcrumb[0].label}}</li>
			</template>
		</ul>

		<div class="layout-breadcrumb-options">Export to Excel
			<router-link class="p-link" title="Backup" to="#">
				<i class="pi pi-cloud-download"></i>
			</router-link>

			<!--
			<router-link class="p-link" title="Bookmark" to="/">
				<i class="pi pi-bookmark"></i>
			</router-link>
			<router-link class="p-link" title="Logout" to="/">
				<i class="pi pi-power-off"></i>
			</router-link>
			-->
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items: []
			}
		},
		methods: {
			watchRouter() {
				if(this.$router.currentRoute.value.meta.breadcrumb) {
					this.items = [];
					const x = this.$router.currentRoute.value.meta.breadcrumb[0];
					for(let pro in x) {
						this.items.push({label: x[pro]});
					}
				}
			}
		},
		watch: {
			$route() {
				this.watchRouter();
			}
		},
		mounted() {
			this.watchRouter();
		}
	}
</script>

<style scoped>

</style>
