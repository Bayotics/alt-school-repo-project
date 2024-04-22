import { useState } from "react"
import Repos from "../components/repos"
import CreateRepo from "../components/createRepo";

const Home = () => {
    const [postmodal, setPostModal] = useState (false);
    return(
        <div>
            <div className="flex justify-center mt-10">
                <div onClick={() => setPostModal(!postmodal)}>
                    <button className='w-40 h-10 bg-green-600'>
                        <p className='text-white'>Create new Repository</p>
                    </button>
                </div>
                {postmodal && <CreateRepo setPostModal = {setPostModal}/>}
            </div>
            <div className="mt-6">
                <Repos />
            </div>
        </div>
    )
}

export default Home