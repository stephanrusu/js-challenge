<template>
  <div>
    <list-pagination
      v-if="total > perPage"
      :total="total"
      :current.sync="current"
      order="is-centered"
      :per-page="perPage"
    />
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th
            v-for="(header, index) in Object.keys(fileData[0])"
            :key="`header-${index}`"
          >
            {{ header }}
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(fileEntry, index) in fileData" :key="`fileEntry-${index}`">
          <td
            v-for="(entry, index) in Object.values(fileEntry)"
            :key="`entry-${index}`"
          >
            {{ entry }}
          </td>
          <td>
            <div class="buttons are-small are-right-aligned">
              <button class="button is-info is-light">
                Edit
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td
            v-for="(header, index) in Object.keys(fileData[0])"
            :key="`header-${index}`"
          >
            {{ header }}
          </td>
          <td></td>
        </tr>
      </tfoot>
    </table>
    <list-pagination
      v-if="total > perPage"
      :total="total"
      :current.sync="current"
      order="is-centered"
      :per-page="perPage"
    />
  </div>
</template>

<script>
import ListPagination from "../ListPagination";
export default {
  name: "FileDisplay",
  components: {
    ListPagination
  },
  data() {
    return {
      current: 1,
      perPage: 50
    };
  },
  computed: {
    fileData() {
      return this.$store.getters.paginateFile(this.perPage, this.current);
    },
    total() {
      return this.$store.getters.fileData.length;
    }
  }
};
</script>
