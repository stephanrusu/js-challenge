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
            v-for="(entryValue, index) in Object.values(fileEntry)"
            :key="`entry-${index}`"
          >
            {{ entryValue }}
          </td>
          <td>
            <div class="buttons are-small are-right-aligned">
              <button
                class="button is-info is-light"
                @click="setEntryActive(fileEntry)"
              >
                Edit
              </button>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td v-for="(header, index) in fileHeaders" :key="`header-${index}`">
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
    <file-entry-form v-if="isActive" />
  </div>
</template>

<script>
import ListPagination from "../ListPagination";
import FileEntryForm from "./FileEntryForm";

export default {
  name: "FileDisplay",
  components: {
    ListPagination,
    FileEntryForm
  },
  data() {
    return {
      current: 1,
      perPage: 20
    };
  },
  computed: {
    fileData() {
      return this.$store.getters.paginateFile(this.perPage, this.current);
    },
    fileHeaders() {
      return this.$store.getters.fileHeaders;
    },
    total() {
      return this.$store.getters.fileData.length;
    },
    isActive() {
      return Object.keys(this.$store.getters.activeEntryData).length > 0;
    }
  },
  methods: {
    setEntryActive(entry) {
      // prevent scroll when the form modal is opened
      document.documentElement.style.overflowY = "hidden";

      this.$store.dispatch("setActiveEntry", entry);
    }
  }
};
</script>
