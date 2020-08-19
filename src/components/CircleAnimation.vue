<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
var ProgressBar = require('progressbar.js');

export default {
    name: 'CircleAnimation',
    methods: {
        createCircle() {
            var count = 0;
            if(window) {
              count = window.localStorage.getItem('day');
            }
            
            var bar = new ProgressBar.Circle('#container', {
            color: '#aaa',
            // This has to be the same size as the maximum width to
            // prevent clipping
            strokeWidth: 4,
            trailWidth: 1,
            easing: 'easeInOut',
            duration: 1400,
            text: {
                autoStyleContainer: false
            },
            from: { color: '#aaa', width: 1 },
            to: { color: '#333', width: 4 },
            // Set default step function for all animate calls
            step: function(state, circle) {
                circle.path.setAttribute('stroke', state.color);
                circle.path.setAttribute('stroke-width', state.width);

                var value = Math.round(circle.value() * count);
                if (value === 0) {
                circle.setText('');
                } else {
                circle.setText(value);
                }

            }
            });
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '2rem';

            bar.animate(1.0);  // Number from 0.0 to 1.0
        }
    },
    mounted() {
        this.createCircle();
    }
}
</script>

<style>
#container {
  margin: 20px;
  width: 200px;
  height: 200px;
  position: relative;
}
</style>