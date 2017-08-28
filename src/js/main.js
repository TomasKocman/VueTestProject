import Vue from 'vue'
const component = require('./component');

// App1
new Vue({
	el: '#app',
    components: {
	    'light-bulb': component.lightBulb
    }
});

// App2
Vue.component('sound-icon', {
	template: "<span>{{ soundEmojis[level] }}</span>",
	props: {
		level: [Number]
	},
	data() {
		return {
			soundEmojis: ['🔊', '🔔', '📳', '🚨' ]
		}
	}
});

new Vue({
	el: '#app2',
	data: {
		soundLevel: 0
	}
});

// App3
let line = 0;

var bus = new Vue();

Vue.component('blabber', {
	template: "<p>{{ dialogue[currentLine] }}</p>",
	props: {
		iceBreaker: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			currentLine: this.iceBreaker ? 0 : -1,
			dialogue: [
				'hello',
				'how are you?',
				'fine thanks',
				"let's go drink!",
				'alright, where?',
				"to hello's bar",
				'hello?'
			]
		}
	},
	mounted() {
		if (this.iceBreaker)
			bus.$emit('line', 0);
	},
	created() {
		bus.$on('line', line => {
			// Is not the line I just sent.
			if (line !== this.currentLine)
				setTimeout(() => {
					this.currentLine = (line + 1) % this.dialogue.length;
					bus.$emit('line', this.currentLine)
				}, 2000);
		})
	},
});

new Vue({
	el: '#app3',
});