/*
    Job Helper
*/

export function formatReportData(data) {
  // data write
  const header = [
    "Notification No",
    "Task Code",
    "Job type",
    "Job Status",
    "Task long text",
    "Part of object",
    "Mains details",
    "Planned end date",
    "Functional loc desc",
    "Meter reading",
    "Assigned to"
  ];
  let csvData = [header];

  for (let i = 0; data && i < data.length; i++) {
    csvData.push([
      data[i].notification_no,
      data[i].task_code,
      data[i].job_type,
      data[i].job_status,
      data[i].task_long_text,
      data[i].part_of_object,
      data[i].mains_details,
      data[i].planned_end_date,
      data[i].functional_loc_desc,
      data[i].meter_reading,
      data[i].assigned_to,
    ]);
  }

  return csvData;
}

export function getJobStatuses() {
  return [
    'All',
    'New',
    'In Progress',
    'On Hold',
    'Off Hold',
    'Archived',
    'Completed'
  ]
}

export function getLoations(str) {

  if (!str) {
    return "";
  }

  let value = str && str.split(',');
  if (value.length > 1) {
    let arr = value.slice(1, value.length - 1);

    if (arr.length > 3) {
      return arr.slice(0, 3).join(",") + " ...";
    }
    return arr.join(",");

  } else {
    return value[0];
  }

}

export function getCategory(data) {
  let categories = {};
  data && data.forEach((obj) => {
    const category = obj && obj.category !== undefined? obj.category: null;
    
    if(category !== null && !categories[category]){
      categories[category] = [];
    }
    category !== null && categories[category].push(obj);
  });
  return categories;
}

export function getCategoryNames(){
  return [
    "Job Details",
    "Meter Details",
    "Activities Performed",
    "General"
  ]
}