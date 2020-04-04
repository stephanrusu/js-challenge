<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <form @submit.prevent="updateEntryData">
          <div
            class="field"
            v-for="(entryKey, index) in Object.keys(activeEntry)"
            :key="index"
          >
            <label class="label" :for="`input-${entryKey}`">
              {{ entryKey }}
            </label>
            <div class="control">
              <input
                type="text"
                class="input"
                :name="entryKey"
                :id="`input-${entryKey}`"
                :value="activeEntry[entryKey]"
                @change="updateField"
              />
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button type="submit" class="button is-link is-light">
                Submit
              </button>
            </div>
            <div class="control">
              <button class="button is-light" @click="clear">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="clear"
    ></button>
  </div>
</template>

<script>
export default {
  name: "FileEntryForm",
  data() {
    return {
      entry: {}
    };
  },
  mounted() {
    // create a local clone from computed property
    // which will be used for local changes and submit
    this.entry = this.activeEntry;
  },
  computed: {
    activeEntry() {
      return this.$store.getters.activeEntryData;
    }
  },
  methods: {
    clear() {
      // revert scroll when the form modal is closed
      document.documentElement.style.overflowY = "auto";
      this.$store.dispatch("clearActiveEntry");
    },
    updateField(event) {
      let { name, value } = event.target;

      this.entry[name] = value;
    },
    updateEntryData() {
      this.$store.dispatch("updateEntryData", this.entry);
      this.clear();
    }
  }
};
</script>

<style></style>
