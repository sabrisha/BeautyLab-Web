function getNews(){
    var xhr = new XMLHttpRequest()
xhr.open(
  'GET',
  'https://beautylab.herokuapp.com/brands',
  true
)
xhr.send()

xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) {
    return
  }

  if (xhr.status == 200) {
    console.log('result', xhr.responseText)
  } else {
    console.log('err', xhr.responseText)
  }
}
}