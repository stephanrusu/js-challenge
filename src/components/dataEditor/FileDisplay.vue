<template>
  <div>
    <table class="table is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Demo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Entry</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "FileDisplay",
  computed: {
    fileData() {
      return this.$store.getters.file;
    }
  }
};
</script>
