import moment from 'moment';
const humanizeString = require('humanize-string');
const outputFields = [
  'Assigned to',
  'Functional loc desc',
  'Notification no',
  'Task long text',
  'Task code',
  'Planned end date',
  'Part of object',
  'Mains details',
  'Meter reading',
  'Job type',
];
const prettyPrint = function (json) {
  var humanized = '';
  for (var key in json) {
    if (json.hasOwnProperty(key)) {
      let humanizeKey = humanizeString(key);
      if (outputFields.indexOf(humanizeKey) > -1) {
        if (humanizeKey == 'Planned end date') {
          let dateValue = json[key]
            ? moment(json[key]).format('DD/MM/YYYY')
            : '';
          humanized = humanized.concat(humanizeKey, ' -> ', dateValue, '\n');
        } else {
          humanized = humanized.concat(humanizeKey, ' -> ', json[key], '\n');
        }
      }
    }
  }
  return humanized;
};
export default prettyPrint;
