import { useState } from "react"

// Create Main function
const NewBook = (props) => {

  // prepare all the useState hooks
  const [ title, setTitle ] = useState('')
  const [ author, setAuthor ] = useState('')
  const [ genre, setGenre ] = useState('')
  const [ description, setDescription ] = useState('')

  // set up handler for when form is submitted - note props.new - "new" must match whats passed in from main js file
  const handleSubmit = (event) => {
    event.preventDefault()
    props.new({title: title, author: author, genre: genre, description: description, isbn: Math.floor(1000000000000 + Math.random() * 900000000000)})
  };

  // Create form
  return (
    <div className="form">
      {/* call the handler when form is submitted */}
      <form onSubmit={handleSubmit}>
        <h2>Title:</h2>
        {/* use useState hooks to populate the values in the fields as they are entered */}
        <input 
        value = {title}
        onChange ={(e)=>setTitle(e.target.value)}
        />
        <h3>Author:</h3>
        <input 
        value = {author}
        onChange ={(e)=>setAuthor(e.target.value)}
        />
        <h4>Genre:</h4>
        <input 
        value = {genre}
        onChange ={(e)=>setGenre(e.target.value)}
        />
        <h4>Description:</h4>
        <textarea 
        value = {description}
        onChange ={(e)=>setDescription(e.target.value)}
        />
        <br />
        <button>Add Book</button>
      </form>
    </div>
  );
};

export default NewBook;