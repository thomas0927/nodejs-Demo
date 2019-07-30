const handleBlogRouter=(req,res)=>{
    const method=req.method
    const url=req.url
    const path=url.split('?')[0]

    //get blog list
    if(method==='GET'&& path==='/api/blog/list'){
        return {
            msg:'This is get blog list'
        }
    }
    //get blog detail
    if(method==='GET'&& path==='/api/blog/detail'){
        return {
            msg:'This is get blog detail'
        }
    }
    //create a blog
    if(method==='POST'&& path==='/api/blog/new'){
        return {
            msg:'This is create a blog'
        }
    }
    //update a blog
    if(method==='POST'&& path==='/api/blog/update'){
        return {
            msg:'This is update a blog'
        }
    }
    //delete a blog
    if(method==='POST'&& path==='/api/blog/del'){
        return {
            msg:'This is delete a blog'
        }
    }
}

module.exports=handleBlogRouter