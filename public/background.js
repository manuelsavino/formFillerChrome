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
  altPhone,
}) {
  var newURL = 'https://d.comenity.net/petland/public/apply/ApplyIntro.xhtml';
  chrome.tabs.create({ url: newURL });

  chrome.tabs.onUpdated.addListener(function (tabID, changeInfo, tab) {
    // make sure the status is 'complete' and it's the right tab
    console.log('petland');
    console.log('tab', tab);
    console.log('tabId', tabID);
    if (
      changeInfo.status == 'complete' &&
      tab.url === 'https://d.comenity.net/petland/public/apply/ApplyIntro.xhtml'
    ) {
      chrome.tabs.executeScript(null, {
        code: `
        console.log('petland')
          document.querySelector('#inpName_firstName_input').value = '${fname}'
          document.querySelector('#inpName_middleInitial_input').value = '${mi}'
          document.querySelector('#inpName_lastName_input').value = '${lname}'
          document.querySelector('#inpssn').value = '${social}'
          document.querySelector('#inpDob_input').value = '${dob}'
          document.querySelector('#annualIncome_input').value = '${income}'
          document.querySelector('#inpAddress_usZipInstantCredit_input').value ='${zip}'
          document.querySelector('#inpAddress_streetAddress_input').value ='${staddre}'
          document.querySelector('#inpAddress_line2_input').value = '${apt}'
          document.querySelector('#inpAddress_usCity_input').value = '${city}'
          document.querySelector('#inpAddress_usStateLabel_input').value = '${state}'
          document.querySelector('#email_input').value = '${email}'
          document.querySelector('#confirmEmail_input').value = '${email}'
          document.querySelector('#inpMobilePhone_fullPhoneNumber').value =${phone},
          document.querySelector('#inpAltPhone_fullPhoneNumber').value =${altPhone}`,
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

    if (
      changeInfo.status == 'complete' &&
      tab.url ===
        'https://portal.lendingusa.com/applications/dtm/application?iframe=2&pid=18693&aid=19618'
    ) {
      chrome.tabs.executeScript(null, {
        code: `
        setTimeout(function(){
          const data = [
           {value: '${fname}', selector: document.querySelector('input[name="applicant.firstName"]')},
           {value: '${lname}', selector: document.querySelector('input[name="applicant.lastName"]')},
           {value: '${social}', selector: document.querySelector('input[name="applicant.ssn"]')},
           {value: '${dob}', selector: document.querySelector('input[name="applicant.dateOfBirth"]')},
           {value: '${income}', selector: document.querySelector('input[name="financials.stated.grossMonthlyIncome"]')},
           {value: '${zip}', selector: document.querySelector('input[name="applicant.addresses.zipcode"]')},
           {value: '${staddre} ${apt}', selector: document.querySelector('input[name="applicant.addresses.address"]')},
           {value: '${city}', selector: document.querySelector('input[name="applicant.addresses.city"]')},
           {value: '${email}', selector: document.querySelector('input[name="applicant.email"]')},
           {value: 'numberToPhone(${phone})', selector: document.querySelector('input[name="applicant.phoneNumbers.Number"]')},
           {value: '${state}', selector: document.querySelector('div.container-body > form > div > div:nth-child(2) > div.col-lg-8 > div:nth-child(2) > div > div:nth-child(7) > div:nth-child(1) > div.col-sm-7 > div > label > select')},

          ]

        function setNativeValue(element, value) {
          const { set: valueSetter } = Object.getOwnPropertyDescriptor(element, 'value') || {}
          const prototype = Object.getPrototypeOf(element)
          const { set: prototypeValueSetter } = Object.getOwnPropertyDescriptor(prototype, 'value') || {}
    
          if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
            prototypeValueSetter.call(element, value)
          } else if (valueSetter) {
            valueSetter.call(element, value)
          } else {
            throw new Error('The given element does not have a value setter')
          }
        }

        data.forEach(function(field){
          setNativeValue(field.selector, field.value)
          field.selector.dispatchEvent(new Event('input', { bubbles: true }))
        })
        
        /*setNativeValue(selectors[0], '${lname}')
        selectors[0].dispatchEvent(new Event('input', { bubbles: true }));
     
        setNativeValue(selectors[1], '${fname}')
        selectors[1].dispatchEvent(new Event('input', { bubbles: true }));*/

        },3000)

        function numberToPhone( number ) {
          if( number ) {
            return number.replace( /\D+/g, "" ).replace( /([0-9]{1,3})([0-9]{3})([0-9]{4}$)/gi, "($1)$2-$3" ); //mask numbers (xxx) xxx-xxxx
          } else {
            return "";
          }
        };
        
        `,
      });
    }
  });
}
