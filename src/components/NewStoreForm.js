import React, {useState} from "react"

function NewStoreForm() {
 const [formData, setFormData] = useState(
{
    id: '',
    name: '',
    image: '',
    season: '',
    episode: '',
});

function handleChange(e){
    setFormData({...formData, [e.target.id]: e.target.value})
}

function onSubmit(e){
    e.preventDefault();
    fetch('http://localhost:8085/stores', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
    }).then(r => r.json())
    .then(data => setFormData(data))
}

    return(
        <form onSubmit={onSubmit}>
            <input type="text" id="name" placeholder="Store Name" value={formData.name} onChange={handleChange}/>
            <input type="text" id="image" placeholder="Image URL"  value={formData.image} onChange={handleChange}/>
            <input type="number" id="season" placeholder="Season" step="1" value={formData.season} onChange={handleChange}/>
            <input type="number" id="episode" placeholder="Episode" step="1" value={formData.episode} onChange={handleChange}/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;