import React, { Fragment,useContext,useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext,AuthContext } from '../../store/Context';

const  Create = () => {
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const {user} = useContext(AuthContext)
  const [name, setName] = useState(' ')
  const [category,setCategory] = useState(' ')
  const [price,setPrice] = useState(' ')
  const [image,setFile] = useState(null)
  const date = new Date()
  const handlSubmit=()=>{
    
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
      console.log('lllllllllllllllllllllllllllllll')
      ref.getDownloadURL().then((url)=>{
        console.log(url,'111');
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString(),
        })
        // history.push('/')
        history.push('/')
      })
    })
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form >
            <label htmlFor="fname">Name</label>
            <br />
            <input
            
              className="input"
              type="text"
              id="fname"
              value={name}
              name="Name"
              defaultValue="John"
              onChange={(e)=>setName(e.target.value)}
              required
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
            
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              onChange={(e)=>setCategory(e.target.value)}
              required
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input  className="input" type="number" id="fname" name="Price" onChange={(e)=>setPrice(e.target.value)} required />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={ image ? URL.createObjectURL(image) : "" }></img>
      
            <br />
            <input type="file" onChange={(e)=>{setFile(e.target.files[0])}} />
            <br />
            <button onClick={handlSubmit} className="uploadBtn">upload and Submit</button>
          
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
