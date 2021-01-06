// this is the background code...

// listen for our browerAction to be clicked

chrome.browserAction.onClicked.addListener(function (tab) {
  // for the current tab, inject the "inject.js" file & execute it
  var newURL = 'index.html';
  chrome.tabs.create({ url: newURL });
});

function petland({
  fname,
  mi,
  lname,
  social,
  dob,
  income,
  zip,
  staddre,
  apt,
  city,
  state,
  email,
  phone,
}) {
  var newURL = 'https://d.comenity.net/petland/public/apply/ApplyIntro.xhtml';
  chrome.tabs.create({ url: newURL });

  chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab) {
    // make sure the status is 'complete' and it's the right tab
    console.log('petland');
    console.log(changeInfo.status);
    if (changeInfo.status == 'complete') {
      console.log('petland');
      chrome.tabs.executeScript(null, {
        code: `
        console.log('petland')
          document.querySelector('#inpName_firstName_input').value = '${fname}'
          document.querySelector('#inpName_middleInitial_input').value = '${mi}'
          document.querySelector('#inpName_lastName_input').value = '${lname}'
          document.querySelector('#inpssn').value = '${social}'
          document.querySelector('#inpDob_field').currentValue = '${dob}'
          document.querySelector('#annualIncome_input').value = '${income}'
          document.querySelector('#inpAddress_usZipInstantCredit_input').value ='${zip}'
          document.querySelector('#inpAddress_streetAddress_input').value ='${staddre}'
          document.querySelector('#inpAddress_line2_input').value = '${apt}'
          document.querySelector('#inpAddress_usCity_input').value = '${city}'
          document.querySelector('#inpAddress_usStateLabel_input').value = '${state}'
          document.querySelector('#email_input').value = '${email}'
          document.querySelector('#confirmEmail_input').value = '${email}'
          document.querySelector('#inpMobilePhone_fullPhoneNumber').value ='3054141122'`,
      });
    }
  });
}

function lending({
  fname,
  mi,
  lname,
  social,
  dob,
  income,
  zip,
  staddre,
  apt,
  city,
  state,
  email,
  phone,
}) {
  var newURL =
    'https://portal.lendingusa.com/applications/dtm/application?iframe=2&pid=18693&aid=19618';
  chrome.tabs.create({ url: newURL });

  chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab) {
    // make sure the status is 'complete' and it's the right tab

    if (changeInfo.status == 'complete') {
      chrome.tabs.executeScript(null, {
        code: `
        console.log('lending')
        document.querySelector('input[name="applicant.firstName"]').value = '${fname}'
        document.querySelector('input[name="applicant.lastName"]').value = '${lname}'
        document.querySelector('input[name="applicant.addresses.address"]').value ='${staddre}'
        document.querySelector('input[name="applicant.addresses.city"]').value = '${city}'
        document.querySelector('input[name="applicant.addresses.state"]').value = '${state}'
        document.querySelector('input[name="applicant.addresses.zipcode"]').value = '${zip}'
        document.querySelector('input[name="applicant.dateOfBirth"]').value ='${dob}'
        document.querySelector('input[name="applicant.ssn"]').value =  '${social}'
        document.querySelector('input[name="applicant.email"]').value = '${email}'
        document.querySelector('input[name="applicant.phoneNumbers.Number"]').value = '${phone}'`,
      });
    }
  });
}
