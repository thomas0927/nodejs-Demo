const serverHandle=(req,res)=>{
    //set JSON
    res.setHeader('Content=type','application/json')
    const resData={
        name:'双越100',
        site:'imooc',
        env:process.inv.NODE_ENV
    }

    res.end(
        JSON.stringify(resData)
    )
}

module.exports=serverHandle