import axios from 'axios';

// API url saved as constant variable for easy access
const url = 'api/posts/';

class PostService {
    // Get Post

    // Static method so we can call it later from Vue without having to instantiate
    static getPosts() {
        return new Promise ((resolve,reject) => {
            // Get data by url and then map it
            axios.get(url).then((res) => {
                const data = res.data;
                // If successful resolve promise by mapping the post and grabbing the date
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            })
            // If unsuccessful handle reject by returning error
            .catch((err)=> {
                reject(err);
            })
        });
    }

    // Create Post
    // Takes a text argument which becomes the actual post content
    // createdAt datestamp will be generated automatically by the API
    static createPost(text) {
        return axios.post(url, {
            text: text
        });
    }

    // Delete Post
    // Takes ID argument and runs delete request on url+ID variables combined
    // What this means is url+id becomes api/posts/id aka delete by ID 
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }

    // Delete All
    static deleteAllPosts() {
        return axios.delete(url);
    }

    // Update Post
    static updatePost(id, text) {
        return axios.patch(`${url}${id}`, {
            text
        });
    }
}

export default PostService;