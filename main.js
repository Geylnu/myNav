    let request = new XMLHttpRequest()
    request.open('GET','http://route.showapi.com/1287-1') //初始化配置  请求方式忽略大小写  默认异步
    request.onreadystatechange = (e)=>{
        console.log(request.responseText) //响应内容
        console.log(request.readyState)
    }
    request.send() //发送


let keys={
    0: ['q','w','e','r','t','y','u','i','o','p'],
    1: ['a','s','d','f','g','h','j','k','l'],
    2: ['z','x','c','v','b','n','m'],
    length: 3
}

let hash={
    a: 'www.acfun.cn',
    q: 'wx.qq.com',
    w: 'weibo.com',
    b: 'bilibili.com',
    x: 'xiedaimala.com',
    g: 'github.com',
    p: 'www.pixiv.net',
    z: 'zhihu.com',
    y: 'youku.com',
    d: 'www.douyu.com',
    i: 'iqiyi.com',
}

let defaultImgSrc='//i.loli.net/2017/11/10/5a05afbc5e183.png'

let hashInLocalStorage=JSON.parse(localStorage.getItem('webSiteList')||'null')
if(hashInLocalStorage){
    hash=hashInLocalStorage
}

let index =0
while(index<keys.length){
    let div = document.createElement('div')
    div.className = 'row'
    main.appendChild(div)
    for(let i=0;i<keys[index].length;i++){
        let kbd = document.createElement('kbd')
        kbd.className= 'key'

        let span = document.createElement('span')
        span.textContent=keys[index][i]

        let button = document.createElement('button')
        button.id=keys[index][i]
        button.textContent='编辑'
        button.onclick=function(param){
            let key=param.target.id
            hash[key]=prompt('请输入域名')
            if(hash[key]){
                localStorage.setItem('webSiteList',JSON.stringify(hash))
                let img2 = param.target.previousSibling
                img2.src='http://'+hash[key]+'/favicon.ico'
            }
        }


        let img = document.createElement('img')
        img.className = 'icon'
        img.onerror=function(param){
            param.target.src=defaultImgSrc
        }
        let domainA=hash[keys[index][i]]
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
    let key = param['key']
    key=key.toLowerCase()
    console.log(key)
    let domain = hash[key]
    if(domain){
        window.open('http://'+domain,'_blank')
    }
}