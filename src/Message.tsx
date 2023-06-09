function Message() {
    const name = "John";
    const age = 24;
    if (name) 
        return <h1>Hello {name}</h1>;
    return <h1>Hello {age}</h1>;

}

export default Message;
