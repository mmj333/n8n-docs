(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1526:function(e,t,o){"use strict";o.r(t);var n=o(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"google-sheets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#google-sheets"}},[e._v("#")]),e._v(" Google Sheets")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.google.com/sheets",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Sheets"),n("OutboundLink")],1),e._v(" is a web-based spreadsheet program that is part of Google's office software  suite within its Google Drive service.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Spreadsheet")]),e._v(" "),n("ul",[n("li",[e._v("Create a spreadsheet")])])]),e._v(" "),n("details",{staticClass:"custom-block details"},[n("summary",[e._v("Sheet")]),e._v(" "),n("ul",[n("li",[e._v("Append data to a sheet")]),e._v(" "),n("li",[e._v("Clear data from a sheet")]),e._v(" "),n("li",[e._v("Delete columns and rows from a sheet")]),e._v(" "),n("li",[e._v("Look up a specific column value and return the matching row")]),e._v(" "),n("li",[e._v("Read data from a sheet")]),e._v(" "),n("li",[e._v("Update rows in a sheet")])])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to append, lookup, update, and read data from Google Sheets. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/694",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow uses the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Google Sheets")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(796),alt:"A workflow with the Google Sheets node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The Start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-set-node"}},[e._v("#")]),e._v(" 2. Set node")]),e._v(" "),n("p",[e._v("This example workflow uses the Set node to generate data that we want to add to Google Sheets. You can also use other nodes, for example, the "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/HTTPRequest/"}},[e._v("HTTP Request")]),e._v(" node, to get the data you want to add to the Google Sheets.")],1),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter the name for a house in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Rent")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter the rent of the house along with the currency in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field. For example, "),n("code",[e._v("$1000")]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("City")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter the name of the city in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("ID")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Paste the following expression: "),n("code",[e._v("{{Math.floor(Math.random()*1000)}}")]),e._v(". This expression will generate a three-digit random number.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the Set node has created data that will be passed to the next nodes in the workflow. Also, the output shows a random three-digit number as the ID, created by the expression.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(797),alt:"Using the Set node to set data to be inserted in the Google Sheets node"}})]),e._v(" "),n("h3",{attrs:{id:"_3-google-sheets-node-append"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-google-sheets-node-append"}},[e._v("#")]),e._v(" 3. Google Sheets node (Append)")]),e._v(" "),n("h4",{attrs:{id:"creating-a-google-sheets-spreadsheet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-google-sheets-spreadsheet"}},[e._v("#")]),e._v(" Creating a Google Sheets spreadsheet")]),e._v(" "),n("ol",[n("li",[e._v("Create a new "),n("a",{attrs:{href:"https://sheet.new",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Sheets"),n("OutboundLink")],1),e._v(" spreadsheet.")]),e._v(" "),n("li",[e._v("In your spreadsheet, enter "),n("code",[e._v("ID")]),e._v(", "),n("code",[e._v("Name")]),e._v(", "),n("code",[e._v("Rent")]),e._v(", and "),n("code",[e._v("City")]),e._v(" in the cells A1, B1, C1, and D1, respectively.")]),e._v(" "),n("li",[e._v("Copy the string of characters located between "),n("code",[e._v("/d/")]),e._v(" and "),n("code",[e._v("/edit")]),e._v(" in your spreadsheet URL. This string is the Sheet ID, which we will use in the Google Sheets node.")])]),e._v(" "),n("h4",{attrs:{id:"configure-the-google-sheets-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-google-sheets-node"}},[e._v("#")]),e._v(" Configure the Google Sheets node")]),e._v(" "),n("p",[e._v("This Google Sheets node will add the data from the Set node in a new row to the Google Sheets that we will specify using the Sheet ID.")]),e._v(" "),n("ol",[n("li",[e._v("Select 'OAuth2' from the "),n("em",[n("strong",[e._v("Authentication")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("First of all, you'll have to enter credentials for the Google Sheets node. You can find out how to enter credentials for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Google/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Append' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Paste the Sheet ID you copied in the previous step, in the "),n("em",[n("strong",[e._v("Sheet ID")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("In the "),n("em",[n("strong",[e._v("Range")])]),e._v(" field, enter the range of columns to append the data to your spreadsheet. Make sure that your range includes enough columns for all the data in the Set node. For this workflow, enter "),n("code",[e._v("A:D")]),e._v(" in the "),n("em",[n("strong",[e._v("Range")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" button and select 'Value Input Mode' from the dropdown list.")]),e._v(" "),n("li",[e._v("Select 'User Entered' from the "),n("em",[n("strong",[e._v("Value Input Mode")])]),e._v(" dropdown list. Refer to the "),n("a",{attrs:{href:"#how-to-enter-values-with-a-proper-format"}},[e._v("FAQs")]),e._v(" for more information on why we used this option.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will observe that the node adds the data from the Set node to the Google Sheets. You will also notice that the values get added in the format they are set.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(798),alt:"Using the Google Sheets node to insert data into a Google Sheets spreadsheet"}})]),e._v(" "),n("h3",{attrs:{id:"_4-google-sheets1-node-lookup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-google-sheets1-node-lookup"}},[e._v("#")]),e._v(" 4. Google Sheets1 node (Lookup)")]),e._v(" "),n("p",[e._v("This node will return the entries from the Google Sheets that have "),n("code",[e._v("Berlin")]),e._v(" as the City. Feel free to change the city name to something else but make sure you have at least one record with the city name you look for in your Google Sheets spreadsheet.")]),e._v(" "),n("ol",[n("li",[e._v("Select 'OAuth2' from the "),n("em",[n("strong",[e._v("Authentication")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Select the credentials that you entered in the previous Google Sheets node.")]),e._v(" "),n("li",[e._v("Select 'Lookup' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("In the "),n("em",[n("strong",[e._v("Sheet ID")])]),e._v(" field, enter the same string used in the previous Google Sheets node.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("City")]),e._v(" in the "),n("em",[n("strong",[e._v("Lookup Column")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Berlin")]),e._v(" in the "),n("em",[n("strong",[e._v("Lookup Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" button and select 'Return All Matches' from the dropdown list.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Return All Matches")])]),e._v(" to true. This option returns all the entries that contain "),n("code",[e._v("Berlin")]),e._v(" as the City. Refer to the "),n("a",{attrs:{href:"#how-to-return-all-the-values-with-the-lookup-operation"}},[e._v("FAQs")]),e._v(" for more information.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" button and select 'Value Render Mode' from the dropdown list. This option determines how the values should render in the output. The 'Unformatted Value' option returns the data without formatting it. Refer to the "),n("a",{attrs:{href:"#what-are-the-various-formats-to-read-the-data-from-the-google-sheets"}},[e._v("FAQs")]),e._v(" for more information on why we used this option.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node returns all the entries that contain Berlin as the City. The output is unformatted. This output is passed on to the next nodes in the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(799),alt:"Using the Google Sheets node to lookup for data in the Google Sheets spreadsheet"}})]),e._v(" "),n("div",{pre:!0},[n("h3",{pre:!0,attrs:{id:"_5-set1-node"}},[n("a",{pre:!0,attrs:{class:"header-anchor",href:"#_5-set1-node"}},[e._v("#")]),e._v(" 5. Set1 node")]),e._v(" "),n("p",[e._v("We will use expressions to get the data from the previous node and increase the rent by $100 for the houses in Berlin.")]),e._v(" "),n("ol",[n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("Name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Google Sheets1 > Output Data > JSON > Name. You can also add the following expression: "),n("code",[e._v('{{$node["Google Sheets1"].json["Name"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("City")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Google Sheets1 > Output Data > JSON > City. You can also add the following expression: "),n("code",[e._v('{{$node["Google Sheets1"].json["City"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Paste the following expression: "),n("code",[e._v('{{$node["Google Sheets1"].json["Rent"]+100}}')]),e._v(". This expression will increase the rent by $100.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("ID")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Google Sheets1 > Output Data > JSON > ID. You can also add the following expression: "),n("code",[e._v('{{$node["Google Sheets1"].json["ID"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node uses an expression to get the data from the previous node and increases the rent of the houses by $100. This new data will be passed to the next nodes in the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(800),alt:"Using the Set node to increase the rent"}})]),e._v(" "),n("h3",{attrs:{id:"_6-google-sheets2-node-update"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-google-sheets2-node-update"}},[e._v("#")]),e._v(" 6. Google Sheets2 node (Update)")]),e._v(" "),n("p",[e._v("This node will update the rent for the houses in Berlin with the new rent set in the previous node.")]),e._v(" "),n("ol",[n("li",[e._v("Select 'OAuth2' in the "),n("em",[n("strong",[e._v("Authentication")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select the credentials that you entered in the previous Google Sheets node.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("In the "),n("em",[n("strong",[e._v("Sheet ID")])]),e._v(" field, enter the same string used in the previous Google Sheets node.")]),e._v(" "),n("li",[e._v("In the "),n("em",[n("strong",[e._v("Range")])]),e._v(" field, enter the same range used in the previous Google Sheets node.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("ID")]),e._v(" in the "),n("em",[n("strong",[e._v("Key")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" button and select 'Value Input Mode' from the dropdown list.")]),e._v(" "),n("li",[e._v("Select 'User Entered' from the "),n("em",[n("strong",[e._v("Value Input Mode")])]),e._v(" dropdown list. Refer to the "),n("a",{attrs:{href:"#how-to-enter-values-with-a-proper-format"}},[e._v("FAQs")]),e._v(" for more information on why we used this option.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that this node updates the rent values of the houses in Berlin based on the ID in the Google Sheets. You will also see that the updated values are in the correct format.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(801),alt:"Using the Google Sheets node to update the data to the Google Sheets spreadsheet"}})]),e._v(" "),n("h3",{attrs:{id:"_7-google-sheets3-node-read"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-google-sheets3-node-read"}},[e._v("#")]),e._v(" 7. Google Sheets3 node (Read)")]),e._v(" "),n("p",[e._v("This node will read the data from Google Sheets.")]),e._v(" "),n("ol",[n("li",[e._v("Select 'OAuth2' in the "),n("em",[n("strong",[e._v("Authentication")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Select the credentials that you entered in the previous Google Sheets node.")]),e._v(" "),n("li",[e._v("Select 'Read' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("In the "),n("em",[n("strong",[e._v("Sheet ID")])]),e._v(" field, enter the same string used in the previous Google Sheets node.")]),e._v(" "),n("li",[e._v("In the "),n("em",[n("strong",[e._v("Range")])]),e._v(" field, enter the same range used in the previous Google Sheets node.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" button and select 'Value Render Mode' from the dropdown list.")]),e._v(" "),n("li",[e._v("Select 'Formatted Value' from the "),n("em",[n("strong",[e._v("Value Render Mode")])]),e._v(" dropdown list. Refer to the "),n("a",{attrs:{href:"#what-are-the-various-formats-to-read-the-data-from-the-google-sheets"}},[e._v("FAQs")]),e._v(" for more information on why we used this option.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the workflow.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that this node returns all the values from the Google Sheets in the appropriate format.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(802),alt:"Using the Google Sheets node to read data from the Google Sheets spreadsheet"}})]),e._v(" "),n("h2",{attrs:{id:"faqs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),n("h3",{attrs:{id:"what-are-the-various-formats-to-read-the-data-from-the-google-sheets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#what-are-the-various-formats-to-read-the-data-from-the-google-sheets"}},[e._v("#")]),e._v(" What are the various formats to read the data from the Google Sheets?")]),e._v(" "),n("p",[e._v("There are three different formats to read the data from the Google Sheets.")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Unformatted Value:")]),e._v(" In this mode, the node calculates the values, but doesn't format them. For example, if cell A1 is 1.23, and cell A2 is =A1, and the format of these cells is currency, then values returned will be of the format number. For cell A1 and A2, the values returned will be 1.23.")]),e._v(" "),n("li",[n("strong",[e._v("Formula:")]),e._v(" In this mode, the node will return the formula. The node does not calculate the values. For example,  if cell A1 is 1.23, and cell A2 is =A1, and the format of these cells is currency, then the value returned will be of the format number. The value returned for cell A2 will be =A1.")]),e._v(" "),n("li",[n("strong",[e._v("Formatted Value:")]),e._v(" In this mode, the node calculates the values and returns the values with the cells' format. For example, if cell A1 is 1.23, and cell A2 is =A1, and the format of these cells is currency, then the values returned will be $1.23.")])]),e._v(" "),n("p",[e._v("To change the format, click on "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" and select 'Value Render Mode' from the dropdown list. Select the appropriate option you want your output to be returned to from the "),n("em",[n("strong",[e._v("Value Render Mode")])]),e._v(" dropdown list.")]),e._v(" "),n("h3",{attrs:{id:"how-to-enter-values-in-the-correct-format"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-enter-values-in-the-correct-format"}},[e._v("#")]),e._v(" How to enter values in the correct format?")]),e._v(" "),n("p",[e._v("There are two different formats you can use to add/update data in Google Sheets.")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Raw:")]),e._v(" This is the default format. In this format, the values are stored as-is and not parsed. For example, the node stores the text 2020-10-01 as a string in the Google Sheets.")]),e._v(" "),n("li",[n("strong",[e._v("User Entered:")]),e._v(" In this format, the node parse the values. It follows the rules that are applied when entering text into the cell via the Google Sheet UI. For example, the node stores the text 2020-10-01 as a date in the Google Sheets.")])]),e._v(" "),n("p",[e._v("To change the format, click on "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" and select 'Value Input Mode' from the dropdown list. Select the appropriate option you want your data to be stored in, from the "),n("em",[n("strong",[e._v("Value Input Mode")])]),e._v(" dropdown list.")]),e._v(" "),n("h3",{attrs:{id:"how-to-append-an-array-in-the-google-sheets"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-append-an-array-in-the-google-sheets"}},[e._v("#")]),e._v(" How to append an array in the Google Sheets?")]),e._v(" "),n("p",[e._v("To insert the data in Google Sheets, you have to first convert the data in a valid JSON (key, value) format. You can use the "),n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Function/"}},[e._v("Function node")]),e._v(" to convert the array into JSON format.")],1),e._v(" "),n("h3",{attrs:{id:"how-to-return-all-the-values-with-the-lookup-operation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-return-all-the-values-with-the-lookup-operation"}},[e._v("#")]),e._v(" How to return all the values with the Lookup operation?")]),e._v(" "),n("p",[e._v("By default, the Lookup operation returns only the first value that it matches. To return all the values that match, click on "),n("em",[n("strong",[e._v("Add Option")])]),e._v(" and select 'Return All Matches'. Toggle "),n("em",[n("strong",[e._v("Return All Matches")])]),e._v(" to true.")]),e._v(" "),n("h2",{attrs:{id:"further-reading"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://n8n.io/blog/creating-triggers-for-n8n-workflows-using-polling/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating triggers for n8n workflows using polling ⏲"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/migrating-community-metrics-to-orbit-using-n8n-b293372e8daf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Migrating Community Metrics to Orbit using n8n 📈"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/n8n-io/supercharging-your-conference-registration-process-with-n8n-2831cdff37f9",target:"_blank",rel:"noopener noreferrer"}},[e._v("Supercharging your conference registration process with n8n 🎫"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports},796:function(e,t,o){e.exports=o.p+"assets/img/workflow.2c5d01f5.png"},797:function(e,t,o){e.exports=o.p+"assets/img/Set_node.2c08d68f.png"},798:function(e,t,o){e.exports=o.p+"assets/img/GoogleSheets_node.a90dfa57.png"},799:function(e,t,o){e.exports=o.p+"assets/img/GoogleSheets1_node.3002b460.png"},800:function(e,t,o){e.exports=o.p+"assets/img/Set1_node.519b37c1.png"},801:function(e,t,o){e.exports=o.p+"assets/img/GoogleSheets2_node.53d81ca2.png"},802:function(e,t,o){e.exports=o.p+"assets/img/GoogleSheets3_node.35d14413.png"}}]);