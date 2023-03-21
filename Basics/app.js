// <div id="parent">
//     <div id="child">
//         <h1> I'm a h1 tag </h1>
//         <h2> I'm a h2 tag</h2>
//     </div>
// </div> 

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        [ React.createElement(          // You can pass array as a third input inorder to create siblings
            "h1",
            {},
            "I'm a h1 tag"
          ),
          React.createElement(
            "h2",
            {},
            "I'm a h2 tag"
          )
        ]
    )
)

// const heading = React.createElement(
//     "h1",
//     {id: "heading"}, 
//     "Hello World from React"
// );

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);