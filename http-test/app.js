const http=require('http')
const querystring=require('querystring')

const server=http.createServer((req,res)=>{
    console.log('method:',req.method)
    const method=req.method
    const url=req.url
    console.log(url)
    const path=url.split('?')[1]
    const query=querystring.parse(url.split('?')[1])
    console.log(query)
    res.setHeader('Content-type','application/json')
    
    const resData={
        method,
        url,
        path,
        query
    }
    if(req.method==='POST'){
        let postData=''
        req.on('data',chunk=>{
            postData+=chunk.toString()
        })
        req.on('end',()=>{
            resData.postData=postData
            res.end(
                JSON.stringify(resData)
            )
        })
    } else if(req.method==='GET'){      
        res.end(JSON.stringify(resData));
    }
})

server.listen(8000)
console.log('OK')