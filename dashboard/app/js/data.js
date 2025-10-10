// ZOHO.CREATOR.init()
// .then(function () {
//     var params = ZOHO.CREATOR.UTIL.getQueryParams();
//     var Child_ESN_Number = params["Child_ESN_Number"] || "";
//     var Status = params["Status"] || "";

//     var config = {
//         appName: "service-management",
//         reportName: "All_ESN",
//         criteria: '(Child_ESN_Number == "' + Child_ESN_Number + '")'
//     };

//     ZOHO.CREATOR.API.getAllRecords(config).then(function (response) {
//         var records = response.data;
//         var container = document.getElementById("dataContainer");
//         container.innerHTML = ""; // clear existing

//         records.forEach(record => {
//             // if(record.Status == Status){ // filter by status
//                 var card = document.createElement("div");
//             //     card.className = "card";
//                 card.style.background = "#d0e6f0";

//                 var label = document.createElement("div");
//                 label.className = "label";
//                 label.innerText = "Parking Number: " + record.APS_PS_Parking_Number; // replace with your field API name

//                 var count = document.createElement("div");
//                 count.className = "count";

//                 card.appendChild(label);
//                 card.appendChild(count);
//                 container.appendChild(card);
//             // }
//         });
//     })
//     .catch(function (error) {
//         console.error("Error fetching data:", error);
//     });
// })
// .catch(function (error) {
//     console.error("Error initializing Creator:", error);
// });