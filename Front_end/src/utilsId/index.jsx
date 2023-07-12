import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

function useFetchId (url){
    const projectUrl = useParams();
        const [project, setProject] = useState({});
        const [isLoading, setLoading] = useState(true);
        const [error, setError] = useState(false);
    
        useEffect(() => {
            async function fetchData(url) {
                try {
                    const response = await fetch(url);
                    const projectsData = await response.json();
                    const project = projectsData.find(
                        (project) => project.id === projectUrl.id
                    );
                    if (!projectUrl.id) {
                        <Navigate to="/Error" />;
                    } else {
                        setProject(project);
                    }
                } catch (err) {
                    console.log(err);
                    setError(true);
                } finally {
                    setLoading(false);
                }
            }
            fetchData();
        }, [projectUrl.id]);
        return {project, isLoading, error};
    }
    export default useFetchId;