/**
 * ====================================================================
 *  CrazyCoding Quiz — Google Apps Script for Online Spreadsheet
 *  Created for: Mr. Ankush (Assistant Professor, CSE)
 *  Purpose: Automatically saves quiz results in Google Sheets in real-time
 * ====================================================================
 *
 * KAISE USE KAREIN (3 Aasan Steps):
 * 1. Apne Google Drive / sheets.new par jaakar ek Blank Sheet banayein.
 * 2. Menu mein 'Extensions' -> 'Apps Script' par click karein.
 * 3. Wahan ye poora code paste kar dein aur 'Deploy' -> 'New deployment' -> 'Web app' choose karein:
 *    - Execute as: Me (Aapka email)
 *    - Who has access: Anyone (Taaki students ka browser data bhej sake)
 * 4. Jo Web App URL milega, usse copy karke 'script.js' mein ya Spreadsheet page par paste kar dein!
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  // 30 seconds lock to prevent simultaneous writes collision
  lock.tryLock(30000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Pehli baar: agar sheet empty hai to Header Row automatically banayega
    if (sheet.getLastRow() === 0) {
      var headers = [
        "Date & Time",
        "Quiz ID (QUID)",
        "Student Name",
        "Section",
        "WhatsApp (+91)",
        "Subject",
        "Score",
        "Total",
        "Percentage",
        "Status",
        "Time Taken"
      ];
      sheet.appendRow(headers);

      // Header row styling (Professional CrazyCoding Blue)
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#1e88e5");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      headerRange.setFontSize(11);
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // Data parse karein
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    var timestamp = data.timestamp || Utilities.formatDate(new Date(), "Asia/Kolkata", "dd/MM/yyyy, hh:mm:ss a");
    var quid = data.quid || "N/A";
    var name = data.name || "Student";
    var section = data.section || "I";
    var phone = data.phone || "";
    var subject = data.subject || "HTML & CSS";
    var correct = data.correct !== undefined ? data.correct : 0;
    var total = data.total !== undefined ? data.total : 100;
    var percent = (data.percent !== undefined ? data.percent : Math.round((correct / total) * 100)) + "%";
    var status = data.status || (correct >= 40 ? "PASSED" : "FAILED");
    var timeTaken = data.timeTaken || "N/A";

    // Row append karein
    sheet.appendRow([
      timestamp,
      quid,
      name,
      section,
      phone,
      subject,
      correct,
      total,
      percent,
      status,
      timeTaken
    ]);

    var lastRow = sheet.getLastRow();

    // Alignment and Status Color Formatting
    sheet.getRange(lastRow, 1, 1, 11).setVerticalAlignment("middle");
    sheet.getRange(lastRow, 4).setHorizontalAlignment("center"); // Section
    sheet.getRange(lastRow, 7, 1, 3).setHorizontalAlignment("center"); // Score, Total, %
    sheet.getRange(lastRow, 10).setHorizontalAlignment("center"); // Status
    sheet.getRange(lastRow, 11).setHorizontalAlignment("center"); // Time

    var statusCell = sheet.getRange(lastRow, 10);
    if (status === "PASSED" || status.indexOf("PASS") !== -1) {
      statusCell.setBackground("#dcfce7"); // Light Green
      statusCell.setFontColor("#15803d"); // Dark Green
      statusCell.setFontWeight("bold");
    } else {
      statusCell.setBackground("#fee2e2"); // Light Red
      statusCell.setFontColor("#b91c1c"); // Dark Red
      statusCell.setFontWeight("bold");
    }

    return ContentService.createTextOutput(JSON.stringify({
      result: "success",
      row: lastRow,
      message: "Student quiz result successfully recorded!"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      result: "error",
      error: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

// GET method: Pura live data JSON format mein return karta hai!
function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sheet.getLastRow();
    if (lastRow <= 1) {
      return ContentService.createTextOutput(JSON.stringify([])).setMimeType(ContentService.MimeType.JSON);
    }
    var rows = sheet.getRange(2, 1, lastRow - 1, 11).getValues();
    var results = [];
    for (var i = 0; i < rows.length; i++) {
      results.push({
        timestamp: rows[i][0],
        quid: rows[i][1],
        name: rows[i][2],
        section: rows[i][3],
        phone: rows[i][4],
        subject: rows[i][5],
        score: rows[i][6],
        total: rows[i][7],
        percent: rows[i][8],
        status: rows[i][9],
        timeTaken: rows[i][10]
      });
    }
    return ContentService.createTextOutput(JSON.stringify(results, null, 2)).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      error: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
