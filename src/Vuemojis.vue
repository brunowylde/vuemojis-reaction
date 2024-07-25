<template>
  <div 
    id="reaction-component"
    @mouseleave="handleMouseLeave"
    @mouseenter="handleMouseEnter">
    <button @click="toggleReactions">
      <span v-if="reacao" style="padding-right: 4px">
        {{ reacao.icon }}
      </span>
      <span :style="{ color: reacao ? reacao.color : '' }">
        {{ reacao ? reacao.label : label_default }}
      </span>
    </button>
    <div 
      v-if="showReactions || keepReactionsVisible" 
      id="reactionsContainer"
      @mouseenter="handleMouseEnterReactions"
      @mouseleave="handleMouseLeaveReactions">
      <button 
        v-for="reaction in reactions" 
        :key="reaction.label" 
        @click="react(reaction)"
        id="reactionsButton">
        {{ reaction.icon }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showReactions: false,
      keepReactionsVisible: false,
      reacao: null,
      label_default: 'Like'
    };
  },
  props: {
    reactions: Array,
    label: String,
    default: String
  },
  methods: {
    toggleReactions() {
      this.showReactions = !this.showReactions
    },
    handleMouseEnter() {
      this.showReactions = true
      this.keepReactionsVisible = true
    },
    handleMouseLeave() {
      this.keepReactionsVisible = false
      setTimeout(() => {
        if (!this.keepReactionsVisible) {
          this.showReactions = false
        }
      }, 200)
    },
    handleMouseEnterReactions() {
      this.keepReactionsVisible = true
    },
    handleMouseLeaveReactions() {
      this.keepReactionsVisible = false
      setTimeout(() => {
        if (!this.keepReactionsVisible) {
          this.showReactions = false
        }
      }, 200);
    },
    react(reaction) {
      this.reacao = this.reacao === reaction ? null : reaction;
      this.showReactions = false;
      this.keepReactionsVisible = false;
      this.$emit('selected-reaction', this.reacao)
    }
  },
  beforeMount() {
    if (this.default) {
      let index = this.reactions.findIndex(i => i.label == this.default)
      this.react(this.reactions[index])
    }
    if (this.label) {
      this.label_default = this.label
    }
  }
};
</script>

<style>
#reaction-component { 
  position: relative; 
  display: inline-block; 
}
#reactionsContainer {
  gap: 0.5rem;
  display: flex;
  position: absolute;
  padding: 0.8rem 1rem;
  background-color: #282828;
  border-radius: 1rem;
  top: 1.5rem;
}
#reactionsButton {
  font-size: 1.4rem;
  transition: all 0.3s ease;
}
.cursor-pointer { cursor: pointer; }
.mr-1 { margin-right: 0.25rem; }
#reactionsButton:hover { transform: scale(1.25); }
#reactionButton { 
  background-color: transparent; 
  border: none; 
}
</style>