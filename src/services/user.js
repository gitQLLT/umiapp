export async function getUserList(){
  return fetch('http://localhost:8000/api/userList').then(res=>{
    if(res.status===200){
      return res.json()
    }
  }).then(data=>{
    if(data.code===200){
      return data.data
    }
  })
}
