import Vue from 'vue'

// App1
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

// App2
new Vue({
    el: '#app2',
    data: {
        height: 0
    },
    methods: {
        move (event) {
            const newHeight = Number(event.target.value);
            const _this = this;
            const animate = (time) => {
                requestAnimationFrame(animate);
                TWEEN.update(time)
            };
            new TWEEN.Tween({ H: this.height })
                .easing(TWEEN.Easing.Bounce.Out)
                .to({ H: newHeight }, 1000)
                .onUpdate(function () {
                    _this.height = this.H
                })
                .start();
            animate();
        }
    }

});

// App3
new Vue({
    el: '#app3',
    data: {
        kisses: 0,
        kindOfTransformation: 'fade',
        transformationMode: 'in-out'
    },
    computed: {
        transformation() {
            if (this.kisses < 3)
                return 'frog';
            else if (this.kisses >= 3 && this.kisses <= 5) {
                this.transformationMode = 'out-in';
                return 'princess';
            }
            else if (this.kisses > 5) {
                this.kindOfTransformation = 'zoom';
                return 'santa'
            }
        }
    },
    emoji() {
        switch (this.transformation) {
            case 'frog':     return '🐸';
            case 'princess': return '👸';
            case 'santa':    return '🎅';
        }
    }
});