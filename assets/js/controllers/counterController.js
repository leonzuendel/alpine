export default () => ({
	count: 0,
	number: '',

	addToCount(number) {
		this.count += Number(number);
		this.$refs.input.value = '';
	},

	resetCounter() {
		this.count = 0;
	},
})