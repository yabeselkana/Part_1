const Pool = require('../config/db')


const selectAllProduct = () =>{
    return Pool.query(`SELECT * FROM producs order by id asc`);
}

const selectProduct = (id) =>{
    return Pool.query(`SELECT * FROM producs WHERE id=${id}`);
}

const insertProduct = (data) =>{
    const { id,nama,stock,price} = data;
    return Pool.query(`INSERT INTO producs(nama,stock,price) VALUES('${nama}',${stock},${price})`);
}

const updateProduct = (data) =>{
    const { id,nama,stock,price} = data;
    return Pool.query(`UPDATE producs SET nama='${nama}', stock=${stock}, price=${price} WHERE id=${id}`);
}


const deleteProduct = (id) =>{
    return Pool.query(`DELETE FROM producs WHERE id=${id}`);
}

const countData = () =>{
    return Pool.query('SELECT COUNT(*) FROM producs')
  }
  
const findId =(id)=>{
    return  new Promise ((resolve,reject)=> 
    Pool.query(`SELECT id FROM producs WHERE id=${id}`,(error,result)=>{
      if(!error){
        resolve(result)
      }else{
        reject(error)
      }
    })
    )
  }



module.exports = {
    selectAllProduct,
    selectProduct,
    insertProduct,
    updateProduct,
    deleteProduct,
    countData,
    findId
}