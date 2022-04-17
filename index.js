// output code
let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

// dog-content
let dogContent = document.createElement('div')
let dogImage = document.createElement('img')
dogContent.setAttribute('class', 'dog-content')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src','./assets/rizzo.jpg')
dogContent.append(dogImage)
content.append(dogContent)

// dog-etails
let dogDetails = document.createElement('div')
let description = document.createElement('h3')
let paragraph = document.createElement('p')
let feedingTimes = document.createElement('h3')
let ul = document.createElement('ul')
let list1 = document.createElement('li')
let list2 = document.createElement('li')
let list3 = document.createElement('li')

dogDetails.setAttribute('class','dog-details')
// description
description.append('Description:')
dogDetails.append(description)
// paragraph
paragraph.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
dogDetails.append(paragraph)
// feeding time
feedingTimes.append('Feeding Times:')
dogDetails.append(feedingTimes)
// ul
dogDetails.append(ul)
ul.append(list1)
ul.append(list2)
ul.append(list3)
list1.append('9:00 am')
list2.append('12:00 pm')
list3.append('5:pm')

// append to code output
content.append(dogDetails)
dogContent.append(dogDetails)
