import { useState, useEffect } from "react"
import { Octokit } from "octokit";

const CreateRepo = () => {
    const [org, setOrg] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [homepage, setHomePage] = useState ("");
    const [has_issues, set_has_issues] = useState (true);
    const [has_projects, set_has_projects] = useState (true);
    const [has_wiki, set_has_wiki] = useState (true);



    // Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
    auth: 'YOUR-TOKEN'
  })
  
  await octokit.request('POST /orgs/{org}/repos', {
    org: 'ORG',
    name: 'Hello-World',
    description: 'This is your first repository',
    homepage: 'https://github.com',
    'private': false,
    has_issues: true,
    has_projects: true,
    has_wiki: true,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
    return (
        <div>This is the create repo modal</div>
    )
}

export default CreateRepo