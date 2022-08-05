
//CRUD

    const miniTwitter = {
        users:[
            {
                username: 'cleisonsilva',
            }
              ],

        posts:[
                {
                    id: 1,
                    owner: 'cleisonsilva',
                    content: 'Meu primeiro tweet'
                }
              ]

        
    }

    //Create
    function createPost(dados){
        miniTwitter.posts.push({
            id: miniTwitter.posts.length + 1,
            owner: dados.owner,
            content: dados.content
        })
    }

    createPost({ owner: 'cleisonsilva', content:'segundo tweet'})
    createPost({ owner: 'cleisonsilva', content:'terceiro'})

    //READ
    function getPost(){
        return miniTwitter.posts;
    }

    //UPDATE
    function uptadePost(id, newContent){
    const uptadedPost = getPost().find((post) => {
            return post.id === id;
        })
        console.log(uptadedPost)
        uptadedPost.content = newContent
    }
    console.log(getPost())
    uptadePost(1,'Mudei')
    console.log(getPost())
    

    //DELETE

    function deletePost(id){
        const deletedList = getPost().filter((currentPost) => {
            return currentPost.id !== id;
        })
        miniTwitter.posts = console.log(deletedList) 
        
    }

    deletePost(3)
    console.log(getPost())
    
    