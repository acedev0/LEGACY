<template>
	<AppSubmenu :items="model" :layoutMode="layoutMode" :menuActive="active" :sidebarActive="sidebarActive" :mobileMenuActive="mobileMenuActive" :parentMenuItemActive="true" :root="true" class="layout-menu" />
</template>

<script>
import AppSubmenu from './AppSubmenu';

export default {
	props: {
		model: Array,
		layoutMode: String,
		active: Boolean,
		sidebarActive: Boolean,
		mobileMenuActive: Boolean
	},
	components: {
		'AppSubmenu': AppSubmenu
	}
}
</script>

<style scoped>

</style>