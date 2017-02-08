$.getJSON('https://congress.api.sunlightfoundation.com/legislators?callback=?').then(function(serverRes){

var legislatorsContainer = document.querySelector('.legislators-container')
var legislatorsObj = serverRes.results

var bigHtmlStr = ''

  forEach(legislatorsObj, function(legislatorEl, index, theArray){

    var firstName = legislatorEl.first_name
    var lastName = legislatorEl.last_name
    var title = legislatorEl.title
    var party = legislatorEl.party
    var state = legislatorEl.state_name
    var email = legislatorEl.oc_email
    var website = legislatorEl.website
    var facebook = legislatorEl.facebook_id
    var twitter = legislatorEl.twitter_id
    var termEnd = legislatorEl.term_end

    var legislatorInfo =
    '<div class="col-md-4 legislators-info">'
    legislatorInfo += '<h3>' + firstName + ' ' + lastName + '</h3>'
    legislatorInfo += '<h4>' + title + ' -- ' + party + '-' + state + '</h4>'
    legislatorInfo += '<ul>'
    legislatorInfo += '<li>' + 'email: ' + email + '</li>'
    legislatorInfo += '<li>' + 'website: ' + website + '</li>'
    legislatorInfo += '<li>' + 'facebook: ' + facebook +'</li>'
    legislatorInfo += '<li>' + 'twitter: ' + twitter + '</li>'
    legislatorInfo += '</ul>'
    legislatorInfo += '<p>' + 'Term End' + termEnd + '</p>'
    legislatorInfo += '</div>'

    bigHtmlStr += legislatorInfo
  })
  legislatorsContainer.innerHTML = bigHtmlStr
})
