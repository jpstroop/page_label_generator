import Jasmine from 'jasmine'

var jasmine = new Jasmine()

jasmine.configureDefaultReporter({
    timer: new jasmine.jasmine.Timer(),
    showColors: true,
});

jasmine.loadConfigFile('spec/support/jasmine.json')

jasmine.execute()
