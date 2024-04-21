import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Repo() {

  const { id } = useParams()
  const [repodetails, setrepoDetails] = useState({})
  const [branch, setBranch] = useState({})
  const [deployment, setDeployment] = useState({})
  const [userAvatar, setUserAvatar] = useState("")
 
  useEffect(() => {
    const getRepos = async () => {
     await fetch(`https://api.github.com/repos/bayotics/${id}`)
    .then((response) => (response.json()))
    .then((data) => {
        setrepoDetails(data)
    })
    }
    getRepos()
  }, []) 

  useEffect(()  => {
    const getBranches = async () => {
    await fetch(`https://api.github.com/repos/bayotics/${id}/branches`)
    .then((response) => (response.json()))
    .then((data) => {
      setBranch(data)
      })
    }  
    getBranches()
  }, []) 

  useEffect(() => {
    setUserAvatar(repodetails.owner.avatar_url)
  }, [])

  console.log(repodetails.owner)
// console.log(repodetails.owner.avatar_url)    
// const userAvatar = repodetails.owner.avatar_url

//   useEffect(() => {
//     fetch(`https://api.github.com/repos/bayotics/${id}/deployments`)
//     .then((response) => (response.json()))
//     .then((data) => {
//       setDeployment(data)
//     })
//   }, []) 

  return (
    <div className="repo-details">
        <div className='w-4/5 pb-3 border-b repo-details-heading'>
            <div className='flex gap-2'>
                <div className='user-avatar h-6 w-6'>
                    <img className='user-image' src = {userAvatar} alt='user-repo-avatar' />
                </div>
                <div className='repo-title'>
                    <h3 className="text-lg font-semibold text-blue-600">{repodetails.name}</h3>
                </div>
                <div className='repo-visibility border rounded-full px-2  text-xs'>
                    <p className='leading-none mt-1'>{repodetails.visibility}</p>
                </div>
            </div>
        </div>
        <div className='repo-desc w-4/5 border'>
          <div className='flex gap-4'>Repo description: {repodetails.description === null ? (<div><h3>None</h3></div>) : (
            <div><h3>{repodetails.description}</h3></div>
          )}</div>
          <div className='mt-3'>
            <h3>Date created: {repodetails.created_at}</h3>
          </div>
          <div className='mt-3'>
            <h3>Last updated: {repodetails.updated_at}</h3>
          </div>
          <div className='mt-3'>
            <h3>Visibility: {repodetails.visibility}</h3>
          </div>
          <div className='flex gap-4 mt-3'>Language: {repodetails.language === null ? (<div><h3>None</h3></div>) : (
            <div><h3>{repodetails.language}</h3></div>
          )}</div>
        </div>
    </div>
  )
}

export default Repo