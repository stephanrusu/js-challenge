<template>
  <div class="file has-name is-primary is-light is-right is-fullwidth">
    <label class="file-label">
      <input
        class="file-input"
        type="file"
        name="resume"
        @change="handleChangeFile"
        accept="text/csv"
      />
      <span class="file-cta">
        <span class="file-label">
          Browse
        </span>
      </span>
      <span class="file-name">
        <span v-if="files && files.length">
          {{ files[0].name }}
        </span>
        <span v-else>
          Select a CSV file
        </span>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "FileUpload",
  data() {
    return {
      files: [],
      error: ""
    };
  },
  methods: {
    handleChangeFile(event) {
      this.files = event.target.files || event.dataTransfer.files;

      if (!this.files.length) {
        return;
      }
      this.parseFile(this.files[0]);
    },

    parseFile(file) {
      this.$store.dispatch("updateFileName", file.name);

      const reader = new FileReader();
      reader.onload = e => this.$store.dispatch("processFile", e.target.result);
      reader.readAsText(file);
    }
  }
};
</script>
