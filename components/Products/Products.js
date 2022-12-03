import productsCss from './Products.module.css'

const Products = ({ posts }) => {

    console.log(posts);

    return (
        <div>
            Products
        </div>
    );
}

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = await res.json();

    return {
        props: {
            posts: "next Js Is Awesome"
        }
    }
}

export default Products;