<template>

<div id="main">

<div>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Admin Dashboard</title>
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <!-- partial:index.partial.html -->
      <h1>
        <span class="blue"></span>ADMIN DASHBOARD
        <span class="blue"></span>
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
          <tr v-for="(batch,index) in batchList" :key="index">
            <td>{{ batch.batchid }}</td>
            <td>{{ batch.admin }}</td>
            <td>{{ batch.farmInspector }}</td>
            <td>{{ batch.harvester }}</td>
            <td>{{ batch.exporter }}</td>
            <td>{{ batch.importer }}</td>
            <td>{{ batch.processor }}</td>
            <td>
              <a href="../timeline/index.html">&#128065;</a>
            </td>
          </tr>
        </tbody>
      </table>
        <center>
          <button class="button" @click="openNav()">
            <span>Create Batch</span>
          </button>
          <button class="button" @click="openNav_user()">
            <span>Create User</span>
          </button>
        </center>
    </body>
  </html>
</div>

<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>


  <form action="/action_page.php">
    <center>
    <h1>BATCH DETAILS</h1>
    <br>
    <h2>
    <label for="batchid"><font size="6">Farmer Resgistration Number</font></label><br><br>
    <input type="text" id="batchid" name="batchid" style="height:30px; width:200px"><br><br><br><br>
    <label for="lname"><font size="6">Farmer Name</font></label><br><br>
    <input type="text" id="lname" name="lname" style="height:30px; width:200px"><br><br><br><br>

    <label for="lname"><font size="6">Farmer Address</font></label><br><br>
    <input type="text" id="lname" name="lname" style="height:30px; width:200px"><br><br><br><br>

    <label for="lname"><font size="6">Exporter Name</font></label><br><br>
    <input type="text" id="lname" name="lname" style="height:30px; width:200px"><br><br><br><br>

    <label for="lname"><font size="6">Importer Name</font></label><br><br>
    <input type="text" id="lname" name="lname" style="height:30px; width:200px"><br><br><br><br>

    <br>
    <input type="submit" id="search" value="Create Batch"  style="height:50px; width:200px" /></h2>

   </center>
  </form>


</div>


<div id="mySidenav_user" class="sidenav_user">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav_user">&times;</a>


  <form action="/action_page.php">
    <center>
    <h1>USER DETAILS</h1>
    <br>
    <h2>
    <label for="batchid"><font size="6">User Wallet Address</font></label><br><br>
    <input type="text" id="batchid" name="batchid" style="height:30px; width:200px"><br><br><br><br>
    <label for="lname"><font size="6">User Name</font></label><br><br>
    <input type="text" id="lname" name="lname" style="height:30px; width:200px"><br><br><br><br>

    <label for="lname"><font size="6">User Contact</font></label><br><br>
    <input type="text" id="lname" name="lname" style="height:30px; width:200px"><br><br><br><br>

    <label for="lname"><font size="6">User Role</font></label><br><br>
    <input type="text" id="lname" name="lname" style="height:30px; width:200px"><br><br><br><br>

    <br>
    <input type="submit" id="search" value="Create User"  style="height:50px; width:200px" /></h2>

   </center>
  </form>


</div>

</div>

</template>

<script>
export default {
  props: ["batchList"],
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

.button {
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 300px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

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
  -webkit-box-shadow: 0 6px 6px -6px #0e1119;
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