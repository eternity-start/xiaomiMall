<template>
	<div>
		<order-header></order-header>
		<router-view></router-view>
		<nav-foot></nav-foot>
	</div>
</template>

<script>
import orderHeader from '../components/OrderHeader.vue'
import navFoot from '../components/NavFoot.vue'
export default {
	name: 'order',
	components: {
		orderHeader,
		navFoot
	}
}
</script>

<style>

</style>