import { useEffect, useState } from "react"



const Repos = () => {
    const [repos, setRepos] = useState([])

  const fetchRepos = async () => {
    await fetch(`https://api.github.com/users/bayotics/repos`)
    .then((response) => (response.json()))
    .then((data) => {
        setRepos(data)  
        console.log(data)
    })
  }

  useEffect(() => {
    fetchRepos()
  }, []) 

  return (
      <div>
        {repos.length === 0 ? (
            <div>No repositories for this user</div>
        ) : (
            <div className="border flex main-repo w-4/5 ">
                <div>
                    {repos.map((e) => 
                        (
                            <div className="flex border-b py-6"
                            key={e.id}> 
                                <div className="flex">
                                    <div className="flex gap-4">
                                        <h3 className="text-lg font-semibold text-blue-600">{e.name}</h3>
                                        <div className="border rounded-full px-2 py-1 text-xs">
                                            <p>{e.visibility}</p>
                                        </div>
                                    </div>
                                    <div className="repo-star">

                                    </div>
                                </div>
                                <div className="repo-details">

                                </div>
                            </div>
                        )
                    )}
                </div>
                
            </div>
        )}
      </div>
  )
}

export default Repos