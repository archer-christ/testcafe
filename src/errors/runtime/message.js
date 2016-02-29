export default {
    browserDisconnected:                'The {userAgent} browser disconnected. This problem may appear when a browser hangs or is closed, or due to network issues.',
    cantRunAgainstDisconnectedBrowsers: 'The following browsers disconnected: {userAgents}. Tests will not be run.',
    cantEstablishBrowserConnection:     'Unable to establish one or more of the specified browser connections. This can be caused by network issues or remote device failure.',
    cantFindBrowser:                    'Unable to find the browser. "{browser}" is not a browser alias or path to an executable file.',
    browserNotSet:                      'No browser selected to test against.',
    testSourcesNotSet:                  'No test file specified.',
    noTestsToRun:                       'No tests to run. Either the test files contain no tests or the filter function is too restrictive.',
    cantFindReporterForAlias:           'The provided "{name}" reporter does not exist. Check that you have specified the report format correctly.',
    optionValueIsNotValidRegExp:        'The "{optionName}" option value is not a valid regular expression.',
    portNumberIsNotInteger:             'A port number should be a valid integer.',
    portsOptionRequiresTwoNumbers:      'The "--ports" option requires two numbers to be specified.',
    portIsNotFree:                      'The specified {portNum} port is already in use by another program.',
    invalidHostname:                    'The specified "{hostname}" hostname cannot be resolved to the current machine.',
    cantFindSpecifiedTestSource:        'Cannot find a test source file at "{path}".',
    cannotPrepareTestsDueToError:       'Cannot prepare tests due to an error.\n\n {errMessage}',
    fixtureNameIsNotAString:            'The fixture name is expected to be a string, but it was "{type}".',
    fixturePageIsNotAString:            'The page URL is expected to be a string, but it was "{type}".',
    testNameIsNotAString:               'The test name is expected to be a string, but it was "{type}".',
    testBodyIsNotAFunction:             'The test body is expected to be a function, but it was "{type}".'
};