<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
var ProgressBar = require('progressbar.js');
import moment from 'moment';

export default {
    name: 'CircleAnimation',
    data() {
      return {
        currentDate: ""
      }
    },
    methods: {
        createCircle() {
            let count = 0;
            this.currentDate = moment();
            let date = moment(window.localStorage.getItem('date'));
            let newDate = date.add(Number(window.localStorage.getItem('day')), "days");
            const difference = newDate.diff(this.currentDate, 'days') + 1;

            if(window) {
              count = Number(window.localStorage.getItem('day'));
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
                if (value <= 0) {
                circle.setText("Change");
                } else {
                circle.setText(value);
                }

            }
            });
            bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
            bar.text.style.fontSize = '2rem';
            
            if ((difference / count) > 0) {
              bar.animate(difference / count); // Number from 0.0 to 1.0
            } else {
              bar.animate(0);
            }  
        }
    },
    mounted() {
        this.createCircle();
    }
}
</script>

<style>
#container {
  margin: 20px auto;
  width: 200px;
  height: 200px;
  position: relative;
}
</style>