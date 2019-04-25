<template>
  <div class="v-spinner-dim" :class="inline?'inline':'cover'" v-show="loading">
    <div class="v-spinner">
      <div class="v-beat v-beat-odd" v-bind:style="spinnerStyle">
      </div><div class="v-beat v-beat-even" v-bind:style="spinnerStyle">
      </div><div class="v-beat v-beat-odd" v-bind:style="spinnerStyle">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#5dc596'
    },
    size: {
      type: String,
      default: '15px'
    },
    margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      default: '100%'
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      spinnerStyle: {
        backgroundColor: this.color,
        height: this.size,
        width: this.size,
        margin: this.margin,
        borderRadius: this.radius
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.v-spinner-dim.cover{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffffa6;
  
  .v-spinner{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -28px;
  }
}

.v-spinner-dim.inline{
  background: #ffffffa6;
}
.v-spinner .v-beat{
  -webkit-animation: v-beatStretchDelay 0.7s infinite linear;
  animation: v-beatStretchDelay 0.7s infinite linear;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  display: inline-block;         
}

.v-spinner .v-beat-odd{
  animation-delay: 0s;
}
.v-spinner .v-beat-even{
  animation-delay: 0.35s;
}

@-webkit-keyframes v-beatStretchDelay{
  50% {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
    -webkit-opacity: 0.2;             
    opacity: 0.2;
  }
  100%  {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;             
    opacity: 1;
  }
}

@keyframes v-beatStretchDelay{
  50% {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
    -webkit-opacity: 0.2;             
    opacity: 0.2;
  }
  100%    {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-opacity: 1;             
    opacity: 1;
  }
}
</style>
