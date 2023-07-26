import Layout from '../components/layout'
import Head from 'next/head'
import { TOKEN,DATABASE_ID } from '../config';
import ProjectItem from '../components/projects/project_item';
 

export default function Project({projects}) {
    
    return (
        <Layout >
            <div className="flex flex-col items-center  min-h-screen px-6 mt-12">
                <Head>
                    <title>Welcome my Portfolio</title>
                    <meta name='description' content='포트폴리오'></meta>
                </Head>
                <div className='flex flex-row flex-wrap w-2/3 mx-auto mb-20'>
                    {projects.results.map((aProject, i)=>(
                        <ProjectItem index={i} key={aProject.id} data={aProject}/>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps(){
    const options = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            'authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts:[
                {
                "property":"period",
                "direction":"descending"
                }
            ],  
            page_size:100
        })
    };
    
    const res =await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    
    const projects = await res.json()


    return {props:{projects}}
    
}