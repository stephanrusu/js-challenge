<template>
  <div class="column">
    <div class="box">
      <h4>Data editor</h4>
    </div>

    <div class="box" v-if="fileData.length === 0">
      <file-upload />
    </div>

    <div class="box" v-else>
      <file-display />
    </div>
  </div>
</template>

<script>
import FileUpload from "./dataEditor/FileUpload";
import FileDisplay from "./dataEditor/FileDisplay";

export default {
  name: "DataEditor",
  components: {
    FileUpload,
    FileDisplay
  },
  computed: {
    fileData() {
      return this.$store.getters.fileData;
    }
  }
};
</script>
