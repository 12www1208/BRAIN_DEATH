const news = document.querySelector('.news .content')
console.log(news)
const verison = '5.131'
const token = '878607918786079187860791918495aba48878687860791e3c72d217e879d0de9ceeee6'
function test(result) {
  const data = result.response.items
  console.log(data)
  data.forEach((element,index) => {
    let img = ''
    if( element.attachments.length != 0 && element.attachments[0]['type'] == 'photo') {
      let mas  = element.attachments[0]['photo']['sizes']
      img = mas[mas.length -1]['url']
    }
    else if(element.attachments.length != 0 && element.attachments[0]['type'] == 'video') {
      img = `./assets/img/video_s.png`
    }
    const block = document.createElement('div')
    block.classList.add('flex', 'flex-col', 'items-center', 'space-y-4', 'w-full')
    block.innerHTML = `
      <h1 class="w-full text-white text-center mb-4 text-3xl">Новость ${index + 1}</h1>
      <p class="text-center text-white text-2xl">${element.text}</p>
      <img class="w-1/2 md:w-1/4" src="${img}"/>
      <hr/>
    `
    if(!element.text == '') {
     news.appendChild(block) 
    }
  });
}

$.ajax({
  url: 'https://api.vk.com/method/wall.get',
  data: {
    owner_id: '-215988014',
    domain: 'brain_death',
    count: 50,
    filter: 'all',
    access_token: token,
    v: verison
  },
  dataType: 'jsonp',
  success: test
})

