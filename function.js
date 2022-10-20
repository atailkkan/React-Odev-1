import axios from 'axios';

const getData = async (num) => {
    const { data: user } = await axios(`https://jsonplaceholder.typicode.com/users/${num}`);
    const { data: post } = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${num}`);

    console.log({ user, post });
}

export default getData;