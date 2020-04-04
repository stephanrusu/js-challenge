<template>
  <div class="column">
    <div class="box">
      <h4>Data editor</h4>
    </div>

    <div class="box" v-if="fileLength === 0">
      <file-upload />
    </div>

    <div class="box" v-else>
      <file-actions />
      <file-display />
    </div>
  </div>
</template>

<script>
import FileUpload from "./dataEditor/FileUpload";
import FileDisplay from "./dataEditor/FileDisplay";
import FileActions from "./dataEditor/FileActions";

export default {
  name: "DataEditor",
  components: {
    FileUpload,
    FileDisplay,
    FileActions
  },
  computed: {
    fileLength() {
      return this.$store.getters.fileData.length;
    }
  }
};
</script>
