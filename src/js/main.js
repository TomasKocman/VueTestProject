import Vue from 'vue'

new Vue({
    el: '#app',
    data: {
        syllabus: [ 'HTML', 'CSS', 'Scratch', 'JavaScript', 'Python' ],

        buses: [ 1, 2, 3, 4, 5],
        nextBus: 6,
    },
    methods: {
        completed(topic) {
            let index = this.syllabus.indexOf(topic);
            this.syllabus.splice(index, 1);
        },
    },
    computed: {
    },
    mounted() {
        setInterval(() => {
            const headOrTail = () => Math.random() > 0.5;
            if (headOrTail()) {
                this.buses.push(this.nextBus);
                this.nextBus += 1;
            }
            else
                this.buses.splice(0, 1);
        }, 2000)
    }
});
