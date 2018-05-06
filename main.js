var keys={
    0: ['q','w','e','r','t','y','u','i','o','p'],
    1: ['a','s','d','f','g','h','j','k','l'],
    2: ['z','x','c','v','b','n','m'],
    length: 3
}

var hash={
    q: 'wx.qq.com',
    w: 'weibo.com',
    b: 'bilibili.com',
    x: 'xiedaimala.com',
    g: 'github.com',
}

var defaultImgSrc='//i.loli.net/2017/11/10/5a05afbc5e183.png'

var hashInLocalStorage=JSON.parse(localStorage.getItem('webSiteList')||'null')
if(hashInLocalStorage){
    hash=hashInLocalStorage
}

var index =0
while(index<keys.length){
    var div = document.createElement('div')
    div.className = 'row'
    main.appendChild(div)
    for(var i=0;i<keys[index].length;i++){
        var kbd = document.createElement('kbd')
        kbd.className= 'key'

        var span = document.createElement('span')
        span.textContent=keys[index][i]

        var button = document.createElement('button')
        button.id=keys[index][i]
        button.textContent='编辑'
        button.onclick=function(param){
            var key=param.target.id
            hash[key]=prompt('请输入域名')
            if(hash[key]){
                localStorage.setItem('webSiteList',JSON.stringify(hash))
                var img2 = param.target.previousSibling
                img2.src='http://'+hash[key]+'/favicon.ico'
            }
        }


        var img = document.createElement('img')
        img.className = 'icon'
        img.onerror=function(param){
            param.target.src=defaultImgSrc
        }
        var domainA=hash[keys[index][i]]
        if(domainA){
            img.src='http://'+domainA+'/favicon.ico'
        }else{
            img.src= defaultImgSrc
        }

        div.appendChild(kbd)
        kbd.appendChild(img)
        kbd.appendChild(button)
        kbd.appendChild(span)
    }
    index++
}


document.onkeypress = function(param){
    var key = param['key']
    key=key.toLowerCase()
    console.log(key)
    var domain = hash[key]
    if(domain){
        window.open('http://'+domain,'_blank')
    }
}