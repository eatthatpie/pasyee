<template>
    <div :class="[ 'button-generate', { 'is-busy': isBusy } ]">
        <a 
            v-text="label"
            class="btn"
            @click="onClick" 
        />
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: 'button'
        }
    },
    data () {
        return {
            isBusy: false
        }
    },
    methods: {
        onClick: _.throttle(function () {
            this.isBusy = true 

            this.$emit('click')

            setTimeout (() => {
                this.isBusy = false
            }, 601)
        }, 601)
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixins/_mixins.scss';
@import './../assets/scss/variables/_variables.scss';

.button-generate {
    padding: 33px 0 13px;
    text-align: center;

    > a {
        cursor: pointer;
    }

    @media (min-width: $screen-laptop) {
        > a {
            padding: 8px 30px;
            font-size: 1.5rem;
        }
    }
}
</style>