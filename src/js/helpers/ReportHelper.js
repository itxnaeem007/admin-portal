/*
    Report Helper
*/

import moment from "moment";

export function getDates(str) {
  if (str.toLowerCase() === "weekly") {
    return {
      end_date: moment().format("YYYY-MM-DD"),
      start_date: moment().subtract(6, 'days').format("YYYY-MM-DD")
    }
  } else if (str.toLowerCase() === "monthly") {
    return {
      end_date: moment().format("YYYY-MM-DD"),
      start_date: moment().subtract(1, 'month').add(1, 'day').format("YYYY-MM-DD")
    }
  } else if (str.toLowerCase() === "quarterly") {
    return getQuarterlyDates();
  } else if (str.toLowerCase() === "yearly") {
    return {
      end_date: moment().format("YYYY-MM-DD"),
      start_date: moment().subtract(1, 'year').add(1, 'day').format("YYYY-MM-DD")
    }
  }
}

export function getQuarterlyDates() {
  const year = moment().format("Y");
  const monthNumber = moment().format("M");
  if (monthNumber <= 3) {
    // Jan to March
    return {
      start_date: year + '-01-01',
      end_date: year + '-03-31'
    }
  } else if (monthNumber <= 6) {
    // Apr to Jun
    return {
      start_date: year + '-04-01',
      end_date: year + '-06-30'
    }
  } else if (monthNumber <= 9) {
    // Jul to Sept
    return {
      start_date: year + '-07-01',
      end_date: year + '-09-30'
    }
  } else {
    // Oct to Dec
    return {
      start_date: year + '-10-01',
      end_date: year + '-12-31'
    }
  }
}

export function formatReportData(reports, totals) {
  // data write
  const header = [
    "Notification number",
    "Job Type",
    "Contractor Name",
    "Completion Date",
    "WA Utilities Rate",
    "Contractor Rate"
  ];

  let csvData = [header];

  for (let i = 0; reports && i < reports.length; i++) {
    csvData.push([
      reports[i].notification_no,
      reports[i].job_type,
      reports[i].assigned_to,
      reports[i].task_completion_date,
      "$" + (reports[i].total_wa_utils?.toFixed(2) || 0),
      "$" + (reports[i].total_subby?.toFixed(2) || 0),
    ]);
  }

  // add empty row
  csvData.push(new Array(header.length).fill(" "));

  // add totals
  csvData.push([
    "Total WA Utilities",
    '$' + totals?.grand_total_wa_utils?.toFixed(2) || 0
  ]);

  csvData.push([
    "Total Contractor",
    '$' + totals?.grand_total_subby?.toFixed(2) || 0
  ]);

  csvData.push([
    "Grand Total",
    '$' + totals?.grand_total?.toFixed(2) || 0
  ]);

  return csvData;
}
