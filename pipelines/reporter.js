const report = require('multiple-cucumber-html-reporter');
var path = require('path');
var jsonPath = path.join(__dirname, '..', 'test_driver', 'reports');
 
report.generate({
    jsonDir: jsonPath,
    reportPath: '../test_driver/reports/',
    metadata:{
        device: 'emulator',
        platform: {
            name: 'MacOs',
            version: '10.15'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'My Project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
        ]
    }
});
