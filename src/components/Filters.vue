<template>
  <div :class="['filters', { 'is-open': isOpen }]">
    <div class="filters-labels">
      <a class="filters-label" @click="isCharactersOpen = true">
        <span>characters...</span>
      </a>
      <a class="filters-label is-inactive" @click="isConstraintsOpen = true">
        <span>constraints...</span>
      </a>
    </div>
    <div
      class="filters-placeholder"
      v-click-outside="onClickOutsidePlaceholder"
    >
      <div :class="['filters-leaf', { 'is-open': isCharactersOpen }]">
        <filters-list v-model="charactersFilters" />
      </div>
      <div class="filters-leaf" :class="{ 'is-open': isConstraintsOpen }">
        <filters-list :is-active="false" v-model="constraintsFilters" />
      </div>
    </div>
  </div>
</template>

<script>
import FiltersList from "./filters/FiltersList.vue";
import {
  LettersSeeder,
  CapitalLettersSeeder,
  NumbersSeeder,
  LightSpecialsSeeder,
  HeavySpecialsSeeder,
} from "./../plugins/generator/Seeders";
import vClickOutside from "click-outside-vue3";

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    FiltersList,
  },
  data() {
    return {
      isCharactersOpen: false,
      isConstraintsOpen: false,
      charactersFilters: [
        {
          label: "capital letters",
          isActive: true,
          seeder: CapitalLettersSeeder,
        },
        { label: "numbers", isActive: true, seeder: NumbersSeeder },
        {
          label: "light specials",
          isActive: true,
          seeder: LightSpecialsSeeder,
        },
        {
          label: "heavy specials",
          isActive: false,
          seeder: HeavySpecialsSeeder,
        },
      ],
      constraintsFilters: [
        { label: "easy to say", isActive: false },
        { label: "easy to read", isActive: false },
        { label: "easy to remember", isActive: true },
      ],
    };
  },
  computed: {
    isOpen() {
      return this.isCharactersOpen || this.isConstraintsOpen;
    },
  },
  methods: {
    close() {
      this.isCharactersOpen = false;
      this.isConstraintsOpen = false;
    },
    onClickOutsidePlaceholder(e) {
      if (
        !e.target.classList.contains("filters-label") &&
        !e.target.parentNode.classList.contains("filters-label")
      ) {
        this.close();
      }
    },
    getCharactersFilters() {
      return [LettersSeeder].concat(
        this.charactersFilters
          .filter((v) => v.isActive === true)
          .map((v) => {
            return v.seeder;
          })
      );
    },
  },
  watch: {
    isCharactersOpen() {
      if (this.isCharactersOpen) {
        this.isConstraintsOpen = false;
      }
    },
    isConstraintsOpen() {
      if (this.isConstraintsOpen) {
        this.isCharactersOpen = false;
      }
    },
  },
};
</script>

<style lang="scss">
.filters {
  @include transition(0.3s);
  position: relative;
  height: 33px;

  &:before {
    @include transition(0.2s);
    @include position-fixed-cover();
    content: "";
    background-color: $color-primary-dark;
    visibility: hidden;
    opacity: 0;
  }

  &-placeholder {
    @include position-cover();
    pointer-events: none;
    text-align: center;
    overflow: hidden;
    top: auto;
    height: 196px;
  }

  &-leaf {
    @include transition(0.2s);
    @include position-cover();
    background-color: $color-primary-light;
    pointer-events: all;
    top: 100%;
    height: 100%;
    padding: 20px;
    opacity: 0;
    z-index: 2;
  }

  &-labels {
    display: flex;
    justify-content: space-between;
  }

  &-label {
    color: $color-default;
    background-color: $color-primary-light;
    text-align: center;
    display: block;
    cursor: pointer;
    width: calc(50% - 5px);
    padding: 5px 0 0;
    height: 33px;

    &.is-inactive {
      opacity: 0.5;
    }

    span {
      @include transition();
      @include transition-delay(0.1s);
      opacity: 1;
    }
  }

  &-item {
    @include transition();
    color: $color-default;
    font-weight: $font-weight-bold;
    padding: 3px 0;
    opacity: 0;
    cursor: pointer;
    backface-visibility: hidden;

    span {
      position: relative;
      display: inline-block;
      width: 30px;
    }

    [class^="icon-"] {
      @include transition();
      position: absolute;
      top: -19px;
      left: 5px;

      &:nth-child(2) {
        @include transition-delay(0.2s);
        @include transform(scale(0));
        opacity: 0;
      }
    }
  }

  &-list {
    @include position-center-vertically(-19px);
    position: absolute;
    left: 0;
    right: 0;

    &.is-inactive {
      .filters-item {
        text-decoration: line-through;
      }
    }
  }

  &.is-open {
    &:before {
      @include transition(0.3s);
      visibility: visible;
      opacity: 0.5;
    }
  }

  &.is-open & {
    &-leaf {
      &.is-open {
        @include transition(0.3s);
        @include transform(translateY(calc(33px - 100%)));
        opacity: 1;
      }
    }

    &-label {
      span {
        opacity: 0;
      }
    }

    &-item {
      opacity: 0.3;

      &.is-active {
        opacity: 1;

        [class^="icon-"] {
          &:nth-child(1) {
            @include transform(scale(0));
            opacity: 0;
          }

          &:nth-child(2) {
            @include transform(scale(1));
            opacity: 1;
          }
        }
      }
    }
  }

  @media (min-width: $screen-laptop) {
    &-label {
      @include transition(0.1s);

      &:hover {
        background-color: $color-primary-hover;
      }
    }

    &.is-open & {
      &-item {
        &:hover:not(.is-active) {
          opacity: 0.6;
        }
      }
    }
  }
}
</style>
