<template>
  <div class="parent">
    <Ag-Grid-Vue style="width: 70%; height: 300px" class="ag-theme-alpine md-elevation-15" :columnDefs="columnDefs"
      :defaultColDef="defaultColDef" :rowData="rowData"></Ag-Grid-Vue>
  </div>
</template>

<script>
import axios from 'axios'
import { AgGridVue } from 'ag-grid-vue'
export default {
  data() {
    return {
      columnDefs: null,
      rowData: null,
      defaultColDef: {
        resizable: true,
        width: 150,
        lockPinned: true,
        cellStyle: { 'text-align': "left" }
      },
    };
  },
  components: {
    AgGridVue
  },
  created() {
    axios.get('https://api.publicapis.org/entries').then(response => {
      console.log(response.data.entries[0])
      if (response.data.entries) {
        this.rowData = response.data.entries;
      }
    })
  },
  beforeMount() {
    this.columnDefs = [
      { field: "API", pinned: 'left' }, /*Making the column Sticky with 'pinned' property*/
      { field: "Auth" },
      { field: "Category" },
      { field: "Cors" },
      { field: "Description" },
      { field: "HTTPS" },
      { field: "Link" }
    ];
  },

}
</script>
<style scoped>
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px
}

@import "~ag-grid-community/styles/ag-grid.css";
@import "~ag-grid-community/styles/ag-theme-alpine.css";
</style>
