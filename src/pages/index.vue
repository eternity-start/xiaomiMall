<template>
	<div>
		我是home中的router-view
	</div>
</template>

<script>
import storages from '../storage/index'
export default {
	name: 'index',
	components: {

	},
	data() {
		return {

		}
	},
	mounted() {
		storages.setItem('a',2)
		storages.setItem('b',{'name': 'hi'})
		storages.clear('a')
		storages.setItem('age',12,'b')
		storages.clear('age', 'b')
		storages.clear('name', 'b')
		storages.clear('b')
	}
}
</script>

<style>

</style>