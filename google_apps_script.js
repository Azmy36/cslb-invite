function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById('1l326BdSbxs_1Nm0Zc16kJJ_ZMKjkZvAJLbyLjHyINvA').getSheetByName("Sheet1");

    const rowData = [
      data.fullName,
      data.email,
      data.phone,
      data.organization,
      data.jobTitle,
      data.country,
      data.attendingMode,
      new Date()
    ];

    sheet.appendRow(rowData);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeader("Access-Control-Allow-Origin", "*");
  }
} 