<template>
  <div class="file-actions">
    <div>
      {{ fileName }}
    </div>
    <div class="buttons">
      <button class="button is-info is-light" @click="exportData">
        Export
      </button>
      <button class="button is-danger is-light" @click="exportData">
        Clear
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FileActions",
  computed: {
    fileName() {
      return this.$store.getters.fileName;
    }
  },
  methods: {
    clearData() {
      this.$store.dispatch("clearFile");
    },
    exportData() {
      this.$store.dispatch("exportFile");
    }
  }
};
</script>
