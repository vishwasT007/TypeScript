import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const response = axios.get(url);

response.then(data => {
    const result = data.data as Todo;

    const ID = result.id;
    const Title = result.title;
    const Completed = result.completed;

    console.log(`ID: ${ID}`);
    console.log(`Title: ${Title}`);
    console.log(`Completed: ${Completed}`);
})