import { useRouter } from 'next/router';
import BlogDetail from '../../Components/Views/BlogDetail';
import { DataA } from '../../Components/Views/Home/Blogs';

const BlogPost = () => {
    const router = useRouter();
    const { id } = router.query;

    const post = DataA.flatMap((item) => item.data).find((item) => item.heading);
    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div>
            <BlogDetail post={post} /> {/* Pass the post data as a prop to BlogDetail */}
        </div>
    );
};

export default BlogPost;
