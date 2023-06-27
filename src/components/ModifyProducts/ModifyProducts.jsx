import React from 'react'
import { addDoc, collection,getFirestore } from 'firebase/firestore';

const ModifyProducts = () => {

    const [categoty,setCategoty] = React.useState();
    const [description,setDescription] = React.useState();
    const [images,setImages] = React.useState();
    const [stock,setStock] = React.useState();
    const [title,setTitle] = React.useState();
    const [previous_price,setPrevious_price] = React.useState();
    const [price,setPrice] = React.useState();
    const [productData,setProductData] = React.useState();


    const handleCategoryChange=(e)=>{
        setCategoty(e.target.value);
    }
    const handleDescriptionChange=(e)=>{
        setDescription(e.target.value);
    }
    const handleImagesChange=(e)=>{
        setImages(e.target.value);
    }

    const handleStockChange=(e)=>{
        setStock(e.target.value);
    }
    const handleTitleChange=(e)=>{
        setTitle(e.target.value);
    }
    const handlePreviusChange=(e)=>{
        setPrevious_price(e.target.value);
    }
    const handlePriceChange=(e)=>{
        setPrice(e.target.value);
    }


    const handelSubmit = () => {
        const newProducts ={
            categoty,
            description,
            images,
            title,
            stock,
            previous_price,
            price
        }

        const db = getFirestore()
        const newProductsCollection = collection(db, "Tecnologia" ,productsID)
        addDoc(newProductsCollection,newProducts).then(({id})=>console.log(id))
    }

    React.useEffect(()=>{
        const db = getFirestore();

        const tecnologia = doc(db, "Tecnologia", productsID)
        getDoc(tecnologia)
        .then((snapshot) => {
        setProductsData({ id: snapshot.id, ...snapshot.data() });
        })
        .catch(()=> setError(true))
        .then(()=> setLoading(false));
    }, [productsID]);


    return (
    <div>
        <input type="text"
        onChange={(e)=> handleCategoryChange(e)} 
        placeholder='Categoria'/>

        <input type="text" 
        onChange={(e)=> handleDescriptionChange(e)} 
        placeholder="Descripcion"/>

        <input type="text" 
        onChange={(e)=> handleImagesChange(e)} 
        placeholder='Imagen' />

        <input type="text" 
        onChange={(e)=> handleStockChange(e)} 
        placeholder='Stock' />

        <input type="text" 
        onChange={(e)=> handleTitleChange(e)} 
        placeholder='Titulo' />

        <input type="number" 
        onChange={(e)=> handlePreviusChange(e)} 
        placeholder='Precio Previo' />

        <input type="number" 
        onChange={(e)=> handlePriceChange(e)} 
        placeholder='Precio' />

        <button onClick={handelSubmit}>Modificar producto</button>
    </div>
  )
}

export default ModifyProducts