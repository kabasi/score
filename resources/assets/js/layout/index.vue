<template>
    <div>
        <transition name="custom-classes-transition" leave-active-class="animated fadeOut" enter-active-class="animated fadeIn">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

  export default {
    data: () => ({
      
    }),
    methods: {
      
    },

    computed: {
      loading(){
        return this.$store.state.loading;
      }

    },

    created () {

    }
  }
</script>


      