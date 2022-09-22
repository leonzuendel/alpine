interface CounterController {
    count: number,
    number: string,
    addToCount: (number: string) => void,
    resetCount: () => void
}

const counterController: CounterController = {
    count: 0,
    number: '',

    addToCount(number) {
        this.count += Number(number);
        this.number = '';
    },

    resetCount() {
        this.count = 0;
    },
};

export default () => (counterController);