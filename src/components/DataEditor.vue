<template>
  <div class="column">
    <div class="box">
      <h4>Data editor</h4>
    </div>

    <div class="box">
      <file-upload />
    </div>

    <div class="box">
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
  }
};
</script>
