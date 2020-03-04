import Layout from "../../components/MyLayout";
import axios from "axios";

const Post = props => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?[pb]>/g, "")}</p>
        {props.show.image ? <img src={props.show.image.medium} /> : null}
    </Layout>
);

Post.getInitialProps = async function(context) {
    console.log("context", context);
    const { id } = context.query;
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.data;

    console.log(`Fetched show: ${show.name}`);

    return { show };
};

export default Post;
