<template>
  <div class="file-actions">
    <div>
      {{ fileName }}
    </div>
    <div class="buttons">
      <button class="button is-info is-light" @click="exportData">
        Export
      </button>
      <button class="button is-danger is-light" @click="clearData">
        Clear
      </button>
    </div>
  </div>
</template>

<script>
import { saveAs } from "file-saver";

export default {
  name: "FileActions",
  computed: {
    fileName() {
      return this.$store.getters.fileName;
    },
    file() {
      return this.$store.getters.fileData;
    }
  },
  methods: {
    clearData() {
      this.$store.dispatch("clearFile");
    },
    exportData() {
      let jsonData = JSON.stringify(this.file);
      let blob = new Blob([jsonData], { type: "application/json" });

      let jsonFileName = this.fileName.split(".")[0];
      saveAs(blob, `${jsonFileName}.json`);
    }
  }
};
</script>
