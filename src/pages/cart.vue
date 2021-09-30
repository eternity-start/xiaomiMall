<template>
	<div>
		<order-header></order-header>
		cart
		<nav-foot></nav-foot>
	</div>
</template>

<script>
import orderHeader from '../components/OrderHeader.vue'
import navFoot from '../components/NavFoot.vue'
export default {
	name: 'cart',
	components: {
		orderHeader,
		navFoot
	}
}
</script>

<style>

</style>