<template>
    <div class="filters-list">
        <div 
            v-for="item in value" 
            :key="item.label" 
            :class="[ 'filters-item', { 'is-active': item.isActive } ]" 
            @click="item.isActive = !item.isActive"
        >
            {{ item.label }}
            <span>
                <i class="icon-checkmark" />
                <i class="icon-checkmark" />
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Array,
            required: true
        }
    }
}
</script>
