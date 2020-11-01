var Excel = require('exceljs');
fs = require('fs');
const _ = require('lodash');

let myCollection = [];
var workbook = new Excel.Workbook();

workbook.xlsx.readFile(__dirname + '/elb90Sr.xlsx')
.then(wb => {
  var worksheet = wb.getWorksheet(1);
  worksheet.unprotect();
  let rowCount = worksheet.rowCount;
  for (let row = 2; row < rowCount +1 ; row++) {
    //sizeOne
    let sizeOne = [];
    if (!!worksheet.getCell('A' + row).value) {
      sizeOne.push(worksheet.getCell('A' + row).value);
    }
    if (!!worksheet.getCell('B' + row).value) {
      sizeOne.push(worksheet.getCell('B' + row).value);
    }
    if (!!worksheet.getCell('G' + row).value) {
      sizeOne.push(worksheet.getCell('G' + row).value + ' mm');
    }
    if (!!worksheet.getCell('F' + row).value) {
      sizeOne.push(worksheet.getCell('F' + row).value + ' in');
    }
    //scheduleOne
    let scheduleOne = [];
    if (!!worksheet.getCell('C' + row).value) {
      scheduleOne.push(worksheet.getCell('C' + row).value);
    }
    if (!!worksheet.getCell('D' + row).value) {
      scheduleOne.push(worksheet.getCell('D' + row).value);
    }
    if (!!worksheet.getCell('E' + row).value) {
      scheduleOne.push(worksheet.getCell('E' + row).value);
    }
    if (!!worksheet.getCell('I' + row).value) {
      scheduleOne.push(worksheet.getCell('I' + row).value + ' mm');
    }
    if (!!worksheet.getCell('H' + row).value) {
      scheduleOne.push(worksheet.getCell('H' + row).value + ' in');
    }
    let myObject = {
      'sizeOne': sizeOne,
      'scheduleOne': scheduleOne,
      'dimensions': {
        'outsideDiameter': {
          'symbol': 'D',
          'imperial': {
              'value': {
                'solid':worksheet.getCell('F' + row).value,
              },
              'uom': 'in'
          },
          'metric' : {
              'value': {
                'solid':worksheet.getCell('G' + row).value,
              },
              'uom': 'mm'
          }
        },
        'wallThickness': {
          'symbol': 't',
          'imperial': {
              'value': {
                'solid':worksheet.getCell('H' + row).value,
              },
              'uom': 'in'
          },
          'metric': {
            'value': {
              'solid':worksheet.getCell('I' + row).value,
            },
            'uom': 'mm'
          }
        },
        'centerToEnd': {
          'symbol': 'A',
          'imperial': {
              'value': {
                'solid':worksheet.getCell('J' + row).value,
              },
              'uom': 'in'
          },
          'metric': {
            'value': {
              'solid':worksheet.getCell('K' + row).value,
            },
            'uom': 'mm'
          }
      },
        'weight': {
          'display': 'weight',
          'imperial': {
            'value': {
              'solid':worksheet.getCell('L' + row).value,
            },
            'uom': 'lb'  
          },
          'metric': {
            'value': {
              'solid':worksheet.getCell('M' + row).value,
            },
            'uom': 'kg'
          }
        }
      }
    }
    myCollection.push(myObject);
  }
  fs.writeFile(__dirname + '/elb90Sr.json', JSON.stringify(myCollection), function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  });
});