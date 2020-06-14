<template>
<html lang="en" class="background_1">
  <head>
    <meta charset="UTF-8" />
    <title>User Dashboard</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
    <div id="main">
      <!-- partial:index.partial.html -->
      <h1>
        <span class="blue">USER DASHBOARD</span>
        <span class="yellow">
          <br />
          <br />Batches Overview
        </span>
      </h1>

      <table class="container">
        <thead>
          <tr>
            <th>
              <h1>Batch ID</h1>
            </th>
            <th>
              <h1>Admin</h1>
            </th>
            <th>
              <h1>Farm-Inspector</h1>
            </th>
            <th>
              <h1>Harvester</h1>
            </th>
            <th>
              <h1>Exporter</h1>
            </th>
            <th>
              <h1>Importer</h1>
            </th>
            <th>
              <h1>Processor</h1>
            </th>
            <th>
              <h1>Timeline</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data,index) in dataList" :key="index">
            <td>{{ data.BatchId }}</td>
            <td>{{ data.CultivationStage }}</td>
            <td>{{ data.FarmInspectorStage }}</td>
            <td>{{ data.HarvesterStage }}</td>
            <td>{{ data.ExporterStage }}</td>
            <td>{{ data.ImporterStage}}</td>
            <td>{{ data.ProcessorStage }}</td>
            <td>
              <router-link
                :to="{ name: 'timeline', params: {id: data.BatchId }, props: {id: data.BatchId}}"
              >&#128065;</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
</template>

<script>
import BatchList from "../assets/Batchlist";
export default {
  data: function() {
    return {
      dataList: BatchList,
      clickedid: null
    };
  },

  methods: {
    openNav: function() {
      document.getElementById("mySidenav").style.width = "750px";
      document.getElementById("main").style.marginLeft = "750px";
    },

    closeNav: function() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    },

    openNav_user: function() {
      document.getElementById("mySidenav_user").style.width = "750px";
      document.getElementById("main").style.marginLeft = "750px";
    },
    closeNav_user: function() {
      document.getElementById("mySidenav_user").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    }
  }
};
</script>

<style scoped>
@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300, 400, 700);

body {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  line-height: 1.42em;
  color: #a7a1ae;
  background-color: #1f2739;
}

h1 {
  font-size: 3em;
  font-weight: 300;
  line-height: 1em;
  text-align: center;
  color: #4dc3fa;
}

h2 {
  font-size: 1em;
  font-weight: 300;
  text-align: center;
  display: block;
  line-height: 1em;
  padding-bottom: 2em;
  color: #fb667a;
}

h2 a {
  font-weight: 700;
  text-transform: uppercase;
  color: #fb667a;
  text-decoration: none;
}

.blue {
  color: #185875;
}
.yellow {
  color: #fff842;
}

.container th h1 {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #185875;
}

.container td {
  font-weight: normal;
  font-size: 1em;
  -webkit-box-shadow: 0 2px 2px -2px #0e1119;
  -moz-box-shadow: 0 2px 2px -2px #0e1119;
  box-shadow: 0 2px 2px -2px #0e1119;
}

.container {
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
}

.container td,
.container th {
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
}

/* Background-color of the odd rows */
.container tr:nth-child(odd) {
  background-color: #323c50;
}

/* Background-color of the even rows */
.container tr:nth-child(even) {
  background-color: #2c3446;
}

.container th {
  background-color: #1f2739;
}

.container td:first-child {
  color: #fb667a;
}

.container tr:hover {
  background-color: #464a52;
  -webkit-box-shadow: 0 6px 6px -6px #37497a;
  -moz-box-shadow: 0 6px 6px -6px #0e1119;
  box-shadow: 0 6px 6px -6px #0e1119;
}

.container td:hover {
  background-color: #fff842;
  color: #403e10;
  font-weight: bold;
  box-shadow: #7f7c21 -1px 1px, #7f7c21 -2px 2px, #7f7c21 -3px 3px,
    #7f7c21 -4px 4px, #7f7c21 -5px 5px, #7f7c21 -6px 6px;
  transform: translate3d(6px, -6px, 0);
  transition-delay: 0s;
  transition-duration: 0.4s;
  transition-property: all;
  transition-timing-function: line;
}

@media (max-width: 800px) {
  .container td:nth-child(4),
  .container th:nth-child(4) {
    display: none;
  }
}
</style>