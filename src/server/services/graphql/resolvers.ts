interface User {
    avatar: string;
    username: string;
}

interface Post {
    id: number;
    text: string;
    user: User;
}

export default function resolvers(this: any) {
    const { db } = this;
    const { Post } = db.models;
    
    const resolvers = {
        RootQuery: {
            posts(root, args, context) {
                return Post.findAll({ order: [["createdAt", "DESC"]] });
            },
        },
        RootMutation: {
            async addPost(root, { post }, context) {
                return Post.create(post);
            },
        },
    };

    return resolvers;
}
