export async function getCharacter(){
    const api = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e754a726a515322df7fa88d98c64b139&hash=e4e7c1dad920e8ec67db33ecd7fd7261&limit=100 '
    const res = await fetch(`${api}`)

  
    async function handleResponse(res){
      if(!res.ok){
        throw new Error(res.statusText)
      }
      const data = await res.json()
  
      return data.data
    } 
  
    return handleResponse(res)
}

export async function detailCharacter(characterID){
  const api = `https://gateway.marvel.com/v1/public/characters/${characterID}?ts=1&apikey=e754a726a515322df7fa88d98c64b139&hash=e4e7c1dad920e8ec67db33ecd7fd7261&`
  const res = await fetch(`${api}`)


  async function handleResponse(res){
    if(!res.ok){
      throw new Error(res.statusText)
    }
    const data = await res.json()

    return data.data
  } 

  return handleResponse(res)
}

