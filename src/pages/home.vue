<template>
	<div>
		home
		<nav-header></nav-header>
		<router-view></router-view>
		<nav-foot></nav-foot>
	</div>
</template>

<script>
import navHeader from '../components/NavHeader.vue'
import navFoot from '../components/NavFoot.vue'
export default {
	name: 'home',
	components: {
		navHeader,navFoot
	}
}
</script>

<style>

</style>