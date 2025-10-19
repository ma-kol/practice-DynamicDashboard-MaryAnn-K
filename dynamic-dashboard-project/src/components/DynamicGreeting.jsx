/* 

Dynamic Greeting
○ Create a variable with a user’s name and initialize it
○ Render a dynamic greeting for the user inside an <h1> element.

*/

const DynamicGreeting = ({ name }) => {
    return <h1 className="greeting">Hello, {name}!</h1>;
};

export default DynamicGreeting;